> Release-pinned source for aria2 release-1.37.0: [doc/manual-src/en/libaria2.rst](https://github.com/aria2/aria2/blob/02f2d0d8472b3c38c29b4dba8c75ebd5fdd2899a/doc/manual-src/en/libaria2.rst)

# libaria2: C++ library interface to aria2

> **Warning**
> The API has not been frozen yet. It will be changed on the course of
> the development.

The libaria2 is a C++ library and offers the core functionality of
aria2. The library takes care of all networking and downloading stuff,
so its usage is very straight forward right now. See the following
Tutorial section to see how to use API.

## Tutorial

This section is a step by step guide to create a program to download
files using libaria2. The complete source is located at
*libaria2ex.cc* in *examples* directory.

The *libaria2ex* program takes one or more URIs and downloads each of
them in parallel. The usage is:

```cpp
Usage: libaria2ex URI [URI...]

  Download given URIs in parallel in the current directory.
```

The source code uses C++11 features, so C++11 enabled compiler is
required. GCC 4.7 works well here.

OK, let's look into the source code. First, include aria2.h header
file:

```cpp
#include <aria2/aria2.h>
```

Skip to the `main()` function. After checking command-line
arguments, we initialize libaria2:

```cpp
aria2::libraryInit();
```

And create aria2 session object:

```cpp
aria2::Session* session;
// Create default configuration. The libaria2 takes care of signal
// handling.
aria2::SessionConfig config;
// Add event callback
config.downloadEventCallback = downloadEventCallback;
session = aria2::sessionNew(aria2::KeyVals(), config);
```

`Session` `session` is an aria2 session object. You need this
object through out the download process. Please keep in mind that only
one `Session` object can be allowed per process due to the heavy
use of static objects in aria2 code base.  `Session` object is
not safe for concurrent accesses from multiple threads.  It must be
used from one thread at a time.  In general, libaria2 is not entirely
thread-safe.  `SessionConfig` `config` holds configuration for
the session object. The constructor initializes it with the default
values. In this setup, `SessionConfig::keepRunning` is
`false` which means `run()` returns when all downloads are
processed, just like aria2c utility without RPC enabled.  And
`SessionConfig::useSignalHandler` is `true`, which means
libaria2 will setup signal handlers and catches certain signals to
halt download process gracefully. We also setup event handler callback
function `downloadEventCallback`.  It will be called when an event
occurred such as download is started, completed, etc. In this example
program, we handle 2 events: download completion and error. For each
event, we print the GID of the download and several other
information:

```cpp
int downloadEventCallback(aria2::Session* session, aria2::DownloadEvent event,
      		    const aria2::A2Gid& gid, void* userData)
{
  switch(event) {
  case aria2::EVENT_ON_DOWNLOAD_COMPLETE:
    std::cerr << "COMPLETE";
    break;
  case aria2::EVENT_ON_DOWNLOAD_ERROR:
    std::cerr << "ERROR";
    break;
  default:
    return 0;
  }
  std::cerr << " [" << aria2::gidToHex(gid) << "] ";
  ...
}
```

The `userData` object is specified by
`SessionConfig::userData`. In this example, we don't specify
it, so it is `nullptr`.

The first argument to `sessionNew()` is `aria2::KeyVals()`.
This type is used in API to specify vector of key/value pairs, mostly
representing aria2 options. For example, specify an option
`file-allocation` to `none`:

```cpp
aria2::KeyVals options;
options.push_back(std::pair<std::string, std::string> ("file-allocation", "none"));
```

The first argument of `sessionNew()` is analogous to the
command-line argument to aria2c program. In the example program, we
provide no options, so just pass empty vector.

After the creation of session object, let's add downloads given in the
command-line:

```cpp
// Add download item to session
for(int i = 1; i < argc; ++i) {
  std::vector<std::string> uris = {argv[i]};
  aria2::KeyVals options;
  rv = aria2::addUri(session, nullptr, uris, options);
  if(rv < 0) {
    std::cerr << "Failed to add download " << uris[0] << std::endl;
  }
}
```

We iterate command-line arguments and add each of them as a separate
download. `addUri()` can take one or more URIs to download
several sources, just like aria2c does, but in this example, we just
give just one URI. We provide no particular option for the download,
so pass the empty vector as options. The second argument of
`addUri()` takes a pointer to `A2Gid`. If it is not
`NULL`, the function assigns the GID of the new download to it.  In
this example code, we have no interest for it, so just pass
`nullptr`.

We have set up everything at this stage. So let's start download.  To
perform the download, call `run()` repeatedly until it returns
the value other than `1`:

```cpp
for(;;) {
  rv = aria2::run(session, aria2::RUN_ONCE);
  if(rv != 1) {
    break;
  }
  ...
}
```

Here, we call `run()` with `RUN_ONCE`. It means
`run()` returns after one event polling and its action handling
or polling timeout (which is approximately 1 second). If `run()`
returns `1`, it means the download is in progress and the
application must call it again. If it returns `0`, then no download
is left (or it is stopped by signal handler or `shutdown()`).
If the function catches error, it returns `-1`.  The good point of
using `RUN_ONCE` is that the application can use libaria2 API
when `run()` returns. In the example program, we print the
progress of the download in every no less than 500 millisecond:

```cpp
// Print progress information once per 500ms
if(count >= 500) {
  start = now;
  aria2::GlobalStat gstat = aria2::getGlobalStat(session);
  std::cerr << "Overall #Active:" << gstat.numActive
            << " #waiting:" << gstat.numWaiting
            << " D:" << gstat.downloadSpeed/1024 << "KiB/s"
            << " U:"<< gstat.uploadSpeed/1024 << "KiB/s " << std::endl;
  std::vector<aria2::A2Gid> gids = aria2::getActiveDownload(session);
  for(const auto& gid : gids) {
    aria2::DownloadHandle* dh = aria2::getDownloadHandle(session, gid);
    if(dh) {
      std::cerr << "    [" << aria2::gidToHex(gid) << "] "
                << dh->getCompletedLength() << "/"
                << dh->getTotalLength() << "("
                << (dh->getTotalLength() > 0 ?
                    (100*dh->getCompletedLength()/dh->getTotalLength())
                    : 0) << "%)"
                << " D:"
                << dh->getDownloadSpeed()/1024 << "KiB/s, U:"
                << dh->getUploadSpeed()/1024 << "KiB/s"
                << std::endl;
      aria2::deleteDownloadHandle(dh);
    }
  }
}
```

We first call `getGlobalStat()` function to get global
statistics of the downloads. Then, call `getActiveDownload()`
function to get the vector of active download's GID. For each GID, we
retrieve `DownloadHandle` object using
`getDownloadHandle` function and get detailed information.
Please don't forget to delete `DownloadHandle` after the use
and before the next call of `run()`.  Keep in mind that the life
time of `DownloadHandle` object is before the next call of
`run()` function.

After the loop, finalize download calling `sessionFinal()`
function and call `libraryDeinit()` to release resources for the
library:

```cpp
rv = aria2::sessionFinal(session);
aria2::libraryDeinit();
return rv;
```

Calling `sessionFinal()` is important because it performs
post-download action, including saving sessions and destroys session
object. So failing to call this function will lead to lose the
download progress and memory leak. The `sessionFinal()` returns
the code defined in [exit-status](https://aria2.github.io/manual/en/html/aria2c.html#exit-status). aria2c program also returns
the same value as exist status, so do the same in this tiny example
program.

See also *libaria2wx.cc* which uses wx GUI component as UI and use
background thread to run download.

## API Reference

To use the API function, include `aria2/aria2.h`:

```cpp
#include <aria2/aria2.h>
```

All enums, types and functions are under `aria2` namespace. To link
with libaria2, use linker flag `-laria2`.

### Enums

<a id="api-enum-downloadevent"></a>
#### `enum DownloadEvent`

Download event constants

<a id="api-enum-downloadevent-event-on-download-start-1"></a>
##### `EVENT_ON_DOWNLOAD_START = 1`

Indicating download has started.

<a id="api-enum-downloadevent-event-on-download-pause"></a>
##### `EVENT_ON_DOWNLOAD_PAUSE`

Indicating download has paused.

<a id="api-enum-downloadevent-event-on-download-stop"></a>
##### `EVENT_ON_DOWNLOAD_STOP`

Indicating download has stopped.

<a id="api-enum-downloadevent-event-on-download-complete"></a>
##### `EVENT_ON_DOWNLOAD_COMPLETE`

Indicating download has completed.

<a id="api-enum-downloadevent-event-on-download-error"></a>
##### `EVENT_ON_DOWNLOAD_ERROR`

Indicating download has stopped because of the error.

<a id="api-enum-downloadevent-event-on-bt-download-complete"></a>
##### `EVENT_ON_BT_DOWNLOAD_COMPLETE`

Indicating BitTorrent download has completed, but it may still
continue to perform seeding.

<a id="api-enum-run-mode"></a>
#### `enum RUN_MODE`

Execution mode for `run()`

<a id="api-enum-run-mode-run-default"></a>
##### `RUN_DEFAULT`

`run()` returns when no downloads are left.

<a id="api-enum-run-mode-run-once"></a>
##### `RUN_ONCE`

`run()` returns after one event polling.

<a id="api-enum-offsetmode"></a>
#### `enum OffsetMode`

Constants how to re-position a download.

<a id="api-enum-offsetmode-offset-mode-set"></a>
##### `OFFSET_MODE_SET`

Moves the download to a position relative to the beginning of the
queue.

<a id="api-enum-offsetmode-offset-mode-cur"></a>
##### `OFFSET_MODE_CUR`

Moves the download to a position relative to the current
position.

<a id="api-enum-offsetmode-offset-mode-end"></a>
##### `OFFSET_MODE_END`

Moves the download to a position relative to the end of the
queue.

<a id="api-enum-uristatus"></a>
#### `enum UriStatus`

The status of URI.

<a id="api-enum-uristatus-uri-used"></a>
##### `URI_USED`

Indicating the URI has been used.

<a id="api-enum-uristatus-uri-waiting"></a>
##### `URI_WAITING`

Indicating the URI has not been used.

<a id="api-enum-btfilemode"></a>
#### `enum BtFileMode`

BitTorrent file mode

<a id="api-enum-btfilemode-bt-file-mode-none"></a>
##### `BT_FILE_MODE_NONE`

Indicating no mode. This value is used when file mode is not
available.

<a id="api-enum-btfilemode-bt-file-mode-single"></a>
##### `BT_FILE_MODE_SINGLE`

Indicating single file torrent

<a id="api-enum-btfilemode-bt-file-mode-multi"></a>
##### `BT_FILE_MODE_MULTI`

Indicating multi file torrent

<a id="api-enum-downloadstatus"></a>
#### `enum DownloadStatus`

The status of download item.

<a id="api-enum-downloadstatus-download-active"></a>
##### `DOWNLOAD_ACTIVE`

Indicating currently downloading/seeding.

<a id="api-enum-downloadstatus-download-waiting"></a>
##### `DOWNLOAD_WAITING`

Indicating in the queue; download is not started.

<a id="api-enum-downloadstatus-download-paused"></a>
##### `DOWNLOAD_PAUSED`

Indicating the download is paused.

<a id="api-enum-downloadstatus-download-complete"></a>
##### `DOWNLOAD_COMPLETE`

Indicating stopped and completed download.

<a id="api-enum-downloadstatus-download-error"></a>
##### `DOWNLOAD_ERROR`

Indicating stopped download because of error.

<a id="api-enum-downloadstatus-download-removed"></a>
##### `DOWNLOAD_REMOVED`

Indicating removed by user's discretion.

### Types

<a id="api-struct-session"></a>
#### `struct Session`

This object identifies aria2 session. To create session, use
`sessionNew()` function.

<a id="api-uint64-t-a2gid"></a>
#### `uint64_t A2Gid`

The type of GID, persistent identifier of each download.

<a id="api-std-vector-std-pair-std-string-std-string-keyvals"></a>
#### `std::vector<std::pair<std::string, std::string>> KeyVals`

The type of Key/Value pairs.

<a id="api-int-downloadeventcallback-session-session-downloadevent-event-a2gid-gid-void-userdata"></a>
#### `int (*DownloadEventCallback)(Session* session, DownloadEvent event, A2Gid gid, void* userData)`

Callback function invoked when download event occurred. The *event*
indicates the event. See `DownloadEvent` for events. The
*gid* refers to the download which this event was fired on. The
*userData* is a pointer specified in
`SessionConfig::userData`.

At the moment, the return value is ignored, but the implementation
of this callback should return 0 for compatibility.

<a id="api-struct-sessionconfig"></a>
#### `struct SessionConfig`

The configuration for the session.

<a id="api-struct-sessionconfig-sessionconfig"></a>
##### `SessionConfig()`

The constructor fills default values for all members.

<a id="api-struct-sessionconfig-bool-keeprunning"></a>
##### `bool keepRunning`

If the *keepRunning* member is true, `run(session, RUN_ONCE)`
will return 1 even if there are no download to perform. The
behavior is very similar to RPC server, except that this option
does not enable RPC functionality. To stop aria2, use
`shutdown()` function.  The default value is false.

<a id="api-struct-sessionconfig-bool-usesignalhandler"></a>
##### `bool useSignalHandler`

If the *useSignalHandler* is true, the library setups following
signal handlers in `sessionNew()`. These signal handlers
are removed in `sessionFinal()`. The default value is
true. If the application sets this member to false, it must
handle these signals and ensure that run() is repeatedly called
until it returns 0 and `sessionFinal()` is called after
that. Failing these steps will lead to not saving .aria2 control
file and no session serialization.

**`SIGPIPE`, `SIGCHLD`:**

ignored

**`SIGHUP`, `SIGTERM`:**

handled like shutdown(session, true) is called.

**`SIGINT`:**

handled like shutdown(session, false) is called.

<a id="api-struct-sessionconfig-downloadeventcallback-downloadeventcallback"></a>
##### `DownloadEventCallback downloadEventCallback`

Specify the callback function which will be invoked when download
event occurred. See `DownloadEvent` about the download
event. The default value is `NULL`.

<a id="api-struct-sessionconfig-void-userdata"></a>
##### `void* userData`

Pointer to user defined data. libaria2 treats this as opaque
pointer and will not free it. The default value is `NULL`.

<a id="api-struct-globalstat"></a>
#### `struct GlobalStat`

Global statistics of current aria2 session.

<a id="api-struct-globalstat-int-downloadspeed"></a>
##### `int downloadSpeed`

Overall download speed (byte/sec).

<a id="api-struct-globalstat-int-uploadspeed"></a>
##### `int uploadSpeed`

Overall upload speed(byte/sec).

<a id="api-struct-globalstat-int-numactive"></a>
##### `int numActive`

The number of active downloads.

<a id="api-struct-globalstat-int-numwaiting"></a>
##### `int numWaiting`

The number of waiting downloads.

<a id="api-struct-globalstat-int-numstopped"></a>
##### `int numStopped`

The number of stopped downloads.

<a id="api-struct-uridata"></a>
#### `struct UriData`

This object contains URI and its status.

<a id="api-struct-uridata-std-string-uri"></a>
##### `std::string uri`

URI

<a id="api-struct-uridata-uristatus-status"></a>
##### `UriStatus status`

The status of URI

<a id="api-struct-filedata"></a>
#### `struct FileData`

This object contains information of file to download.

<a id="api-struct-filedata-int-index"></a>
##### `int index`

1-based index of the file in the download. This is the same order
with the files in multi-file torrent. This index is used to get
this object using `DownloadHandle::getFile()` function.

<a id="api-struct-filedata-std-string-path"></a>
##### `std::string path`

The local file path to this file when downloaded.

<a id="api-struct-filedata-int64-t-length"></a>
##### `int64_t length`

The file size in bytes. This is not the current size of the local
file.

<a id="api-struct-filedata-int64-t-completedlength"></a>
##### `int64_t completedLength`

The completed length of this file in bytes. Please note that it
is possible that sum of *completedLength* is less than the return
value of `DownloadHandle::getCompletedLength()`
function. This is because the *completedLength* only calculates
completed pieces. On the other hand,
`DownloadHandle::getCompletedLength()` takes into account
of partially completed piece.

<a id="api-struct-filedata-bool-selected"></a>
##### `bool selected`

true if this file is selected by `select-file` option. If
`select-file` is not specified or this is single torrent or no
torrent download, this value is always true.

<a id="api-struct-filedata-std-vector-uridata-uris"></a>
##### `std::vector<UriData> uris`

Returns the list of URI for this file.

<a id="api-struct-btmetainfodata"></a>
#### `struct BtMetaInfoData`

BitTorrent metainfo data retrieved from ".torrent" file.

<a id="api-struct-btmetainfodata-std-vector-std-vector-std-string-announcelist"></a>
##### `std::vector<std::vector<std::string>> announceList`

List of lists of announce URI. If ".torrent" file contains
`announce` and no `announce-list`, `announce` is converted
to `announce-list` format.

<a id="api-struct-btmetainfodata-std-string-comment"></a>
##### `std::string comment`

`comment` for the torrent. `comment.utf-8` is used if
available.

<a id="api-struct-btmetainfodata-time-t-creationdate"></a>
##### `time_t creationDate`

The creation time of the torrent. The value is an integer since
the Epoch, measured in seconds.

<a id="api-struct-btmetainfodata-btfilemode-mode"></a>
##### `BtFileMode mode`

File mode of the torrent.

<a id="api-struct-btmetainfodata-std-string-name"></a>
##### `std::string name`

`name` in `info` dictionary. `name.utf-8` is used if
available.

<a id="api-class-downloadhandle"></a>
#### `class DownloadHandle`

The interface to get information of download item.

<a id="api-class-downloadhandle-downloadstatus-getstatus"></a>
##### `DownloadStatus getStatus()`

Returns status of this download.

<a id="api-class-downloadhandle-int64-t-gettotallength"></a>
##### `int64_t getTotalLength()`

Returns the total length of this download in bytes.

<a id="api-class-downloadhandle-int64-t-getcompletedlength"></a>
##### `int64_t getCompletedLength()`

Returns the completed length of this download in bytes.

<a id="api-class-downloadhandle-int64-t-getuploadlength"></a>
##### `int64_t getUploadLength()`

Returns the uploaded length of this download in bytes.

<a id="api-class-downloadhandle-std-string-getbitfield"></a>
##### `std::string getBitfield()`

Returns the download progress in byte-string. The highest bit
corresponds to piece index 0. The set bits indicate the piece is
available and unset bits indicate the piece is missing. The spare
bits at the end are set to zero. When download has not started
yet, returns empty string.

<a id="api-class-downloadhandle-int-getdownloadspeed"></a>
##### `int getDownloadSpeed()`

Returns download speed of this download measured in bytes/sec.

<a id="api-class-downloadhandle-int-getuploadspeed"></a>
##### `int getUploadSpeed()`

Returns upload speed of this download measured in bytes/sec.

<a id="api-class-downloadhandle-const-std-string-getinfohash"></a>
##### `const std::string& getInfoHash()`

Returns 20 bytes InfoHash if BitTorrent transfer is
involved. Otherwise the empty string is returned.

<a id="api-class-downloadhandle-size-t-getpiecelength"></a>
##### `size_t getPieceLength()`

Returns piece length in bytes.

<a id="api-class-downloadhandle-int-getnumpieces"></a>
##### `int getNumPieces()`

Returns the number of pieces.

<a id="api-class-downloadhandle-int-getconnections"></a>
##### `int getConnections()`

Returns the number of peers/servers the client has connected to.

<a id="api-class-downloadhandle-int-geterrorcode"></a>
##### `int getErrorCode()`

Returns the last error code occurred in this download. The error
codes are defined in [exit-status](https://aria2.github.io/manual/en/html/aria2c.html#exit-status) section of
`aria2c(1)`. This value has its meaning only for
stopped/completed downloads.

<a id="api-class-downloadhandle-const-std-vector-a2gid-getfollowedby"></a>
##### `const std::vector<A2Gid>& getFollowedBy()`

Returns array of GIDs which are generated by the consequence of
this download. For example, when aria2 downloaded Metalink file,
it generates downloads described in it (see
`--follow-metalink` option). This value is useful to
track these auto generated downloads. If there is no such
downloads, this function returns empty array.

<a id="api-class-downloadhandle-a2gid-getfollowing"></a>
##### `A2Gid getFollowing()`

Returns the GID of the download which generated this download.
This is a reverse link of
`DownloadHandle::getFollowedBy()`.

<a id="api-class-downloadhandle-a2gid-getbelongsto"></a>
##### `A2Gid getBelongsTo()`

Returns the GID of a parent download. Some downloads are a part
of another download. For example, if a file in Metalink has
BitTorrent resource, the download of ".torrent" is a part of that
file. If this download has no parent, the invalid GID is returned
(`isNull(gid)` is true).

<a id="api-class-downloadhandle-const-std-string-getdir"></a>
##### `const std::string& getDir()`

Returns the directory to save files.

<a id="api-class-downloadhandle-std-vector-filedata-getfiles"></a>
##### `std::vector<FileData> getFiles()`

Returns the array of files this download contains.

<a id="api-class-downloadhandle-int-getnumfiles"></a>
##### `int getNumFiles()`

Returns the number of files. The return value is equivalent to
`DownloadHandle::getFiles().size()`.

<a id="api-class-downloadhandle-filedata-getfile-int-index"></a>
##### `FileData getFile(int index)`

Returns the FileData of the file at the specified *index*. Please
note that the index is 1-based. It is undefined when the *index*
is out-of-bound.

<a id="api-class-downloadhandle-btmetainfodata-getbtmetainfo"></a>
##### `BtMetaInfoData getBtMetaInfo()`

Returns the information retrieved from ".torrent" file. This
function is only meaningful only when BitTorrent transfer is
involved in the download and the download is not
stopped/completed.

<a id="api-class-downloadhandle-const-std-string-getoption-const-std-string-name"></a>
##### `const std::string& getOption(const std::string& name)`

Returns the option value denoted by the *name*.  If the option
denoted by the *name* is not available, returns empty string.

Calling this function for the download which is not in
`DOWNLOAD_ACTIVE`, `DOWNLOAD_PAUSED` or
`DOWNLOAD_WAITING` will return empty string.

<a id="api-class-downloadhandle-keyvals-getoptions"></a>
##### `KeyVals getOptions()`

Returns options for this download. Note that this function does
not return options which have no default value and have not been
set by `sessionNew()`, configuration files or API
functions.

### Functions

<a id="api-int-libraryinit"></a>
#### `int libraryInit()`

Initializes the global data. It also initializes underlying
libraries libaria2 depends on. This function returns 0 if it
succeeds, or negative error code.

Call this function only once before calling any other API
functions.

<a id="api-int-librarydeinit"></a>
#### `int libraryDeinit()`

Releases the global data. This function returns 0 if it succeeds,
or negative error code.

Call this function only once at the end of the application.

<a id="api-session-sessionnew-const-keyvals-options-const-sessionconfig-config"></a>
#### `Session* sessionNew(const KeyVals& options, const SessionConfig& config)`

Creates new Session object using the *options* as additional
parameters. The *options* is treated as if they are specified in
command-line to `aria2c(1)`. This function returns the
pointer to the created Session object if it succeeds, or `NULL`.

Please note that only one Session object can be created per
process.

<a id="api-int-sessionfinal-session-session"></a>
#### `int sessionFinal(Session* session)`

Performs post-download action, including saving sessions etc and
destroys the *session* object, releasing the allocated resources
for it. This function returns the last error code and it is the
equivalent to the [exit-status](https://aria2.github.io/manual/en/html/aria2c.html#exit-status) of `aria2c(1)`.

<a id="api-int-run-session-session-run-mode-mode"></a>
#### `int run(Session* session, RUN_MODE mode)`

Performs event polling and actions for them. If the *mode* is
`RUN_DEFAULT`, this function returns when no downloads are
left to be processed. In this case, this function returns 0.

If the *mode* is `RUN_ONCE`, this function returns after
one event polling. In the current implementation, event polling
timeouts in 1 second. This function also returns on each
timeout. On return, when no downloads are left to be processed,
this function returns 0. Otherwise, returns 1, indicating that the
caller must call this function one or more time to complete
downloads.

In either case, this function returns negative error code on error.

<a id="api-std-string-gidtohex-a2gid-gid"></a>
#### `std::string gidToHex(A2Gid gid)`

Returns textual representation of the *gid*.

<a id="api-a2gid-hextogid-const-std-string-hex"></a>
#### `A2Gid hexToGid(const std::string& hex)`

Returns GID converted from the textual representation *hex*.

<a id="api-bool-isnull-a2gid-gid"></a>
#### `bool isNull(A2Gid gid)`

Returns true if the *gid* is invalid.

<a id="api-int-adduri-session-session-a2gid-gid-const-std-vector-std-string-uris-const-keyvals-options-int-position-1"></a>
#### `int addUri(Session* session, A2Gid* gid, const std::vector<std::string>& uris, const KeyVals& options, int position = -1)`

Adds new HTTP(S)/FTP/BitTorrent Magnet URI.  On successful return,
if the *gid* is not `NULL`, the GID of added download will be
assigned to the *\*gid*.  The *uris* includes URI to be downloaded.
For BitTorrent Magnet URI, the *uris* must have only one element
and it should be BitTorrent Magnet URI. URIs in the *uris* must
point to the same file. If you mix other URIs which point to
another file, aria2 does not complain but download may fail. The
*options* is an array of a pair of option name and value. If
unknown options are included in *options*, they are simply
ignored. If the *position* is not negative integer, the new
download is inserted at position in the waiting queue. If the
*position* is negative or the *position* is larger than the size of
the queue, it is appended at the end of the queue.  This function
returns 0 if it succeeds, or negative error code.

<a id="api-int-addmetalink-session-session-std-vector-a2gid-gids-const-std-string-metalinkfile-const-keyvals-options-int-position-1"></a>
#### `int addMetalink(Session* session, std::vector<A2Gid>* gids, const std::string& metalinkFile, const KeyVals& options, int position = -1)`

Adds Metalink download. The path to Metalink file is specified by
the *metalinkFile*.  On successful return, if the *gids* is not
`NULL`, the GIDs of added downloads are appended to the
*\*gids*. The *options* is an array of a pair of option name and
value. If unknown options are included in *options*, they are
simply ignored. If the *position* is not negative integer, the new
download is inserted at position in the waiting queue. If the
*position* is negative or the *position* is larger than the size of
the queue, it is appended at the end of the queue. This function
returns 0 if it succeeds, or negative error code.

<a id="api-int-addtorrent-session-session-a2gid-gid-const-std-string-torrentfile-const-std-vector-std-string-webseeduris-const-keyvals-options-int-position-1"></a>
#### `int addTorrent(Session* session, A2Gid* gid, const std::string& torrentFile, const std::vector<std::string>& webSeedUris, const KeyVals& options, int position = -1)`

Adds BitTorrent download. On successful return, if the *gid* is not
`NULL`, the GID of added download will be assigned to the
*\*gid*. The path to ".torrent" file is specified by the
*torrentFile*. BitTorrent Magnet URI cannot be used with this
function. Use `addUri()` instead. The *webSeedUris* contains
URIs used for Web-seeding. For single file torrents, URI can be a
complete URI pointing to the resource or if URI ends with /, name
in torrent file is added. For multi-file torrents, name and path in
torrent are added to form a URI for each file. The *options* is an
array of a pair of option name and value.  If unknown options are
included in *options*, they are simply ignored. If the *position*
is not negative integer, the new download is inserted at position
in the waiting queue. If the *position* is negative or the
*position* is larger than the size of the queue, it is appended at
the end of the queue.

This function returns 0 if it succeeds, or negative error code.

<a id="api-int-addtorrent-session-session-a2gid-gid-const-std-string-torrentfile-const-keyvals-options-int-position-1"></a>
#### `int addTorrent(Session* session, A2Gid* gid, const std::string& torrentFile, const KeyVals& options, int position = -1)`

Same as `addTorrent()` with an empty vector as the
*webSeedUris*.

<a id="api-std-vector-a2gid-getactivedownload-session-session"></a>
#### `std::vector<A2Gid> getActiveDownload(Session* session)`

Returns the array of active download GID.

<a id="api-int-removedownload-session-session-a2gid-gid-bool-force-false"></a>
#### `int removeDownload(Session* session, A2Gid gid, bool force = false)`

Removes the download denoted by the *gid*. If the specified
download is in progress, it is stopped at first. The status of
removed download becomes `DOWNLOAD_REMOVED`. If the
*force* is true, removal will take place without any action which
takes time such as contacting BitTorrent tracker. This function
returns 0 if it succeeds, or negative error code.

<a id="api-int-pausedownload-session-session-a2gid-gid-bool-force-false"></a>
#### `int pauseDownload(Session* session, A2Gid gid, bool force = false)`

Pauses the download denoted by the *gid*. The status of paused
download becomes `DOWNLOAD_PAUSED`. If the download is
active, the download is placed on the first position of waiting
queue. As long as the status is `DOWNLOAD_PAUSED`, the
download will not start. To change status to
`DOWNLOAD_WAITING`, use `unpauseDownload()`
function.  If the *force* is true, pause will take place without
any action which takes time such as contacting BitTorrent
tracker. This function returns 0 if it succeeds, or negative error
code.

Please note that, to make pause work, the application must set
`SessionConfig::keepRunning` to true. Otherwise, the
behavior is undefined.

<a id="api-int-unpausedownload-session-session-a2gid-gid"></a>
#### `int unpauseDownload(Session* session, A2Gid gid)`

Changes the status of the download denoted by the *gid* from
`DOWNLOAD_PAUSED` to `DOWNLOAD_WAITING`. This
makes the download eligible to restart. This function returns 0 if
it succeeds, or negative error code.

<a id="api-int-changeoption-session-session-a2gid-gid-const-keyvals-options"></a>
#### `int changeOption(Session* session, A2Gid gid, const KeyVals& options)`

Apply options in the *options* to the download denoted by the *gid*
dynamically. The following options can be changed for downloads in
`DOWNLOAD_ACTIVE` status:

* `bt-max-peers`
* `bt-request-peer-speed-limit`
* `bt-remove-unselected-file`
* `force-save`
* `max-download-limit`
* `max-upload-limit`

For downloads in `DOWNLOAD_WAITING` or
`DOWNLOAD_PAUSED` status, in addition to the above
options, options listed in [input-file](https://aria2.github.io/manual/en/html/aria2c.html#input-file) subsection are available,
except for following options:
`dry-run`,
`metalink-base-uri`,
`parameterized-uri`,
`pause`,
`piece-length` and
`rpc-save-upload-metadata` option.

The options which are not applicable or unknown, they are just
ignored.

This function returns 0 if it succeeds, or negative error code.

<a id="api-const-std-string-getglobaloption-session-session-const-std-string-name"></a>
#### `const std::string& getGlobalOption(Session* session, const std::string& name)`

Returns global option denoted by the *name*. If such option is not
available, returns empty string.

<a id="api-keyvals-getglobaloptions-session-session"></a>
#### `KeyVals getGlobalOptions(Session* session)`

Returns global options. Note that this function does not return
options which have no default value and have not been set by
`sessionNew()`, configuration files or API functions.

<a id="api-int-changeglobaloption-session-session-const-keyvals-options"></a>
#### `int changeGlobalOption(Session* session, const KeyVals& options)`

Apply global options in the *options* dynamically.  The following
options are available:

* `download-result`
* `log`
* `log-level`
* `max-concurrent-downloads`
* `max-download-result`
* `max-overall-download-limit`
* `max-overall-upload-limit`
* `save-cookies`
* `save-session`
* `server-stat-of`

In addition to them, options listed in [input-file](https://aria2.github.io/manual/en/html/aria2c.html#input-file) subsection
are available, except for following options:
`checksum`,
`index-out`,
`out`,
`pause` and
`select-file`.

The options which are not applicable or unknown, they are just
ignored.

This function returns 0 if it succeeds, or negative error code.

<a id="api-globalstat-getglobalstat-session-session"></a>
#### `GlobalStat getGlobalStat(Session* session)`

Returns global statistics such as overall download and upload
speed.

<a id="api-int-changeposition-session-session-a2gid-gid-int-pos-offsetmode-how"></a>
#### `int changePosition(Session* session, A2Gid gid, int pos, OffsetMode how)`

Changes the position of the download denoted by the *gid*. if it is
in `DOWNLOAD_WAITING` or `DOWNLOAD_PAUSED` state.
If the *how* is `OFFSET_MODE_SET`, it moves the download
to a position *pos* relative to the beginning of the queue. If the
*how* is `OFFSET_MODE_CUR`, it moves the download to a
position *pos* relative to the current position. If the *how* is
`OFFSET_MODE_END`, it moves the download to a position
*pos* relative to the end of the queue. If the destination position
is less than 0 or beyond the end of the queue, it moves the
download to the beginning or the end of the queue respectively. The
response is the destination position on success.

For example, if the download having GID gid is placed in position
3, `changePosition(gid, -1, OFFSET_MODE_CUR)` will change its
position to 2. Additional call `changePosition(gid, 0, OFFSET_MODE_SET)` will change its position to 0 (the beginning of
the queue).

This function returns the final destination position of this
download, or negative error code.

<a id="api-int-shutdown-session-session-bool-force-false"></a>
#### `int shutdown(Session* session, bool force = false)`

Schedules shutdown. If the *force* is true, shutdown will take
place without any action which takes time such as contacting
BitTorrent tracker. After this call, the application must keep
calling `run()` function until it returns 0.  This function
returns 0 if it succeeds, or negative error code.

<a id="api-downloadhandle-getdownloadhandle-session-session-a2gid-gid"></a>
#### `DownloadHandle* getDownloadHandle(Session* session, A2Gid gid)`

Returns handle for the download denoted by the *gid*. The caller
can retrieve various information of the download via returned
handle's member functions. The lifetime of the returned handle is
before the next call of `run()` or
`sessionFinal()`. The caller must call
`deleteDownloadHandle()` before that. This function returns
`NULL` if no download denoted by the *gid* is present. It is the
responsibility of the caller to call `deleteDownloadHandle()`
to delete handle object.

<a id="api-void-deletedownloadhandle-downloadhandle-dh"></a>
#### `void deleteDownloadHandle(DownloadHandle* dh)`

Deallocates the *dh*. Calling this function with `NULL` is safe.

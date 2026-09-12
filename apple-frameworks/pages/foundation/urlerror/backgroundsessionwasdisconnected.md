> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/backgroundsessionwasdisconnected](https://developer.apple.com/documentation/foundation/urlerror/backgroundsessionwasdisconnected)

# backgroundSessionWasDisconnected

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The app is suspended or exits while a background data task is processing.

## Declaration

```swift
static var backgroundSessionWasDisconnected: URLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

If your app has created a background data task and the app is then suspended, the task will be invalidated with this error code. To prevent this, when you receive the response, convert the data task to a download task.

## See Also

### Error codes

- [appTransportSecurityRequiresSecureConnection](apptransportsecurityrequiressecureconnection.md): App Transport Security disallowed a connection because there is no secure network connection.
- [backgroundSessionInUseByAnotherProcess](backgroundsessioninusebyanotherprocess.md): An app or app extension attempted to connect to a background session that is already connected to a process.
- [backgroundSessionRequiresSharedContainer](backgroundsessionrequiressharedcontainer.md): The shared container identifier of the URL session configuration is needed but hasn’t been set.
- [badServerResponse](badserverresponse.md): The URL Loading System received bad data from the server.
- [badURL](badurl.md): A malformed URL prevented a URL request from being initiated.
- [callIsActive](callisactive.md): A connection was attempted while a phone call is active on a network that doesn’t support simultaneous phone and data communication, such as EDGE or GPRS.
- [cancelled](cancelled.md): An asynchronous load has been canceled.
- [cannotCloseFile](cannotclosefile.md): A download task couldn’t close the downloaded file on disk.
- [cannotConnectToHost](cannotconnecttohost.md): An attempt to connect to a host failed.
- [cannotCreateFile](cannotcreatefile.md): A download task couldn’t create the downloaded file on disk because of an I/O failure.
- [cannotDecodeContentData](cannotdecodecontentdata.md): Content data received during a connection request had an unknown content encoding.
- [cannotDecodeRawData](cannotdecoderawdata.md): Content data received during a connection request couldn’t be decoded for a known content encoding.
- [cannotFindHost](cannotfindhost.md): The host name for a URL couldn’t be resolved.
- [cannotLoadFromNetwork](cannotloadfromnetwork.md): A request to load an item only from the cache could not be satisfied.
- [cannotMoveFile](cannotmovefile.md): A download task was unable to move a downloaded file on disk.

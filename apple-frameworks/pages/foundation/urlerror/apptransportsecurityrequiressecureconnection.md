> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/apptransportsecurityrequiressecureconnection](https://developer.apple.com/documentation/foundation/urlerror/apptransportsecurityrequiressecureconnection)

# appTransportSecurityRequiresSecureConnection

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

App Transport Security disallowed a connection because there is no secure network connection.

## Declaration

```swift
static var appTransportSecurityRequiresSecureConnection: URLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

Starting in iOS 9.0 and macOS v10.11, App Transport Security (ATS) is enabled by default for connections created by [URLSession](../urlsession.md). ATS requires the use of best practice secure protocols in HTTPS. For more information on ATS, see [NSAppTransportSecurity](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/plist/info/NSAppTransportSecurity) in  [Information Property List Key Reference](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009247).

## See Also

### Error codes

- [backgroundSessionInUseByAnotherProcess](backgroundsessioninusebyanotherprocess.md): An app or app extension attempted to connect to a background session that is already connected to a process.
- [backgroundSessionRequiresSharedContainer](backgroundsessionrequiressharedcontainer.md): The shared container identifier of the URL session configuration is needed but hasn’t been set.
- [backgroundSessionWasDisconnected](backgroundsessionwasdisconnected.md): The app is suspended or exits while a background data task is processing.
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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlerror/code/cannotloadfromnetwork](https://developer.apple.com/documentation/foundation/urlerror/code/cannotloadfromnetwork)

# cannotLoadFromNetwork

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A request to load an item only from the cache could not be satisfied.

## Declaration

```swift
static var cannotLoadFromNetwork: URLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error is sent when the task needs to load from the network, but is blocked from doing so by the “load only from cache” directive.

## See Also

### Error codes

- [appTransportSecurityRequiresSecureConnection](apptransportsecurityrequiressecureconnection.md): App Transport Security disallowed a connection because there is no secure network connection.
- [backgroundSessionInUseByAnotherProcess](backgroundsessioninusebyanotherprocess.md): An app or app extension attempted to connect to a background session that is already connected to a process.
- [backgroundSessionRequiresSharedContainer](backgroundsessionrequiressharedcontainer.md): The shared container identifier of the URL session configuration is needed but has not been set.
- [backgroundSessionWasDisconnected](backgroundsessionwasdisconnected.md): The app is suspended or exits while a background data task is processing.
- [badServerResponse](badserverresponse.md): The URL Loading system received bad data from the server.
- [badURL](badurl.md): A malformed URL prevented a URL request from being initiated.
- [callIsActive](callisactive.md): A connection was attempted while a phone call is active on a network that does not support simultaneous phone and data communication (EDGE or GPRS).
- [cancelled](cancelled.md): An asynchronous load has been canceled.
- [cannotCloseFile](cannotclosefile.md): A download task couldn’t close the downloaded file on disk.
- [cannotConnectToHost](cannotconnecttohost.md): An attempt to connect to a host failed.
- [cannotCreateFile](cannotcreatefile.md): A download task couldn’t create the downloaded file on disk because of an I/O failure.
- [cannotDecodeContentData](cannotdecodecontentdata.md): Content data received during a connection request had an unknown content encoding.
- [cannotDecodeRawData](cannotdecoderawdata.md): Content data received during a connection request could not be decoded for a known content encoding.
- [cannotFindHost](cannotfindhost.md): The host name for a URL could not be resolved.
- [cannotMoveFile](cannotmovefile.md): A download task was unable to move a downloaded file on disk.

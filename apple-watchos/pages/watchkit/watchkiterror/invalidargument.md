> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/watchkiterror/invalidargument](https://developer.apple.com/documentation/watchkit/watchkiterror/invalidargument)

# invalidArgument

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS

An invalid argument error.

## Declaration

```swift
static var invalidArgument: WatchKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

WatchKit reports this error when you specify invalid settings for one of the system supplied interfaces.

## See Also

### Accessing Error Codes

- [downloadFailed](downloadfailed.md): A download error.
- [mediaPlayerFailed](mediaplayerfailed.md): A media player error.
- [recordingFailed](recordingfailed.md): An audio recording error.
- [unknown](unknown.md): An unknown error.
- [applicationDelegateWatchKitRequestReplyNotCalled](applicationdelegatewatchkitrequestreplynotcalled.md): An unresponsive delegate error.

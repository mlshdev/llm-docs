> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/watchkiterror/unknown](https://developer.apple.com/documentation/watchkit/watchkiterror/unknown)

# unknown

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS

An unknown error.

## Declaration

```swift
static var unknown: WatchKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

WatchKit reports this error when it can’t determine the precise reason for the failure.

## See Also

### Accessing Error Codes

- [downloadFailed](downloadfailed.md): A download error.
- [invalidArgument](invalidargument.md): An invalid argument error.
- [mediaPlayerFailed](mediaplayerfailed.md): A media player error.
- [recordingFailed](recordingfailed.md): An audio recording error.
- [applicationDelegateWatchKitRequestReplyNotCalled](applicationdelegatewatchkitrequestreplynotcalled.md): An unresponsive delegate error.

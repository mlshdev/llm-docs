> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/watchkiterror/recordingfailed](https://developer.apple.com/documentation/watchkit/watchkiterror/recordingfailed)

# recordingFailed

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS

An audio recording error.

## Declaration

```swift
static var recordingFailed: WatchKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

WatchKit reports this error when it’s unable to record audio using the audio recording interface.

## See Also

### Accessing Error Codes

- [downloadFailed](downloadfailed.md): A download error.
- [invalidArgument](invalidargument.md): An invalid argument error.
- [mediaPlayerFailed](mediaplayerfailed.md): A media player error.
- [unknown](unknown.md): An unknown error.
- [applicationDelegateWatchKitRequestReplyNotCalled](applicationdelegatewatchkitrequestreplynotcalled.md): An unresponsive delegate error.

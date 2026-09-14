> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/watchkiterror/unknown

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

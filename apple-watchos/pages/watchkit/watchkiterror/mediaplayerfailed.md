> Snapshot-pinned source payload for Apple watchOS snapshot-4bff84466040; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/watchkiterror/mediaplayerfailed

# mediaPlayerFailed

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS

A media player error.

## Declaration

```swift
static var mediaPlayerFailed: WatchKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

WatchKit reports this error when it’s unable to play a media file.

## See Also

### Accessing Error Codes

- [downloadFailed](downloadfailed.md): A download error.
- [invalidArgument](invalidargument.md): An invalid argument error.
- [recordingFailed](recordingfailed.md): An audio recording error.
- [unknown](unknown.md): An unknown error.
- [applicationDelegateWatchKitRequestReplyNotCalled](applicationdelegatewatchkitrequestreplynotcalled.md): An unresponsive delegate error.

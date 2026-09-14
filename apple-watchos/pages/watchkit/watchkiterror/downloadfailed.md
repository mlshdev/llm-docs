> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/watchkiterror/downloadfailed

# downloadFailed

**Framework:** WatchKit  
**Kind:** Type Property  
**Availability:** watchOS

A download error.

## Declaration

```swift
static var downloadFailed: WatchKitError.Code { get }
```

<a id="Discussion"></a>

## Discussion

WatchKit reports this error when it can’t download a media file.

## See Also

### Accessing Error Codes

- [invalidArgument](invalidargument.md): An invalid argument error.
- [mediaPlayerFailed](mediaplayerfailed.md): A media player error.
- [recordingFailed](recordingfailed.md): An audio recording error.
- [unknown](unknown.md): An unknown error.
- [applicationDelegateWatchKitRequestReplyNotCalled](applicationdelegatewatchkitrequestreplynotcalled.md): An unresponsive delegate error.

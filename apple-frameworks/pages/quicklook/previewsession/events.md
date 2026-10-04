> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quicklook/previewsession/events

# events

**Framework:** Quick Look  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An async sequence of preview session events.

## Declaration

```swift
var events: some AsyncSequence<PreviewSession.Event, Never> { get }
```

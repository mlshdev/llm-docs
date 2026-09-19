> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcaptureeventinteraction/init(primaryeventhandler:secondaryeventhandler:)

# init(primaryEventHandler:secondaryEventHandler:)

**Framework:** AVKit  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+

## Declaration

```swift
init(primaryEventHandler primaryHandler: @escaping (AVCaptureEvent) -> Void, secondaryEventHandler secondaryHandler: @escaping (AVCaptureEvent) -> Void)
```

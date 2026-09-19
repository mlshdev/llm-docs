> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/init(_:)

# init(\_:)

**Framework:** VisionKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates an overlay view with the specified delegate object.

## Declaration

```swift
@MainActor convenience init(_ delegate: any ImageAnalysisOverlayViewDelegate)
```

## Parameters

- `delegate`: The object that provides details about the interface.

## See Also

### Creating overlay views

- [init(frame:)](init%28frame_%29.md): Creates an overlay view with the specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Creates an overlay view from data in a coder object.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avvideocompositioncoreanimationtool/configuration/layers

# layers

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Layer(s) to contain the composited video frames. Frames are duplicated if there is more than one layer.

## Declaration

```swift
var layers: [CALayer]
```

## See Also

### Inspecting the configuration

- [containingLayer](containinglayer.md): Containing layer to be rendered into, producing the final frame.

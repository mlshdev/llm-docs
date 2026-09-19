> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avciimagefilteringparameters/compositiontime

# compositionTime

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The time in the video composition corresponding to the frame being processed.

## Declaration

```swift
let compositionTime: CMTime
```

## See Also

### Inspecting the parameters

- [renderSize](rendersize.md): The width and height, in pixels, of the frame being processed.
- [sourceImage](sourceimage.md): The current video frame image.

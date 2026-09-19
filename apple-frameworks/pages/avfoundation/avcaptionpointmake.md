> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptionpointmake

# AVCaptionPointMake

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

Creates a caption point with the specified x and y positions.

## Declaration

```objectivec
extern AVCaptionPoint AVCaptionPointMake(AVCaptionDimension x, AVCaptionDimension y);
```

## See Also

### Accessing the location

- [origin](avcaptionregion/origin.md): The region’s top-left position.
- [AVCaptionPoint](avcaptionpoint.md): A structure that defines the origin point for a caption.

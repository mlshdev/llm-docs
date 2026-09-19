> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters/sourceframe

# sourceFrame (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Current source frame, which must be non `nil`.

## Declaration

```swift
var sourceFrame: VTFrameProcessorFrame { get }
```

# sourceFrame (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Current source frame, which must be non `nil`.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * sourceFrame;
```

## See Also

### Inspecting the parameters

- [destinationFrame](destinationframe.md): Destination frame that contains user-allocated pixel buffer that receives the scaled processor output.

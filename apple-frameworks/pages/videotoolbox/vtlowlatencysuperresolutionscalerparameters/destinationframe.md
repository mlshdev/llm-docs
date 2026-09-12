> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters/destinationframe](https://developer.apple.com/documentation/videotoolbox/vtlowlatencysuperresolutionscalerparameters/destinationframe)

# destinationFrame

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Destination frame that contains user-allocated pixel buffer that receives the scaled processor output.

## Declaration

```objectivec
@property (nonatomic, readonly) VTFrameProcessorFrame * destinationFrame;
```

## See Also

### Inspecting the parameters

- [sourceFrame](sourceframe.md): Current source frame, which must be non `nil`.

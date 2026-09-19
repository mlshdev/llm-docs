> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtframeprocessoropticalflow/backwardflow

# backwardFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The backward optical flow pixel buffer that was provided when the object was created.

## Declaration

```swift
var backwardFlow: CVPixelBuffer { get }
```

## See Also

### Inspecting the configuration

- [forwardFlow](forwardflow.md): The forward optical flow pixel that was provided when the object was created.

# backwardFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The backward optical flow pixel buffer that was provided when the object was created.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef backwardFlow;
```

## See Also

### Inspecting the configuration

- [forwardFlow](forwardflow.md): The forward optical flow pixel that was provided when the object was created.

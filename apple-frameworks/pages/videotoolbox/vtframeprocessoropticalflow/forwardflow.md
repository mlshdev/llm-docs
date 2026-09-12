> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframeprocessoropticalflow/forwardflow](https://developer.apple.com/documentation/videotoolbox/vtframeprocessoropticalflow/forwardflow)

# forwardFlow (Swift)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The forward optical flow pixel that was provided when the object was created.

## Declaration

```swift
var forwardFlow: CVPixelBuffer { get }
```

## See Also

### Inspecting the configuration

- [backwardFlow](backwardflow.md): The backward optical flow pixel buffer that was provided when the object was created.

# forwardFlow (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+ · tvOS 26.0+ · visionOS 26.0+

The forward optical flow pixel that was provided when the object was created.

## Declaration

```objectivec
@property (nonatomic, readonly) CVPixelBufferRef forwardFlow;
```

## See Also

### Inspecting the configuration

- [backwardFlow](backwardflow.md): The backward optical flow pixel buffer that was provided when the object was created.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/videocompositioninstruction](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/videocompositioninstruction)

# videoCompositionInstruction (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A video composition instruction that indicates how to compose the frame.

## Declaration

```swift
var videoCompositionInstruction: any AVVideoCompositionInstructionProtocol { get }
```

## See Also

### Inspecting the request

- [compositionTime](compositiontime.md): A time for which to compose the frame.
- [renderContext](rendercontext.md): The rendering context of the video composition.

# videoCompositionInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A video composition instruction that indicates how to compose the frame.

## Declaration

```objectivec
@property (nonatomic, readonly) id<AVVideoCompositionInstruction> videoCompositionInstruction;
```

## See Also

### Inspecting the request

- [compositionTime](compositiontime.md): A time for which to compose the frame.
- [renderContext](rendercontext.md): The rendering context of the video composition.

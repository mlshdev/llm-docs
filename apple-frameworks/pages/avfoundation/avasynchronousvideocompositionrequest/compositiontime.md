> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/compositiontime

# compositionTime (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A time for which to compose the frame.

## Declaration

```swift
var compositionTime: CMTime { get }
```

## See Also

### Inspecting the request

- [renderContext](rendercontext.md): The rendering context of the video composition.
- [videoCompositionInstruction](videocompositioninstruction.md): A video composition instruction that indicates how to compose the frame.

# compositionTime (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A time for which to compose the frame.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTime compositionTime;
```

## See Also

### Inspecting the request

- [renderContext](rendercontext.md): The rendering context of the video composition.
- [videoCompositionInstruction](videocompositioninstruction.md): A video composition instruction that indicates how to compose the frame.

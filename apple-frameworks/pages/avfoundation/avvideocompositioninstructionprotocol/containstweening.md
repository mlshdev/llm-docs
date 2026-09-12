> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstructionprotocol/containstweening](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol/containstweening)

# containsTweening (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the composition contains tweening.

## Declaration

```swift
var containsTweening: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that rendering a frame from the same source buffers and the same composition instruction at two different [compositionTime](../avasynchronousvideocompositionrequest/compositiontime.md) values may yield different output frames. A value of [false](https://developer.apple.com/documentation/swift/false) indicates that two compositions yield the same frame.

# containsTweening (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the composition contains tweening.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL containsTweening;
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) indicates that rendering a frame from the same source buffers and the same composition instruction at two different [compositionTime](../avasynchronousvideocompositionrequest/compositiontime.md) values may yield different output frames. A value of [false](https://developer.apple.com/documentation/swift/false) indicates that two compositions yield the same frame.

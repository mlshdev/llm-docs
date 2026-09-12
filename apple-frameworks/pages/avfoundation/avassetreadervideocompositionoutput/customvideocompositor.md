> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput/customvideocompositor](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/customvideocompositor)

# customVideoCompositor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom video compositor for the output.

## Declaration

```swift
var customVideoCompositor: (any AVVideoCompositing)? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if there isn’t a custom video compositor, or if the internal video compositor is in use.

## See Also

### Configuring video settings

- [videoComposition](videocomposition.md): The video composition to use for the output.

# customVideoCompositor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom video compositor for the output.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVVideoCompositing> customVideoCompositor;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` if there isn’t a custom video compositor, or if the internal video compositor is in use.

## See Also

### Configuring video settings

- [videoComposition](videocomposition.md): The video composition to use for the output.

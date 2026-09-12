> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avframeraterange/minframeduration](https://developer.apple.com/documentation/avfoundation/avframeraterange/minframeduration)

# minFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The minimum frame duration supported by the range.

## Declaration

```swift
var minFrameDuration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This value is the reciprocal of [maxFrameRate](maxframerate.md), and expresses the maximum frame rate as a duration.

## See Also

### Accessing properties

- [maxFrameDuration](maxframeduration.md): The maximum frame duration supported by the range.
- [maxFrameRate](maxframerate.md): The maximum frame rate supported by the range.
- [minFrameRate](minframerate.md): The minimum frame rate supported by the range.

# minFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The minimum frame duration supported by the range.

## Declaration

```objectivec
@property (readonly) CMTime minFrameDuration;
```

<a id="Discussion"></a>

## Discussion

This value is the reciprocal of [maxFrameRate](maxframerate.md), and expresses the maximum frame rate as a duration.

## See Also

### Accessing properties

- [maxFrameDuration](maxframeduration.md): The maximum frame duration supported by the range.
- [maxFrameRate](maxframerate.md): The maximum frame rate supported by the range.
- [minFrameRate](minframerate.md): The minimum frame rate supported by the range.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avframeraterange/maxframeduration](https://developer.apple.com/documentation/avfoundation/avframeraterange/maxframeduration)

# maxFrameDuration (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The maximum frame duration supported by the range.

## Declaration

```swift
var maxFrameDuration: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

This value is the reciprocal of [minFrameRate](minframerate.md), and expresses the minimum frame rate as a duration.

## See Also

### Accessing properties

- [maxFrameRate](maxframerate.md): The maximum frame rate supported by the range.
- [minFrameDuration](minframeduration.md): The minimum frame duration supported by the range.
- [minFrameRate](minframerate.md): The minimum frame rate supported by the range.

# maxFrameDuration (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The maximum frame duration supported by the range.

## Declaration

```objectivec
@property (readonly) CMTime maxFrameDuration;
```

<a id="Discussion"></a>

## Discussion

This value is the reciprocal of [minFrameRate](minframerate.md), and expresses the minimum frame rate as a duration.

## See Also

### Accessing properties

- [maxFrameRate](maxframerate.md): The maximum frame rate supported by the range.
- [minFrameDuration](minframeduration.md): The minimum frame duration supported by the range.
- [minFrameRate](minframerate.md): The minimum frame rate supported by the range.

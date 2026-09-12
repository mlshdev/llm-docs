> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetvisiblestringrange(_:)](https://developer.apple.com/documentation/coretext/ctframegetvisiblestringrange(_:))

# CTFrameGetVisibleStringRange(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters that actually fit in the frame.

## Declaration

```swift
func CTFrameGetVisibleStringRange(_ frame: CTFrame) -> CFRange
```

## Parameters

- `frame`: The frame whose visible character range is returned.

<a id="return-value"></a>

## Return Value

A `CFRange` structure containing the backing store range of characters that fit into the frame, or if the function call is not successful or no characters fit in the frame, an empty range.

<a id="Discussion"></a>

## Discussion

This function can be used to cascade frames, because it returns the range of characters that can be seen in the frame. The next frame would start where this frame ends.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange(\_:)](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetPath(\_:)](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes(\_:)](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

# CTFrameGetVisibleStringRange (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters that actually fit in the frame.

## Declaration

```objectivec
extern CFRange CTFrameGetVisibleStringRange(CTFrameRef frame);
```

## Parameters

- `frame`: The frame whose visible character range is returned.

<a id="return-value"></a>

## Return Value

A `CFRange` structure containing the backing store range of characters that fit into the frame, or if the function call is not successful or no characters fit in the frame, an empty range.

<a id="Discussion"></a>

## Discussion

This function can be used to cascade frames, because it returns the range of characters that can be seen in the frame. The next frame would start where this frame ends.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetPath](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

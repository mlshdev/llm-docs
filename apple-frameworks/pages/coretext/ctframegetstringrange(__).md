> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetstringrange(_:)](https://developer.apple.com/documentation/coretext/ctframegetstringrange(_:))

# CTFrameGetStringRange(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters originally requested to fill the frame.

## Declaration

```swift
func CTFrameGetStringRange(_ frame: CTFrame) -> CFRange
```

## Parameters

- `frame`: The frame whose character range is returned.

<a id="return-value"></a>

## Return Value

A `CFRange` structure containing the backing store range of characters that were originally requested to fill the frame, or, if the function call is not successful, an empty range.

## See Also

### Getting Frame Data

- [CTFrameGetVisibleStringRange(\_:)](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath(\_:)](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes(\_:)](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

# CTFrameGetStringRange (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters originally requested to fill the frame.

## Declaration

```objectivec
extern CFRange CTFrameGetStringRange(CTFrameRef frame);
```

## Parameters

- `frame`: The frame whose character range is returned.

<a id="return-value"></a>

## Return Value

A `CFRange` structure containing the backing store range of characters that were originally requested to fill the frame, or, if the function call is not successful, an empty range.

## See Also

### Getting Frame Data

- [CTFrameGetVisibleStringRange](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath](ctframegetpath%28__%29.md): Returns the path used to create the frame.
- [CTFrameGetFrameAttributes](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

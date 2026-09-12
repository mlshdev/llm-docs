> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetpath(_:)](https://developer.apple.com/documentation/coretext/ctframegetpath(_:))

# CTFrameGetPath(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path used to create the frame.

## Declaration

```swift
func CTFrameGetPath(_ frame: CTFrame) -> CGPath
```

## Parameters

- `frame`: The frame whose path is returned.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange(\_:)](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange(\_:)](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetFrameAttributes(\_:)](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

# CTFrameGetPath (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the path used to create the frame.

## Declaration

```objectivec
extern CGPathRefCTFrameGetPath(CTFrameRef frame);
```

## Parameters

- `frame`: The frame whose path is returned.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetFrameAttributes](ctframegetframeattributes%28__%29.md): Returns the frame attributes used to create the frame.

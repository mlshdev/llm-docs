> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetframeattributes(_:)](https://developer.apple.com/documentation/coretext/ctframegetframeattributes(_:))

# CTFrameGetFrameAttributes(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the frame attributes used to create the frame.

## Declaration

```swift
func CTFrameGetFrameAttributes(_ frame: CTFrame) -> CFDictionary?
```

## Parameters

- `frame`: The frame whose attributes are returned.

<a id="return-value"></a>

## Return Value

A reference to a CFDictionary object containing the frame attributes that were used to create the frame, or, if the frame was created without any frame attributes, `NULL`.

<a id="Discussion"></a>

## Discussion

You can create a frame with an attributes dictionary to control various aspects of the framing process. These attributes are different from the ones used to create an attributed string.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange(\_:)](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange(\_:)](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath(\_:)](ctframegetpath%28__%29.md): Returns the path used to create the frame.

# CTFrameGetFrameAttributes (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the frame attributes used to create the frame.

## Declaration

```objectivec
extern CFDictionaryRefCTFrameGetFrameAttributes(CTFrameRef frame);
```

## Parameters

- `frame`: The frame whose attributes are returned.

<a id="return-value"></a>

## Return Value

A reference to a CFDictionary object containing the frame attributes that were used to create the frame, or, if the frame was created without any frame attributes, `NULL`.

<a id="Discussion"></a>

## Discussion

You can create a frame with an attributes dictionary to control various aspects of the framing process. These attributes are different from the ones used to create an attributed string.

## See Also

### Getting Frame Data

- [CTFrameGetStringRange](ctframegetstringrange%28__%29.md): Returns the range of characters originally requested to fill the frame.
- [CTFrameGetVisibleStringRange](ctframegetvisiblestringrange%28__%29.md): Returns the range of characters that actually fit in the frame.
- [CTFrameGetPath](ctframegetpath%28__%29.md): Returns the path used to create the frame.

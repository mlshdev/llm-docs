> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetlineorigins(_:_:_:)](https://developer.apple.com/documentation/coretext/ctframegetlineorigins(_:_:_:))

# CTFrameGetLineOrigins(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of line origins for a frame.

## Declaration

```swift
func CTFrameGetLineOrigins(_ frame: CTFrame, _ range: CFRange, _ origins: UnsafeMutablePointer<CGPoint>)
```

## Parameters

- `frame`: The frame whose line origin array is copied.
- `range`: The range of line origins you wish to copy. If the length of the range is 0, then the copy operation continues from the start index of the range to the last line origin.
- `origins`: The buffer to which the origins are copied. The buffer must have at least as many elements as specified by range’s length. Each [CGPoint](../corefoundation/cgpoint.md) in this array is the origin of the corresponding line in the array of lines returned by [CTFrameGetLines(\_:)](ctframegetlines%28__%29.md) relative to the origin of the path’s bounding box, which can be obtained from `CGPathGetPathBoundingBox`.

<a id="Discussion"></a>

## Discussion

This function copies a range of [CGPoint](../corefoundation/cgpoint.md) structures into the `origins` buffer. The maximum number of line origins this function will copy into the `origins` buffer is the count of the array of lines (the length of the `range` parameter).

<a id="Special-Considerations"></a>

### Special Considerations

In versions of macOS prior to 10.7 and versions of iOS prior to 4.2, this function may function unpredictably if the frame is not rectangular.

## See Also

### Getting Lines

- [CTFrameGetLines(\_:)](ctframegetlines%28__%29.md): Returns an array of lines stored in the frame.

# CTFrameGetLineOrigins (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of line origins for a frame.

## Declaration

```objectivec
extern void CTFrameGetLineOrigins(CTFrameRef frame, CFRange range, CGPoint origins[]);
```

## Parameters

- `frame`: The frame whose line origin array is copied.
- `range`: The range of line origins you wish to copy. If the length of the range is 0, then the copy operation continues from the start index of the range to the last line origin.
- `origins`: The buffer to which the origins are copied. The buffer must have at least as many elements as specified by range’s length. Each [CGPoint](../corefoundation/cgpoint.md) in this array is the origin of the corresponding line in the array of lines returned by [CTFrameGetLines](ctframegetlines%28__%29.md) relative to the origin of the path’s bounding box, which can be obtained from `CGPathGetPathBoundingBox`.

<a id="Discussion"></a>

## Discussion

This function copies a range of [CGPoint](../corefoundation/cgpoint.md) structures into the `origins` buffer. The maximum number of line origins this function will copy into the `origins` buffer is the count of the array of lines (the length of the `range` parameter).

<a id="Special-Considerations"></a>

### Special Considerations

In versions of macOS prior to 10.7 and versions of iOS prior to 4.2, this function may function unpredictably if the frame is not rectangular.

## See Also

### Getting Lines

- [CTFrameGetLines](ctframegetlines%28__%29.md): Returns an array of lines stored in the frame.

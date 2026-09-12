> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctframegetlines(_:)](https://developer.apple.com/documentation/coretext/ctframegetlines(_:))

# CTFrameGetLines(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of lines stored in the frame.

## Declaration

```swift
func CTFrameGetLines(_ frame: CTFrame) -> CFArray
```

## Parameters

- `frame`: The frame whose line array is returned.

<a id="return-value"></a>

## Return Value

A CFArray object containing the CTLine objects that make up the frame, or, if there are no lines in the frame, an array with no elements.

## See Also

### Getting Lines

- [CTFrameGetLineOrigins(\_:\_:\_:)](ctframegetlineorigins%28______%29.md): Copies a range of line origins for a frame.

# CTFrameGetLines (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array of lines stored in the frame.

## Declaration

```objectivec
extern CFArrayRefCTFrameGetLines(CTFrameRef frame);
```

## Parameters

- `frame`: The frame whose line array is returned.

<a id="return-value"></a>

## Return Value

A CFArray object containing the CTLine objects that make up the frame, or, if there are no lines in the frame, an array with no elements.

## See Also

### Getting Lines

- [CTFrameGetLineOrigins](ctframegetlineorigins%28______%29.md): Copies a range of line origins for a frame.

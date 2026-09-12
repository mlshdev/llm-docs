> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uioffsetequaltooffset](https://developer.apple.com/documentation/uikit/uioffsetequaltooffset)

# UIOffsetEqualToOffset

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Returns a Boolean value that indicates whether two offsets are equal.

## Declaration

```objectivec
static BOOL UIOffsetEqualToOffset(UIOffset offset1, UIOffset offset2);
```

## Parameters

- `offset1`: The offset to compare with `offset2`.
- `offset2`: The offset to compare with `offset1`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `offset1` and `offset2` are equal, otherwise [false](https://developer.apple.com/documentation/swift/false).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/intersection(_:)](https://developer.apple.com/documentation/uikit/nstextrange/intersection(_:))

# intersection(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the range, if any, where two text ranges intersect.

## Declaration

```swift
func intersection(_ textRange: NSTextRange) -> Self?
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

An [NSRange](../../foundation/nsrange-c.struct.md) that represents the intersection of the ranges, or `nil` if they don’t intersect.

## See Also

### Comparing text ranges

- [intersects(\_:)](intersects%28__%29.md): Determines if two ranges intersect.
- [isEqual(to:)](isequal%28to_%29.md): Compares two text ranges.
- [union(\_:)](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

# textRangeByIntersectingWithTextRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the range, if any, where two text ranges intersect.

## Declaration

```objectivec
- (instancetype) textRangeByIntersectingWithTextRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

An [NSRange](../../foundation/nsrange-c.struct.md) that represents the intersection of the ranges, or `nil` if they don’t intersect.

## See Also

### Comparing text ranges

- [intersectsWithTextRange:](intersects%28__%29.md): Determines if two ranges intersect.
- [isEqualToTextRange:](isequal%28to_%29.md): Compares two text ranges.
- [textRangeByFormingUnionWithTextRange:](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/isequal(to:)](https://developer.apple.com/documentation/uikit/nstextrange/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares two text ranges.

## Declaration

```swift
func isEqual(to textRange: NSTextRange) -> Bool
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

Returns `true` if the ranges are equal.

## See Also

### Comparing text ranges

- [intersection(\_:)](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersects(\_:)](intersects%28__%29.md): Determines if two ranges intersect.
- [union(\_:)](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

# isEqualToTextRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares two text ranges.

## Declaration

```objectivec
- (BOOL) isEqualToTextRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

Returns `true` if the ranges are equal.

## See Also

### Comparing text ranges

- [textRangeByIntersectingWithTextRange:](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersectsWithTextRange:](intersects%28__%29.md): Determines if two ranges intersect.
- [textRangeByFormingUnionWithTextRange:](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

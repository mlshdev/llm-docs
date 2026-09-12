> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextrange/intersects(_:)](https://developer.apple.com/documentation/uikit/nstextrange/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Determines if two ranges intersect.

## Declaration

```swift
func intersects(_ textRange: NSTextRange) -> Bool
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

Returns `true` if the ranges intersect.

## See Also

### Comparing text ranges

- [intersection(\_:)](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [isEqual(to:)](isequal%28to_%29.md): Compares two text ranges.
- [union(\_:)](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

# intersectsWithTextRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Determines if two ranges intersect.

## Declaration

```objectivec
- (BOOL) intersectsWithTextRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: The range used to compare against the current range to evaluate for differences.

<a id="return-value"></a>

## Return Value

Returns `true` if the ranges intersect.

## See Also

### Comparing text ranges

- [textRangeByIntersectingWithTextRange:](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [isEqualToTextRange:](isequal%28to_%29.md): Compares two text ranges.
- [textRangeByFormingUnionWithTextRange:](union%28__%29.md): Returns a new text range by forming the union with the text range you provide.

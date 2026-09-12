> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextrange/union(_:)](https://developer.apple.com/documentation/appkit/nstextrange/union(_:))

# union(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new text range by forming the union with the text range you provide.

## Declaration

```swift
func union(_ textRange: NSTextRange) -> Self
```

## Parameters

- `textRange`: The range to use to create the union.

<a id="return-value"></a>

## Return Value

An [NSTextRange](../nstextrange.md) that represent the union of the two ranges.

## See Also

### Comparing text ranges

- [intersection(\_:)](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersects(\_:)](intersects%28__%29.md): Determines if two ranges intersect.
- [isEqual(to:)](isequal%28to_%29.md): Compares two text ranges.

# textRangeByFormingUnionWithTextRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a new text range by forming the union with the text range you provide.

## Declaration

```objectivec
- (instancetype) textRangeByFormingUnionWithTextRange:(NSTextRange *) textRange;
```

## Parameters

- `textRange`: The range to use to create the union.

<a id="return-value"></a>

## Return Value

An [NSTextRange](../nstextrange.md) that represent the union of the two ranges.

## See Also

### Comparing text ranges

- [textRangeByIntersectingWithTextRange:](intersection%28__%29.md): Returns the range, if any, where two text ranges intersect.
- [intersectsWithTextRange:](intersects%28__%29.md): Determines if two ranges intersect.
- [isEqualToTextRange:](isequal%28to_%29.md): Compares two text ranges.

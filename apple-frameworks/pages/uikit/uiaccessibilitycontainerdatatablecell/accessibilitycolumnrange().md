> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontainerdatatablecell/accessibilitycolumnrange()](https://developer.apple.com/documentation/uikit/uiaccessibilitycontainerdatatablecell/accessibilitycolumnrange())

# accessibilityColumnRange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the columns spanned by the cell.

## Declaration

```swift
func accessibilityColumnRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The column or columns that the cell spans.

<a id="Discussion"></a>

## Discussion

Set the location of the range to the first column containing the cell. Use the length of the range to specify the number of columns that the cell spans. If you do not implement this method, the system assumes an initial index of [NSNotFound](../../foundation/nsnotfound-9t5v2.md) and a length of `0`.

## See Also

### Getting the rows and columns

- [accessibilityRowRange()](accessibilityrowrange%28%29.md): Returns the visible range of rows.

# accessibilityColumnRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the columns spanned by the cell.

## Declaration

```objectivec
- (NSRange) accessibilityColumnRange;
```

<a id="return-value"></a>

## Return Value

The column or columns that the cell spans.

<a id="Discussion"></a>

## Discussion

Set the location of the range to the first column containing the cell. Use the length of the range to specify the number of columns that the cell spans. If you do not implement this method, the system assumes an initial index of [NSNotFound](../../foundation/nsnotfound-9t5v2.md) and a length of `0`.

## See Also

### Getting the rows and columns

- [accessibilityRowRange](accessibilityrowrange%28%29.md): Returns the visible range of rows.

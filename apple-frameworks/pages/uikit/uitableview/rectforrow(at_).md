> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/rectforrow(at:)](https://developer.apple.com/documentation/uikit/uitableview/rectforrow(at:))

# rectForRow(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for a row that an index path identifies.

## Declaration

```swift
func rectForRow(at indexPath: IndexPath) -> CGRect
```

## Parameters

- `indexPath`: An index path object that identifies a row by its index and its section index.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the row or [CGRectZero](../../coregraphics/cgrectzero.md) if `indexPath` is invalid.

## See Also

### Getting the drawing areas for the table

- [rect(forSection:)](rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForFooter(inSection:)](rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeader(inSection:)](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

# rectForRowAtIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for a row that an index path identifies.

## Declaration

```objectivec
- (CGRect) rectForRowAtIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `indexPath`: An index path object that identifies a row by its index and its section index.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the row or [CGRectZero](../../coregraphics/cgrectzero.md) if `indexPath` is invalid.

## See Also

### Getting the drawing areas for the table

- [rectForSection:](rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForFooterInSection:](rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeaderInSection:](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

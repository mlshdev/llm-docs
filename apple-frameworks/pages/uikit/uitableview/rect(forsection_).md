> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/rect(forsection:)](https://developer.apple.com/documentation/uikit/uitableview/rect(forsection:))

# rect(forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for a specified section of the table view.

## Declaration

```swift
func rect(forSection section: Int) -> CGRect
```

## Parameters

- `section`: An index number identifying a section of the table view. Plain-style table views always have a section index of zero.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the section.

## See Also

### Getting the drawing areas for the table

- [rectForRow(at:)](rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForFooter(inSection:)](rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeader(inSection:)](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

# rectForSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for a specified section of the table view.

## Declaration

```objectivec
- (CGRect) rectForSection:(NSInteger) section;
```

## Parameters

- `section`: An index number identifying a section of the table view. Plain-style table views always have a section index of zero.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the section.

## See Also

### Getting the drawing areas for the table

- [rectForRowAtIndexPath:](rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForFooterInSection:](rectforfooter%28insection_%29.md): Returns the drawing area for the footer of the specified section.
- [rectForHeaderInSection:](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

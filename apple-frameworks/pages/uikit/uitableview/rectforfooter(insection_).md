> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/rectforfooter(insection:)](https://developer.apple.com/documentation/uikit/uitableview/rectforfooter(insection:))

# rectForFooter(inSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for the footer of the specified section.

## Declaration

```swift
func rectForFooter(inSection section: Int) -> CGRect
```

## Parameters

- `section`: An index number identifying a section of the table view. Plain-style table views always have a section index of zero.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the section footer.

## See Also

### Getting the drawing areas for the table

- [rect(forSection:)](rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForRow(at:)](rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForHeader(inSection:)](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

# rectForFooterInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the drawing area for the footer of the specified section.

## Declaration

```objectivec
- (CGRect) rectForFooterInSection:(NSInteger) section;
```

## Parameters

- `section`: An index number identifying a section of the table view. Plain-style table views always have a section index of zero.

<a id="return-value"></a>

## Return Value

A rectangle defining the area in which the table view draws the section footer.

## See Also

### Getting the drawing areas for the table

- [rectForSection:](rect%28forsection_%29.md): Returns the drawing area for a specified section of the table view.
- [rectForRowAtIndexPath:](rectforrow%28at_%29.md): Returns the drawing area for a row that an index path identifies.
- [rectForHeaderInSection:](rectforheader%28insection_%29.md): Returns the drawing area for the header of the specified section.

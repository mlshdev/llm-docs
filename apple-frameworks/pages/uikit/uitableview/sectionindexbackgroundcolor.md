> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/sectionindexbackgroundcolor](https://developer.apple.com/documentation/uikit/uitableview/sectionindexbackgroundcolor)

# sectionIndexBackgroundColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color to use for the background of the table view’s section index.

## Declaration

```swift
var sectionIndexBackgroundColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

Table views can display an index along the side of the view, making it easier for users to navigate the contents of the table quickly. This property specifies the color to use for the background of the index. The table view applies this color when the user isn’t touching the index. A value of `nil` represents the default color.

## See Also

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [indexSearch](indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.

# sectionIndexBackgroundColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color to use for the background of the table view’s section index.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * sectionIndexBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

Table views can display an index along the side of the view, making it easier for users to navigate the contents of the table quickly. This property specifies the color to use for the background of the index. The table view applies this color when the user isn’t touching the index. A value of `nil` represents the default color.

## See Also

### Configuring the table index

- [sectionIndexMinimumDisplayRowCount](sectionindexminimumdisplayrowcount.md): The number of table rows at which to display the index list on the right edge of the table.
- [sectionIndexColor](sectionindexcolor.md): The color to use for the table view’s index text.
- [sectionIndexTrackingBackgroundColor](sectionindextrackingbackgroundcolor.md): The color to use for the table view’s index background area.
- [UITableViewIndexSearch](indexsearch.md): A constant for adding the magnifying glass icon to the section index of a table view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/hasuncommittedupdates](https://developer.apple.com/documentation/uikit/uitableview/hasuncommittedupdates)

# hasUncommittedUpdates (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.

## Declaration

```swift
var hasUncommittedUpdates: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the table view contains placeholder cells or is handling a drop and is in the middle of reordering its rows. When this property is [true](https://developer.apple.com/documentation/swift/true), avoid making any significant changes to the table view. Specifically, don’t call [reloadData()](reloaddata%28%29.md), which forces the table to delete any uncommitted changes before retrieving fresh data from the data source object.

## See Also

### Reloading the table view

- [reconfigureRows(at:)](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData()](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles()](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

# hasUncommittedUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasUncommittedUpdates;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the table view contains placeholder cells or is handling a drop and is in the middle of reordering its rows. When this property is [true](https://developer.apple.com/documentation/swift/true), avoid making any significant changes to the table view. Specifically, don’t call [reloadData](reloaddata%28%29.md), which forces the table to delete any uncommitted changes before retrieving fresh data from the data source object.

## See Also

### Reloading the table view

- [reconfigureRowsAtIndexPaths:](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadData](reloaddata%28%29.md): Reloads the rows and sections of the table view.
- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

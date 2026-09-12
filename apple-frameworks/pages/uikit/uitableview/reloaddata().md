> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/reloaddata()](https://developer.apple.com/documentation/uikit/uitableview/reloaddata())

# reloadData() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the rows and sections of the table view.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

Call this method to reload all the data that’s used to construct the table, including cells, section headers and footers, index arrays, and so on. For efficiency, the table view redisplays only those rows that are visible. It adjusts offsets if the table shrinks as a result of the reload. The table view’s delegate or data source calls this method when it wants the table view to completely reload its data. It shouldn’t be called in the methods that insert or delete rows, especially within an animation block implemented with calls to [beginUpdates()](beginupdates%28%29.md) and [endUpdates()](endupdates%28%29.md).

> **Important**

>  Don’t call this method when the [hasUncommittedUpdates](hasuncommittedupdates.md) property is [true](https://developer.apple.com/documentation/swift/true). Doing so forces the table view to delete any uncommitted changes before reloading the data.

## See Also

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRows(at:)](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadRows(at:with:)](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections(\_:with:)](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles()](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

# reloadData (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Reloads the rows and sections of the table view.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

Call this method to reload all the data that’s used to construct the table, including cells, section headers and footers, index arrays, and so on. For efficiency, the table view redisplays only those rows that are visible. It adjusts offsets if the table shrinks as a result of the reload. The table view’s delegate or data source calls this method when it wants the table view to completely reload its data. It shouldn’t be called in the methods that insert or delete rows, especially within an animation block implemented with calls to [beginUpdates](beginupdates%28%29.md) and [endUpdates](endupdates%28%29.md).

> **Important**

>  Don’t call this method when the [hasUncommittedUpdates](hasuncommittedupdates.md) property is [true](https://developer.apple.com/documentation/swift/true). Doing so forces the table view to delete any uncommitted changes before reloading the data.

## See Also

### Reloading the table view

- [hasUncommittedUpdates](hasuncommittedupdates.md): A Boolean value that indicates whether the table view’s appearance contains changes that aren’t present in its data source.
- [reconfigureRowsAtIndexPaths:](reconfigurerows%28at_%29.md): Updates the data for the rows at the index paths you specify, preserving the existing cells for the rows.
- [reloadRowsAtIndexPaths:withRowAnimation:](reloadrows%28at_with_%29.md): Reloads the specified rows using the provided animation effect.
- [reloadSections:withRowAnimation:](reloadsections%28__with_%29.md): Reloads the specified sections using the provided animation effect.
- [reloadSectionIndexTitles](reloadsectionindextitles%28%29.md): Reloads the items in the index bar along the right side of the table view.

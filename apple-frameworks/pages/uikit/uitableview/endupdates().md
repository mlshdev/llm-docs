> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/endupdates()](https://developer.apple.com/documentation/uikit/uitableview/endupdates())

# endUpdates() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

## Declaration

```swift
func endUpdates()
```

<a id="Discussion"></a>

## Discussion

Use the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method instead of this one whenever possible.

You call this method to bracket a series of method calls that begins with [beginUpdates()](beginupdates%28%29.md) and that consists of operations to insert, delete, select, and reload rows and sections of the table view. When you call `endUpdates`, `UITableView` animates the operations simultaneously. Invocations of [beginUpdates()](beginupdates%28%29.md) and `endUpdates` can be nested. If you don’t make the insertion, deletion, and selection calls inside this block, table attributes such as row count can become invalid.

## See Also

### Performing batch updates to rows and sections

- [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md): Animates multiple insert, delete, reload, and move operations as a group.
- [beginUpdates()](beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.

# endUpdates (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

## Declaration

```objectivec
- (void) endUpdates;
```

<a id="Discussion"></a>

## Discussion

Use the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method instead of this one whenever possible.

You call this method to bracket a series of method calls that begins with [beginUpdates](beginupdates%28%29.md) and that consists of operations to insert, delete, select, and reload rows and sections of the table view. When you call `endUpdates`, `UITableView` animates the operations simultaneously. Invocations of [beginUpdates](beginupdates%28%29.md) and `endUpdates` can be nested. If you don’t make the insertion, deletion, and selection calls inside this block, table attributes such as row count can become invalid.

## See Also

### Performing batch updates to rows and sections

- [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md): Animates multiple insert, delete, reload, and move operations as a group.
- [beginUpdates](beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.

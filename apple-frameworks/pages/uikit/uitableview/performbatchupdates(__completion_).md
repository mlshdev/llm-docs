> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableview/performbatchupdates(_:completion:)](https://developer.apple.com/documentation/uikit/uitableview/performbatchupdates(_:completion:))

# performBatchUpdates(\_:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Animates multiple insert, delete, reload, and move operations as a group.

## Declaration

```swift
func performBatchUpdates(_ updates: (() -> Void)?, completion: ((Bool) -> Void)? = nil)
```

## Parameters

- `updates`: The block that performs the relevant insert, delete, reload, or move operations. In addition to modifying the table’s rows, update your table’s data source to reflect your changes. This block has no return value and takes no parameters.
- `completion`: A completion handler block to execute when all of the operations are finished. This block has no return value and takes the following parameter:

  - **finished**: A Boolean value indicating whether the animations completed successfully. The value of this parameter is [false](https://developer.apple.com/documentation/swift/false) if the animations were interrupted for any reason.

<a id="Discussion"></a>

## Discussion

Use this method in cases where you want to make multiple changes to the table view in one single animated operation, as opposed to several separate animations. Use the block passed in the `updates` parameter to specify all of the operations you want to perform.

Deletes are processed before inserts in batch operations. This means the indexes for the deletions are processed relative to the indexes of the table view’s state before the batch operation, and the indexes for the insertions are processed relative to the indexes of the state after all the deletions in the batch operation.

## See Also

### Performing batch updates to rows and sections

- [beginUpdates()](beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.
- [endUpdates()](endupdates%28%29.md): Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

# performBatchUpdates:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Animates multiple insert, delete, reload, and move operations as a group.

## Declaration

```objectivec
- (void) performBatchUpdates:(void (^)()) updates completion:(void (^)(BOOL finished)) completion;
```

## Parameters

- `updates`: The block that performs the relevant insert, delete, reload, or move operations. In addition to modifying the table’s rows, update your table’s data source to reflect your changes. This block has no return value and takes no parameters.
- `completion`: A completion handler block to execute when all of the operations are finished. This block has no return value and takes the following parameter:

  - **finished**: A Boolean value indicating whether the animations completed successfully. The value of this parameter is [false](https://developer.apple.com/documentation/swift/false) if the animations were interrupted for any reason.

<a id="Discussion"></a>

## Discussion

Use this method in cases where you want to make multiple changes to the table view in one single animated operation, as opposed to several separate animations. Use the block passed in the `updates` parameter to specify all of the operations you want to perform.

Deletes are processed before inserts in batch operations. This means the indexes for the deletions are processed relative to the indexes of the table view’s state before the batch operation, and the indexes for the insertions are processed relative to the indexes of the state after all the deletions in the batch operation.

## See Also

### Performing batch updates to rows and sections

- [beginUpdates](beginupdates%28%29.md): Begins a series of method calls that insert, delete, or select rows and sections of the table view.
- [endUpdates](endupdates%28%29.md): Concludes a series of method calls that insert, delete, select, or reload rows and sections of the table view.

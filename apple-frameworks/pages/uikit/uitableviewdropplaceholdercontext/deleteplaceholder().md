> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdropplaceholdercontext/deleteplaceholder()](https://developer.apple.com/documentation/uikit/uitableviewdropplaceholdercontext/deleteplaceholder())

# deletePlaceholder() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes an unneeded placeholder cell from the table view.

## Declaration

```swift
func deletePlaceholder() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the placeholder cell was removed, or [false](https://developer.apple.com/documentation/swift/false) if the cell was no longer in the table view.

<a id="Discussion"></a>

## Discussion

Call this method on your app’s main thread to remove a placeholder cell without swapping in a new cell. You might call this method if the user chooses to undo the insertion of a cell or if the contents of the table view changed.

# deletePlaceholder (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Removes an unneeded placeholder cell from the table view.

## Declaration

```objectivec
- (BOOL) deletePlaceholder;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the placeholder cell was removed, or [false](https://developer.apple.com/documentation/swift/false) if the cell was no longer in the table view.

<a id="Discussion"></a>

## Discussion

Call this method on your app’s main thread to remove a placeholder cell without swapping in a new cell. You might call this method if the user chooses to undo the insertion of a cell or if the contents of the table view changed.

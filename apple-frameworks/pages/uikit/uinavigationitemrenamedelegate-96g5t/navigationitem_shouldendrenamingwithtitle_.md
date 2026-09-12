> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:shouldendrenamingwithtitle:](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitem:shouldendrenamingwithtitle:)

# navigationItem:shouldEndRenamingWithTitle:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Asks the delegate whether to continue or abandon the rename process.

## Declaration

```objectivec
- (BOOL) navigationItem:(UINavigationItem *) navigationItem shouldEndRenamingWithTitle:(NSString *) title;
```

## Parameters

- `navigationItem`: The navigation item attempting to continue the rename process.
- `title`: The new title of the navigation item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to continue the rename process; [false](https://developer.apple.com/documentation/swift/false) to cancel the rename process.

<a id="Discussion"></a>

## Discussion

Implement this method to return [false](https://developer.apple.com/documentation/swift/false) to prevent renaming.

> **Important**

>  UIKit might not call this method in certain situations, like when the system pushes a new navigation item onto the navigation bar. In these situations, UIKit calls [navigationItem:didEndRenamingWithTitle:](navigationitem_didendrenamingwithtitle_.md) instead. Therefore, make sure to implement [navigationItem:didEndRenamingWithTitle:](navigationitem_didendrenamingwithtitle_.md) to handle the cases when [navigationItem:shouldEndRenamingWithTitle:](navigationitem_shouldendrenamingwithtitle_.md) returns [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Determining rename support

- [navigationItemShouldBeginRenaming:](navigationitemshouldbeginrenaming_.md): Asks the delegate whether the navigation item supports renaming.

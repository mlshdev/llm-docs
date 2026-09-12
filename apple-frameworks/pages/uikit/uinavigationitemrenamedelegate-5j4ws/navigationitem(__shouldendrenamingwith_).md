> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitem(_:shouldendrenamingwith:)](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitem(_:shouldendrenamingwith:))

# navigationItem(\_:shouldEndRenamingWith:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Asks the delegate whether to continue or abandon the rename process.

## Declaration

```swift
@MainActor @preconcurrency func navigationItem(_: UINavigationItem, shouldEndRenamingWith title: String) -> Bool
```

## Parameters

- `_`: The navigation item attempting to continue the rename process.
- `title`: The new title of the navigation item.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to continue the rename process; [false](https://developer.apple.com/documentation/swift/false) to cancel the rename process.

<a id="Discussion"></a>

## Discussion

Implement this method to return [false](https://developer.apple.com/documentation/swift/false) to prevent renaming.

> **Important**

>  UIKit might not call this method in certain situations, like when the system pushes a new navigation item onto the navigation bar. In these situations, UIKit calls [navigationItem(\_:didEndRenamingWith:)](navigationitem%28__didendrenamingwith_%29.md) instead. Therefore, make sure to implement [navigationItem(\_:didEndRenamingWith:)](navigationitem%28__didendrenamingwith_%29.md) to handle the cases when [navigationItem(\_:shouldEndRenamingWith:)](navigationitem%28__shouldendrenamingwith_%29.md) returns [false](https://developer.apple.com/documentation/swift/false).

## Default Implementations

### UINavigationItemRenameDelegate Implementations

- [navigationItem(\_:shouldEndRenamingWith:)](navigationitem%28__shouldendrenamingwith_%29-5ld6b.md)

## See Also

### Determining rename support

- [navigationItemShouldBeginRenaming(\_:)](navigationitemshouldbeginrenaming%28__%29.md): Asks the delegate whether the navigation item supports renaming.

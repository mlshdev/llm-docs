> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitemshouldbeginrenaming(_:)](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-5j4ws/navigationitemshouldbeginrenaming(_:))

# navigationItemShouldBeginRenaming(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

Asks the delegate whether the navigation item supports renaming.

## Declaration

```swift
@MainActor @preconcurrency func navigationItemShouldBeginRenaming(_: UINavigationItem) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to support renaming and show Rename in the title menu; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the navigation bar’s title menu becomes visible to validate whether to show Rename as part of that menu. Implement this method to determine whether to display the Rename menu element and support the rename process.

## Default Implementations

### UINavigationItemRenameDelegate Implementations

- [navigationItemShouldBeginRenaming(\_:)](navigationitemshouldbeginrenaming%28__%29-7kane.md)

## See Also

### Determining rename support

- [navigationItem(\_:shouldEndRenamingWith:)](navigationitem%28__shouldendrenamingwith_%29.md): Asks the delegate whether to continue or abandon the rename process.

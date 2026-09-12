> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitemshouldbeginrenaming:](https://developer.apple.com/documentation/uikit/uinavigationitemrenamedelegate-96g5t/navigationitemshouldbeginrenaming:)

# navigationItemShouldBeginRenaming:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Asks the delegate whether the navigation item supports renaming.

## Declaration

```objectivec
- (BOOL) navigationItemShouldBeginRenaming:(UINavigationItem *) navigationItem;
```

## Parameters

- `navigationItem`: The navigation item asking whether to support renaming.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) to support renaming and show Rename in the title menu; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the navigation bar’s title menu becomes visible to validate whether to show Rename as part of that menu. Implement this method to determine whether to display the Rename menu element and support the rename process.

## See Also

### Determining rename support

- [navigationItem:shouldEndRenamingWithTitle:](navigationitem_shouldendrenamingwithtitle_.md): Asks the delegate whether to continue or abandon the rename process.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar/setitems(_:animated:)](https://developer.apple.com/documentation/uikit/uitoolbar/setitems(_:animated:))

# setItems(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the items on the toolbar by animating the changes.

## Declaration

```swift
func setItems(_ items: [UIBarButtonItem]?, animated: Bool)
```

## Parameters

- `items`: The items to display on the toolbar.
- `animated`: A Boolean value if set to [true](https://developer.apple.com/documentation/swift/true) animates the transition to the items; otherwise, does not.

<a id="Discussion"></a>

## Discussion

If `animated` is [true](https://developer.apple.com/documentation/swift/true), the changes are dissolved or the reordering is animated—for example, removed items fade out and new items fade in. This method also adjusts the spacing between items.

## See Also

### Configuring toolbar items

- [items](items.md): The items displayed on the toolbar.

# setItems:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the items on the toolbar by animating the changes.

## Declaration

```objectivec
- (void) setItems:(NSArray<UIBarButtonItem *> *) items animated:(BOOL) animated;
```

## Parameters

- `items`: The items to display on the toolbar.
- `animated`: A Boolean value if set to [true](https://developer.apple.com/documentation/swift/true) animates the transition to the items; otherwise, does not.

<a id="Discussion"></a>

## Discussion

If `animated` is [true](https://developer.apple.com/documentation/swift/true), the changes are dissolved or the reordering is animated—for example, removed items fade out and new items fade in. This method also adjusts the spacing between items.

## See Also

### Configuring toolbar items

- [items](items.md): The items displayed on the toolbar.

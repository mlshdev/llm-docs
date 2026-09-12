> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/removeitem(_:)](https://developer.apple.com/documentation/uikit/uigravitybehavior/removeitem(_:))

# removeItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the specified dynamic item from the gravity behavior.

## Declaration

```swift
func removeItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item that you want to remove. If the specified item is not associated with the behavior, this method does nothing.

<a id="Discussion"></a>

## Discussion

If the gravity behavior has an associated dynamic animator, this method notifies the dynamic animator of the removal of the item so that it can stop any associated animations.

## See Also

### Managing a gravity behavior’s items

- [items](items.md): The set of dynamic items associated with the gravity behavior.
- [addItem(\_:)](additem%28__%29.md): Associates the specified dynamic item with the gravity behavior.

# removeItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes the specified dynamic item from the gravity behavior.

## Declaration

```objectivec
- (void) removeItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item that you want to remove. If the specified item is not associated with the behavior, this method does nothing.

<a id="Discussion"></a>

## Discussion

If the gravity behavior has an associated dynamic animator, this method notifies the dynamic animator of the removal of the item so that it can stop any associated animations.

## See Also

### Managing a gravity behavior’s items

- [items](items.md): The set of dynamic items associated with the gravity behavior.
- [addItem:](additem%28__%29.md): Associates the specified dynamic item with the gravity behavior.

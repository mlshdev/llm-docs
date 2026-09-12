> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigravitybehavior/additem(_:)](https://developer.apple.com/documentation/uikit/uigravitybehavior/additem(_:))

# addItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Associates the specified dynamic item with the gravity behavior.

## Declaration

```swift
func addItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item to add to the item array. If the specified item is already associated with the gravity behavior, this method does nothing.

<a id="Discussion"></a>

## Discussion

Use this method to add new dynamic items to the gravity behavior after initialization. All the dynamic items added to a gravity behavior are subject to the same gravity vector.

If the gravity behavior has an associated dynamic animator, this method notifies the dynamic animator of the presence of the new item so that it can initiate any needed animations.

## See Also

### Managing a gravity behavior’s items

- [items](items.md): The set of dynamic items associated with the gravity behavior.
- [removeItem(\_:)](removeitem%28__%29.md): Removes the specified dynamic item from the gravity behavior.

# addItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Associates the specified dynamic item with the gravity behavior.

## Declaration

```objectivec
- (void) addItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item to add to the item array. If the specified item is already associated with the gravity behavior, this method does nothing.

<a id="Discussion"></a>

## Discussion

Use this method to add new dynamic items to the gravity behavior after initialization. All the dynamic items added to a gravity behavior are subject to the same gravity vector.

If the gravity behavior has an associated dynamic animator, this method notifies the dynamic animator of the presence of the new item so that it can initiate any needed animations.

## See Also

### Managing a gravity behavior’s items

- [items](items.md): The set of dynamic items associated with the gravity behavior.
- [removeItem:](removeitem%28__%29.md): Removes the specified dynamic item from the gravity behavior.

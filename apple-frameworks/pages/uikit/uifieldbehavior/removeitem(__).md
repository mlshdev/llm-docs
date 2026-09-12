> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/removeitem(_:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/removeitem(_:))

# removeItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the field behavior from the specified dynamic item.

## Declaration

```swift
func removeItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item whose behavior you want to modify.

<a id="Discussion"></a>

## Discussion

Use this method to remove a field from a dynamic item in your interface. This method removes the specified dynamic item from the field behavior’s list of dynamic item.

## See Also

### Managing the associated dynamic items

- [addItem(\_:)](additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [items](items.md): The dynamic items associated with the current field behavior.

# removeItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Removes the field behavior from the specified dynamic item.

## Declaration

```objectivec
- (void) removeItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item whose behavior you want to modify.

<a id="Discussion"></a>

## Discussion

Use this method to remove a field from a dynamic item in your interface. This method removes the specified dynamic item from the field behavior’s list of dynamic item.

## See Also

### Managing the associated dynamic items

- [addItem:](additem%28__%29.md): Associates the field behavior with the specified dynamic item.
- [items](items.md): The dynamic items associated with the current field behavior.

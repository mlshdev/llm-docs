> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifieldbehavior/additem(_:)](https://developer.apple.com/documentation/uikit/uifieldbehavior/additem(_:))

# addItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Associates the field behavior with the specified dynamic item.

## Declaration

```swift
func addItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item whose behavior you want to modify.

<a id="Discussion"></a>

## Discussion

Use this method to apply a field to a dynamic item in your interface. This method adds the specified dynamic item to the field behavior’s list of dynamic items.

## See Also

### Managing the associated dynamic items

- [removeItem(\_:)](removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.
- [items](items.md): The dynamic items associated with the current field behavior.

# addItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Associates the field behavior with the specified dynamic item.

## Declaration

```objectivec
- (void) addItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item whose behavior you want to modify.

<a id="Discussion"></a>

## Discussion

Use this method to apply a field to a dynamic item in your interface. This method adds the specified dynamic item to the field behavior’s list of dynamic items.

## See Also

### Managing the associated dynamic items

- [removeItem:](removeitem%28__%29.md): Removes the field behavior from the specified dynamic item.
- [items](items.md): The dynamic items associated with the current field behavior.

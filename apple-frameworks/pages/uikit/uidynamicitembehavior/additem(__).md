> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/additem(_:)](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/additem(_:))

# addItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the dynamic item behavior’s item array.

## Declaration

```swift
func addItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

You can add a dynamic item to one or more dynamic item behaviors. For example, you could add a dynamic item to one dynamic item behavior to configure the item’s elasticity and to a second dynamic item behavior to configure its density. This is especially useful when you are defining custom, combined behaviors for your dynamic items.

## See Also

### Initializing and managing a dynamic item behavior

- [init(items:)](init%28items_%29.md): Initializes a dynamic item behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the dynamic item behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the dynamic item behavior.

# addItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the dynamic item behavior’s item array.

## Declaration

```objectivec
- (void) addItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

You can add a dynamic item to one or more dynamic item behaviors. For example, you could add a dynamic item to one dynamic item behavior to configure the item’s elasticity and to a second dynamic item behavior to configure its density. This is especially useful when you are defining custom, combined behaviors for your dynamic items.

## See Also

### Initializing and managing a dynamic item behavior

- [initWithItems:](init%28items_%29.md): Initializes a dynamic item behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the dynamic item behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the dynamic item behavior.

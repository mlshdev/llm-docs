> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/additem(_:)](https://developer.apple.com/documentation/uikit/uicollisionbehavior/additem(_:))

# addItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the collision behavior’s item array.

## Declaration

```swift
func addItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

You can add a dynamic item to one or more collision behaviors. For example, you can use two collision behaviors to specify that item *A* can collide with item *B* and that item *C* can collide with item *D*, but that items *A* and *B* ignore items *C* and *D*.

There is no hard limit to the number of dynamic items you can add to a collision behavior. However, adding a large number of items might result in a performance impact. Be sure to test your behaviors on the device configurations you are targeting.

## See Also

### Initializing and managing a collision behavior

- [init(items:)](init%28items_%29.md): Initializes a collision behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the collision behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the collision behavior.

# addItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the collision behavior’s item array.

## Declaration

```objectivec
- (void) addItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

You can add a dynamic item to one or more collision behaviors. For example, you can use two collision behaviors to specify that item *A* can collide with item *B* and that item *C* can collide with item *D*, but that items *A* and *B* ignore items *C* and *D*.

There is no hard limit to the number of dynamic items you can add to a collision behavior. However, adding a large number of items might result in a performance impact. Be sure to test your behaviors on the device configurations you are targeting.

## See Also

### Initializing and managing a collision behavior

- [initWithItems:](init%28items_%29.md): Initializes a collision behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the collision behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the collision behavior.

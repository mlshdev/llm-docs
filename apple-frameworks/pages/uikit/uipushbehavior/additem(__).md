> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/additem(_:)](https://developer.apple.com/documentation/uikit/uipushbehavior/additem(_:))

# addItem(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the behavior’s dynamic item array.

## Declaration

```swift
func addItem(_ item: any UIDynamicItem)
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

All the dynamic items added to a push behavior are subject to the same force vector.

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [init(items:mode:)](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

# addItem: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic item to the behavior’s dynamic item array.

## Declaration

```objectivec
- (void) addItem:(id<UIDynamicItem>) item;
```

## Parameters

- `item`: The dynamic item to add to the item array.

<a id="Discussion"></a>

## Discussion

All the dynamic items added to a push behavior are subject to the same force vector.

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [initWithItems:mode:](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

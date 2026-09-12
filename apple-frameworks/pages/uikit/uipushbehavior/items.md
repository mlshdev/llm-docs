> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/items](https://developer.apple.com/documentation/uikit/uipushbehavior/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the set of dynamic items you’ve added to the push behavior.

## Declaration

```swift
var items: [any UIDynamicItem] { get }
```

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [addItem(\_:)](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [init(items:mode:)](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the set of dynamic items you’ve added to the push behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIDynamicItem>> * items;
```

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [addItem:](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [initWithItems:mode:](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.

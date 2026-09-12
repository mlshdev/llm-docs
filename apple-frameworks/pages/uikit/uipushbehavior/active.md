> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/active](https://developer.apple.com/documentation/uikit/uipushbehavior/active)

# active (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The state of the push behavior’s force: either active or inactive.

## Declaration

```swift
var active: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

After you’ve added a push behavior to a dynamic animator, use this property to activate or deactivate the behavior’s force (rather than removing and then re-adding the behavior to the animator).

## See Also

### Initializing and managing a push behavior

- [addItem(\_:)](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [init(items:mode:)](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

# active (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The state of the push behavior’s force: either active or inactive.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL active;
```

<a id="Discussion"></a>

## Discussion

After you’ve added a push behavior to a dynamic animator, use this property to activate or deactivate the behavior’s force (rather than removing and then re-adding the behavior to the animator).

## See Also

### Initializing and managing a push behavior

- [addItem:](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [initWithItems:mode:](init%28items_mode_%29.md): Initializes a push behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

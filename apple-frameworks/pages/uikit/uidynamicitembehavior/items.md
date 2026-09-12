> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitembehavior/items](https://developer.apple.com/documentation/uikit/uidynamicitembehavior/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the set of dynamic items you’ve added to the dynamic item behavior.

## Declaration

```swift
var items: [any UIDynamicItem] { get }
```

<a id="Discussion"></a>

## Discussion

## See Also

### Initializing and managing a dynamic item behavior

- [addItem(\_:)](additem%28__%29.md): Adds a dynamic item to the dynamic item behavior’s item array.
- [init(items:)](init%28items_%29.md): Initializes a dynamic item behavior with an array of dynamic items.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the dynamic item behavior.

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the set of dynamic items you’ve added to the dynamic item behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIDynamicItem>> * items;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Initializing and managing a dynamic item behavior

- [addItem:](additem%28__%29.md): Adds a dynamic item to the dynamic item behavior’s item array.
- [initWithItems:](init%28items_%29.md): Initializes a dynamic item behavior with an array of dynamic items.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the dynamic item behavior.

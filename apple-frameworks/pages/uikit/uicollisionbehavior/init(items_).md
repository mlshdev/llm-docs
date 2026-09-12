> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/init(items:)](https://developer.apple.com/documentation/uikit/uicollisionbehavior/init(items:))

# init(items:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a collision behavior with an array of dynamic items.

## Declaration

```swift
init(items: [any UIDynamicItem])
```

## Parameters

- `items`: The dynamic items that you want to participate in the collision behavior.

<a id="return-value"></a>

## Return Value

The initialized collision behavior, or `nil` if there was a problem initializing the object.

## See Also

### Initializing and managing a collision behavior

- [addItem(\_:)](additem%28__%29.md): Adds a dynamic item to the collision behavior’s item array.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the collision behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the collision behavior.

# initWithItems: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a collision behavior with an array of dynamic items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<UIDynamicItem>> *) items;
```

## Parameters

- `items`: The dynamic items that you want to participate in the collision behavior.

<a id="return-value"></a>

## Return Value

The initialized collision behavior, or `nil` if there was a problem initializing the object.

## See Also

### Initializing and managing a collision behavior

- [addItem:](additem%28__%29.md): Adds a dynamic item to the collision behavior’s item array.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the collision behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the collision behavior.

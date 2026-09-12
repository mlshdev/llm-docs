> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipushbehavior/init(items:mode:)](https://developer.apple.com/documentation/uikit/uipushbehavior/init(items:mode:))

# init(items:mode:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a push behavior with an array of dynamic items.

## Declaration

```swift
init(items: [any UIDynamicItem], mode: UIPushBehavior.Mode)
```

## Parameters

- `items`: The dynamic items that you want to be subject to the push behavior.
- `mode`: The mode for the new push behavior; one of the values defined in the [UIPushBehavior.Mode](mode-swift.enum.md) enumeration. You must supply a value.

<a id="return-value"></a>

## Return Value

The initialized push behavior, or `nil` if there was a problem initializing the object.

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [addItem(\_:)](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [removeItem(\_:)](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

# initWithItems:mode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a push behavior with an array of dynamic items.

## Declaration

```objectivec
- (instancetype) initWithItems:(NSArray<id<UIDynamicItem>> *) items mode:(UIPushBehaviorMode) mode;
```

## Parameters

- `items`: The dynamic items that you want to be subject to the push behavior.
- `mode`: The mode for the new push behavior; one of the values defined in the [UIPushBehaviorMode](mode-swift.enum.md) enumeration. You must supply a value.

<a id="return-value"></a>

## Return Value

The initialized push behavior, or `nil` if there was a problem initializing the object.

## See Also

### Initializing and managing a push behavior

- [active](active.md): The state of the push behavior’s force: either active or inactive.
- [addItem:](additem%28__%29.md): Adds a dynamic item to the behavior’s dynamic item array.
- [removeItem:](removeitem%28__%29.md): Removes a specific dynamic item from the behavior.
- [items](items.md): Returns the set of dynamic items you’ve added to the push behavior.

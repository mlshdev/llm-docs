> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkentity/init()

# init() (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new entity object.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A new entity object.

<a id="Discussion"></a>

## Discussion

If you create a [GKEntity](../gkentity.md) subclass and define any additional initializers, you must delegate to this initializer. You do not need to subclass [GKEntity](../gkentity.md) to use Entity-Component architecture—generally, you should create a custom entity class only when you need a place to store state or resources that are shared by multiple components.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# init (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new entity object.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A new entity object.

<a id="Discussion"></a>

## Discussion

If you create a [GKEntity](../gkentity.md) subclass and define any additional initializers, you must delegate to this initializer. You do not need to subclass [GKEntity](../gkentity.md) to use Entity-Component architecture—generally, you should create a custom entity class only when you need a place to store state or resources that are shared by multiple components.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating an Entity

- [entity](entity.md): Creates a new entity object.

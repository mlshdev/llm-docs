> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/init(componentclass:)](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/init(componentclass:))

# init(componentClass:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a component system to manage components of the specified class.

## Declaration

```swift
init(componentClass cls: AnyClass)
```

<a id="return-value"></a>

## Return Value

A new component system.

<a id="Discussion"></a>

## Discussion

Each [GKComponentSystem](../gkcomponentsystem.md) object manages components of a specific [GKComponent](../gkcomponent.md) subclass, which you specify with the `class` parameter in this intializer. After initializing a component system, you may add components to it only if their type matches the system’s component class.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithComponentClass: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a component system to manage components of the specified class.

## Declaration

```objectivec
- (instancetype) initWithComponentClass:(Class) cls;
```

<a id="return-value"></a>

## Return Value

A new component system.

<a id="Discussion"></a>

## Discussion

Each [GKComponentSystem](../gkcomponentsystem.md) object manages components of a specific [GKComponent](../gkcomponent.md) subclass, which you specify with the `class` parameter in this intializer. After initializing a component system, you may add components to it only if their type matches the system’s component class.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/componentclass](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/componentclass)

# componentClass (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The class of components managed by the component system.

## Declaration

```swift
var componentClass: AnyClass { get }
```

<a id="Discussion"></a>

## Discussion

Each [GKComponentSystem](../gkcomponentsystem.md) object manages components of a specific [GKComponent](../gkcomponent.md) subclass. You specify the component class to be used by a system when creating it with the [init(componentClass:)](init%28componentclass_%29.md) initializer. Afterward, you may add components to the system only if their type matches the system’s component class.

## See Also

### Managing a List of Components

- [components](components.md): The component system’s list of components.
- [addComponent(\_:)](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponent(foundIn:)](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent(\_:)](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponent(foundIn:)](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

# componentClass (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The class of components managed by the component system.

## Declaration

```objectivec
@property (nonatomic, readonly) Class componentClass;
```

<a id="Discussion"></a>

## Discussion

Each [GKComponentSystem](../gkcomponentsystem.md) object manages components of a specific [GKComponent](../gkcomponent.md) subclass. You specify the component class to be used by a system when creating it with the [initWithComponentClass:](init%28componentclass_%29.md) initializer. Afterward, you may add components to the system only if their type matches the system’s component class.

## See Also

### Managing a List of Components

- [components](components.md): The component system’s list of components.
- [addComponent:](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponentWithEntity:](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent:](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponentWithEntity:](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

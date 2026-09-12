> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/removecomponent(_:)](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/removecomponent(_:))

# removeComponent(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified component instance from the component system.

## Declaration

```swift
func removeComponent(_ component: ComponentType)
```

## Parameters

- `component`: An instance of a [GKComponent](../gkcomponent.md) subclass in the component system.

<a id="Discussion"></a>

## Discussion

If the specified component is not in the component system, this method has no effect.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [components](components.md): The component system’s list of components.
- [addComponent(\_:)](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponent(foundIn:)](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent(foundIn:)](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

# removeComponent: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the specified component instance from the component system.

## Declaration

```objectivec
- (void) removeComponent:(ComponentType) component;
```

## Parameters

- `component`: An instance of a [GKComponent](../gkcomponent.md) subclass in the component system.

<a id="Discussion"></a>

## Discussion

If the specified component is not in the component system, this method has no effect.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [components](components.md): The component system’s list of components.
- [addComponent:](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponentWithEntity:](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponentWithEntity:](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

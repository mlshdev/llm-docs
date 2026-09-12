> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/addcomponent(foundin:)](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/addcomponent(foundin:))

# addComponent(foundIn:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds any instances of the component system’s component class in the specified entity to the component system.

## Declaration

```swift
func addComponent(foundIn entity: GKEntity)
```

## Parameters

- `entity`: An entity.

<a id="Discussion"></a>

## Discussion

This method examines the [components](../gkentity/components.md) array of the specified entity, adding any components whose type matches the component system’s [componentClass](componentclass.md) property to the component system.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [components](components.md): The component system’s list of components.
- [addComponent(\_:)](addcomponent%28__%29.md): Adds a component instance to the component system.
- [removeComponent(\_:)](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponent(foundIn:)](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

# addComponentWithEntity: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds any instances of the component system’s component class in the specified entity to the component system.

## Declaration

```objectivec
- (void) addComponentWithEntity:(GKEntity *) entity;
```

## Parameters

- `entity`: An entity.

<a id="Discussion"></a>

## Discussion

This method examines the [components](../gkentity/components.md) array of the specified entity, adding any components whose type matches the component system’s [componentClass](componentclass.md) property to the component system.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [components](components.md): The component system’s list of components.
- [addComponent:](addcomponent%28__%29.md): Adds a component instance to the component system.
- [removeComponent:](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponentWithEntity:](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

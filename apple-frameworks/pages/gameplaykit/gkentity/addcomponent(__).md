> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity/addcomponent(_:)](https://developer.apple.com/documentation/gameplaykit/gkentity/addcomponent(_:))

# addComponent(\_:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a component to the entity.

## Declaration

```swift
func addComponent(_ component: GKComponent)
```

## Parameters

- `component`: An instance of a [GKComponent](../gkcomponent.md) subclass.

<a id="Discussion"></a>

## Discussion

You create components by subclassing [GKEntity](../gkentity.md) to implement reusable behavior. Then, use this method to incorporate the behavior of a component class into that entity.

An entity’s [components](components.md) list never has more than one instance of any component class—if the entity already contains a component of the same class as the `component` parameter, calling this method will replace that component.

## See Also

### Managing an Entity’s List of Components

- [components](components.md): The entity’s list of components.

# addComponent: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Adds a component to the entity.

## Declaration

```objectivec
- (void) addComponent:(GKComponent *) component;
```

## Parameters

- `component`: An instance of a [GKComponent](../gkcomponent.md) subclass.

<a id="Discussion"></a>

## Discussion

You create components by subclassing [GKEntity](../gkentity.md) to implement reusable behavior. Then, use this method to incorporate the behavior of a component class into that entity.

An entity’s [components](components.md) list never has more than one instance of any component class—if the entity already contains a component of the same class as the `component` parameter, calling this method will replace that component.

## See Also

### Managing an Entity’s List of Components

- [components](components.md): The entity’s list of components.
- [componentForClass:](componentforclass_.md): Returns the entity’s component for the specified component class.
- [removeComponentForClass:](removecomponentforclass_.md): Removes the component of the specified class from the entity.

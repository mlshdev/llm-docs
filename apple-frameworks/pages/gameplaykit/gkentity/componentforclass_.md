> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity/componentforclass:](https://developer.apple.com/documentation/gameplaykit/gkentity/componentforclass:)

# componentForClass:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the entity’s component for the specified component class.

## Declaration

```objectivec
- (GKComponent *) componentForClass:(Class) componentClass;
```

## Parameters

- `componentClass`: The [GKComponent](../gkcomponent.md) subclass for which to return a component instance.

<a id="return-value"></a>

## Return Value

The component instance for the specified class, or `nil` if the entity has no components of that class.

<a id="Discussion"></a>

## Discussion

An entity’s [components](components.md) list always has no more than one instance of any component class. Use this method to retrieve a component instance when all you know is that the entity contains a component of a particular class.

## See Also

### Managing an Entity’s List of Components

- [components](components.md): The entity’s list of components.
- [addComponent:](addcomponent%28__%29.md): Adds a component to the entity.
- [removeComponentForClass:](removecomponentforclass_.md): Removes the component of the specified class from the entity.

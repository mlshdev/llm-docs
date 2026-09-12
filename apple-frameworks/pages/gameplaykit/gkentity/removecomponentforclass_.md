> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity/removecomponentforclass:](https://developer.apple.com/documentation/gameplaykit/gkentity/removecomponentforclass:)

# removeComponentForClass:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Removes the component of the specified class from the entity.

## Declaration

```objectivec
- (void) removeComponentForClass:(Class) componentClass;
```

## Parameters

- `componentClass`: The [GKComponent](../gkcomponent.md) subclass for which to return a component instance.

<a id="Discussion"></a>

## Discussion

An entity’s [components](components.md) list always has no more than one instance of any component class. If the entity does not contain a component of the specified class, this method does nothing.

## See Also

### Managing an Entity’s List of Components

- [components](components.md): The entity’s list of components.
- [componentForClass:](componentforclass_.md): Returns the entity’s component for the specified component class.
- [addComponent:](addcomponent%28__%29.md): Adds a component to the entity.

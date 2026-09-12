> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkentity/components](https://developer.apple.com/documentation/gameplaykit/gkentity/components)

# components (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The entity’s list of components.

## Declaration

```swift
var components: [GKComponent] { get }
```

## See Also

### Managing an Entity’s List of Components

- [addComponent(\_:)](addcomponent%28__%29.md): Adds a component to the entity.

# components (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The entity’s list of components.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<GKComponent *> * components;
```

## See Also

### Managing an Entity’s List of Components

- [componentForClass:](componentforclass_.md): Returns the entity’s component for the specified component class.
- [addComponent:](addcomponent%28__%29.md): Adds a component to the entity.
- [removeComponentForClass:](removecomponentforclass_.md): Removes the component of the specified class from the entity.

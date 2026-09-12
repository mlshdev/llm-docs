> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponentsystem/components](https://developer.apple.com/documentation/gameplaykit/gkcomponentsystem/components)

# components (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The component system’s list of components.

## Declaration

```swift
var components: [ComponentType] { get }
```

<a id="Discussion"></a>

## Discussion

Calling a method of the system’s component class forwards that message to every component in this array.

Important among component-specific messages is the [update(deltaTime:)](update%28deltatime_%29.md) method—call this method on a component system to perform per-frame updates for all the component instances it manages.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [addComponent(\_:)](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponent(foundIn:)](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent(\_:)](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponent(foundIn:)](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

# components (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The component system’s list of components.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSArray<GKComponent *> * components;
```

<a id="Discussion"></a>

## Discussion

Calling a method of the system’s component class forwards that message to every component in this array.

Important among component-specific messages is the [updateWithDeltaTime:](update%28deltatime_%29.md) method—call this method on a component system to perform per-frame updates for all the component instances it manages.

## See Also

### Managing a List of Components

- [componentClass](componentclass.md): The class of components managed by the component system.
- [addComponent:](addcomponent%28__%29.md): Adds a component instance to the component system.
- [addComponentWithEntity:](addcomponent%28foundin_%29.md): Adds any instances of the component system’s component class in the specified entity to the component system.
- [removeComponent:](removecomponent%28__%29.md): Removes the specified component instance from the component system.
- [removeComponentWithEntity:](removecomponent%28foundin_%29.md): Removes any instances of the component system’s component class in the specified entity from the component system.

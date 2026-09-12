> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent)

# AnimationLibraryComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A component that represents a collection of animations that an entity can play.

## Declaration

```swift
struct AnimationLibraryComponent
```

<a id="overview"></a>

## Overview

You use an `AnimationLibraryComponent` to access an entity’s animation resources. You can store animations with an entity by packaging them together into a `.reality` file. You can do this with Reality Composer Pro or by building a custom tool.

<a id="Create-an-animation-library-with-Reality-Composer-Pro"></a>

### Create an animation library with Reality Composer Pro

Follow these steps to create an animation library for an entity:

1. In the hierarchy view, select the entity you want to add animations to.
2. In the inspector, click Add Component and select Animation Library from the list of components.
3. Click the Add button (+) and select the USD files with animations.

At runtime, your app can access and play the animations that the entity stores.

```swift
// Load the entity you want to animate.
let robot = try await Entity(named: "robot")

// Access the animation library associated with the entity.
let animationLibrary = robot.components[AnimationLibraryComponent.self]

// Play the walk animation.
if let walkAnimation = animationLibrary.animations["walk"] {
    robot.playAnimation(walkAnimation)
}
```

<a id="Create-an-animation-library-by-building-your-own-tool"></a>

### Create an animation library by building your own tool

If you need to build a custom tool to create `.reality` files, you can use RealityKit to programmatically create an animation library by following these steps:

1. Load an animation entity with [init(named:in:)](entity/init%28named_in_%29.md).
2. Retrieve the entity’s animation resources from its [availableAnimations](entity/availableanimations.md) property.
3. Add the animations to an animation library.

The following example shows how you can set up an animation library:

```swift
// Create an empty animation library component.
var animationLibrary = AnimationLibraryComponent()

// Load the entities containing the animations.
let entityIdleAnimation = try await Entity(named: "idle")
let entityWalkAnimation = try await Entity(named: "walk")

// Assign the animations to the library by name.
animationLibrary.animations["idle"] = entityIdleAnimation.availableAnimations.first
animationLibrary.animations["walk"] = entityWalkAnimation.availableAnimations.first
```

After you configure the animation library, you can assign it to an entity and serialize the entity to a file. RealityKit packages the animations for that entity when you save it to a `.reality` file.

```swift
// Load the entity you want to animate.
let robot = try! await Entity(named: "robot")

// Assign the animation library to the entity.
robot.components.set(animationLibrary)

// Write the entity with its animations to a file.
robot.write(to: fileURL)
```

To play one of the animations in your app, create an entity from the `.reality` file and then call its [playAnimation(\_:transitionDuration:startsPaused:)](entity/playanimation%28__transitionduration_startspaused_%29.md) method.

## Topics

### Creating an animation library component

- [init()](animationlibrarycomponent/init%28%29.md): Creates an empty animation library.
- [init(animations:)](animationlibrarycomponent/init%28animations_%29.md): Creates an animation library from a dictionary that associates an animation’s data with its name.
- [init(dictionaryLiteral:)](animationlibrarycomponent/init%28dictionaryliteral_%29.md): Creates an animation library from a variadic list of key-value pairs.

### Accessing animations

- [animations](animationlibrarycomponent/animations.md): The collection of animations an entity can play.
- [unkeyedResources](animationlibrarycomponent/unkeyedresources.md): The library’s animation resources that don’t have a queryable name.
- [defaultAnimation](animationlibrarycomponent/defaultanimation.md): The default animation resource.
- [defaultKey](animationlibrarycomponent/defaultkey.md): The name of the default animation resource.

### Managing references to animations

- [removeAll(resource:)](animationlibrarycomponent/removeall%28resource_%29.md): Removes all the component’s references to an animation resource.

### Configuring default playback

- [automaticallyPlaysDefaultAnimation](animationlibrarycomponent/automaticallyplaysdefaultanimation.md): Whether to automatically play the default animation when the entity is added to a scene and enabled. Default value is false, meaning the default animation will not be automatically played by default. This value can only be set when initializing `AnimationLibraryComponent`
- [init(automaticallyPlaysDefaultAnimation:)](animationlibrarycomponent/init%28automaticallyplaysdefaultanimation_%29.md): Creates an empty animation library.
- [init(animations:automaticallyPlaysDefaultAnimation:)](animationlibrarycomponent/init%28animations_automaticallyplaysdefaultanimation_%29.md): Creates an animation library from a dictionary that associates an animation’s data with its name.

### Structures

- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.

## Relationships

### Conforms To

- [Component](component.md)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)

## See Also

### Animation playback

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md): Invoke implicit animations by setting the entity’s desired end state.
- [AnimationResource](animationresource.md): An animation for the properties of scenes or entities.
- [AnimationLibraryComponent.AnimationCollection](animationlibrarycomponent/animationcollection.md): A collection of animations an entity can play.
- [AnimationEvents](animationevents.md): Notable milestones that the framework signals during animation playback.
- [AnimationPlaybackController](animationplaybackcontroller.md): A controller that manages animation playback.
- [AnimationRepeatMode](animationrepeatmode.md): Options that determine whether an animation replays after completion.

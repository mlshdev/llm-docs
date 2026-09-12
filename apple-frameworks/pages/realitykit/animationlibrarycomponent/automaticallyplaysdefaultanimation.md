> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/automaticallyplaysdefaultanimation](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/automaticallyplaysdefaultanimation)

# automaticallyPlaysDefaultAnimation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Whether to automatically play the default animation when the entity is added to a scene and enabled. Default value is false, meaning the default animation will not be automatically played by default. This value can only be set when initializing `AnimationLibraryComponent`

## Declaration

```swift
var automaticallyPlaysDefaultAnimation: Bool { get }
```

<a id="return-value"></a>

## Return Value

- `true` if automatically play default animation is enabled
- `false` if automatically play default animation is disabled

<a id="discussion"></a>

## Discussion

When set to `true`, the animation system automatically plays the default animation when the entity is added to a scene and enabled. The animation that auto-plays is determined by [defaultKey](defaultkey.md). If `defaultKey` is set, the system plays the animation stored under that key. If `defaultKey` is not set, the system plays the first animation in the library. If the library contains no animations, auto-play has no effect.

This is useful for background objects with looping animations, idle character states, or any entity whose animation should start without requiring code.

When set to `false`, animations require manual playback using [playAnimation(\_:transitionDuration:startsPaused:)](../entity/playanimation%28__transitionduration_startspaused_%29.md). Use manual playback when you need to control timing, pass custom parameters, or coordinate animation start with other game logic.

Disabling the entity or removing the `AnimationLibraryComponent` will stop any auto-playing animation.

<a id="Example"></a>

## Example

```swift
var library = AnimationLibraryComponent(automaticallyPlaysDefaultAnimation: true)
library["idle"] = idleAnimation
library.defaultKey = "idle"
entity.components.set(library)
// Animation plays automatically when the entity is added to a scene and enabled
```

## See Also

### Configuring default playback

- [init(automaticallyPlaysDefaultAnimation:)](init%28automaticallyplaysdefaultanimation_%29.md): Creates an empty animation library.
- [init(animations:automaticallyPlaysDefaultAnimation:)](init%28animations_automaticallyplaysdefaultanimation_%29.md): Creates an animation library from a dictionary that associates an animation’s data with its name.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/init(animations:automaticallyplaysdefaultanimation:)](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/init(animations:automaticallyplaysdefaultanimation:))

# init(animations:automaticallyPlaysDefaultAnimation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an animation library from a dictionary that associates an animation’s data with its name.

## Declaration

```swift
init(animations: [String : AnimationResource], automaticallyPlaysDefaultAnimation: Bool)
```

## Parameters

- `animations`: A dictionary of animation resources that you key by name.
- `automaticallyPlaysDefaultAnimation`: Whether to automatically play the default animation when the entity is added to a scene and enabled. When `true`, the animation system plays the default animation automatically. When `false`, animations require manual playback. See [automaticallyPlaysDefaultAnimation](automaticallyplaysdefaultanimation.md) for details.

<a id="Example"></a>

## Example

```swift
var library = AnimationLibraryComponent(
    animations: ["walk": walkAnimation, "run": runAnimation],
    automaticallyPlaysDefaultAnimation: true)
library.defaultKey = "walk"
entity.components.set(library)
```

## See Also

### Configuring default playback

- [automaticallyPlaysDefaultAnimation](automaticallyplaysdefaultanimation.md): Whether to automatically play the default animation when the entity is added to a scene and enabled. Default value is false, meaning the default animation will not be automatically played by default. This value can only be set when initializing `AnimationLibraryComponent`
- [init(automaticallyPlaysDefaultAnimation:)](init%28automaticallyplaysdefaultanimation_%29.md): Creates an empty animation library.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/defaultanimation](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/defaultanimation)

# defaultAnimation

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The default animation resource.

## Declaration

```swift
var defaultAnimation: AnimationResource? { get }
```

<a id="discussion"></a>

## Discussion

The component looks up the resource by key if [defaultKey](defaultkey.md) is non-`nil` and the library contains an animation that the key identifies. Otherwise, the component returns the first entry in the library.

## See Also

### Accessing animations

- [animations](animations.md): The collection of animations an entity can play.
- [unkeyedResources](unkeyedresources.md): The library’s animation resources that don’t have a queryable name.
- [defaultKey](defaultkey.md): The name of the default animation resource.

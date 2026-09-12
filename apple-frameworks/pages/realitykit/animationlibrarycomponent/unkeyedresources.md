> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/unkeyedresources](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/unkeyedresources)

# unkeyedResources

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The library’s animation resources that don’t have a queryable name.

## Declaration

```swift
var unkeyedResources: [AnimationResource]? { get }
```

<a id="return-value"></a>

## Return Value

An array of the animation resources that don’t have a key; otherwise, `nil`.

## See Also

### Accessing animations

- [animations](animations.md): The collection of animations an entity can play.
- [defaultAnimation](defaultanimation.md): The default animation resource.
- [defaultKey](defaultkey.md): The name of the default animation resource.

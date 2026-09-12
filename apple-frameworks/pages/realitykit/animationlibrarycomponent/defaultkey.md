> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationlibrarycomponent/defaultkey](https://developer.apple.com/documentation/realitykit/animationlibrarycomponent/defaultkey)

# defaultKey

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The name of the default animation resource.

## Declaration

```swift
var defaultKey: String? { get set }
```

<a id="discussion"></a>

## Discussion

Returns `nil` if you don’t set a default animation, or if the component can’t find it.

## See Also

### Accessing animations

- [animations](animations.md): The collection of animations an entity can play.
- [unkeyedResources](unkeyedresources.md): The library’s animation resources that don’t have a queryable name.
- [defaultAnimation](defaultanimation.md): The default animation resource.

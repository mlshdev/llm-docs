> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/entitypath/self](https://developer.apple.com/documentation/realitykit/bindtarget/entitypath/self)

# self

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A bind target for the entity.

## Declaration

```swift
var `self`: BindTarget { get }
```

<a id="discussion"></a>

## Discussion

This property represents a bind path within an [AnimationView](../../animationview.md) to redirect the view’s [source](../../blendtreesourcenode/source.md) animation to a different scene.

## See Also

### Accessing a bind target

- [jointTransforms](jointtransforms.md): A bind target for the entity’s joint transforms.
- [transform](transform.md): A bind target for the entity’s transform.
- [parameter(\_:)](parameter%28__%29.md): Provides a bind target for a particular animated property.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bloomcomponent/scope](https://developer.apple.com/documentation/realitykit/bloomcomponent/scope)

# scope

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The scope of where bloom will be computed

## Declaration

```swift
var scope: BloomComponent.BloomScope
```

<a id="discussion"></a>

## Discussion

If set to unbounded, bloom will be computed on the entire screen.

If set to hierarchical, bloom will only be computed in regions near the entity hierarchy beneath all bloom components. This is useful to reduce the cost of bloom, but can create artifacts if something bright enough to bloom is not contained within the hierarchy.

## See Also

### Configuring the bloom scope

- [BloomComponent.BloomScope](bloomscope.md)

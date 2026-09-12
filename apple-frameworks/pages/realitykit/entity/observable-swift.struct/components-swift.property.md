> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/observable-swift.struct/components-swift.property](https://developer.apple.com/documentation/realitykit/entity/observable-swift.struct/components-swift.property)

# components

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The components an entity manages, enabling observation of their presence and values.

## Declaration

```swift
var components: Entity.Observable.Components { get set }
```

<a id="discussion"></a>

## Discussion

This property provides a direct interface to the entity’s components. When you read a component through this property’s accessor, it marks that component type as accessed for observation. Observers trigger when you modify any accessed component.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitycollection](https://developer.apple.com/documentation/realitykit/entitycollection)

# EntityCollection

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

An ordered, mutable collection of entities.

## Declaration

```swift
protocol EntityCollection : Collection where Self.Element == Entity, Self.Index == Int
```

## Topics

### Instance Methods

- [append(\_:)](entitycollection/append%28__%29.md): Adds the specified entity to the end of this collection.
- [append(contentsOf:)](entitycollection/append%28contentsof_%29.md): Adds the specified sequence of entities to the end of this collection, in order.
- [insert(\_:beforeIndex:)](entitycollection/insert%28__beforeindex_%29.md): Adds the specified entity to this collection directly before the entity at the given index. If the entity is already located before the index, the collection will not change.
- [insert(contentsOf:beforeIndex:)](entitycollection/insert%28contentsof_beforeindex_%29.md): Adds the specified sequence of entities to this collection in order, directly before the entity at the given index.
- [remove(\_:)](entitycollection/remove%28__%29.md): Removes the entity from the collection.
- [remove(at:)](entitycollection/remove%28at_%29.md): Removes the entity at the given index from this collection.
- [removeAll()](entitycollection/removeall%28%29.md): Removes all entities from this collection.
- [removeAll(where:)](entitycollection/removeall%28where_%29.md): Removes all entities from this collection that satisfy the given predicate.
- [replaceAll(\_:)](entitycollection/replaceall%28__%29.md): Replaces all entities in this collection with those from the given sequence.

## Relationships

### Inherits From

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [Entity.ChildCollection](entity/childcollection.md)
- [RealityRenderer.EntityCollection](realityrenderer/entitycollection.md)
- [RealityViewEntityCollection](realityviewentitycollection.md)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.

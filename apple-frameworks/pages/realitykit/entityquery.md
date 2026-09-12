> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entityquery](https://developer.apple.com/documentation/realitykit/entityquery)

# EntityQuery

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that retrieves entities from a scene.

## Declaration

```swift
struct EntityQuery
```

## Mentioned In

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md)
- [Implementing scene understanding and reconstruction in your RealityKit app](realitykit-scene-understanding.md)

<a id="overview"></a>

## Overview

Use entity queries to iterate through all entities in a RealityKit scene that meet certain criteria. To specify which entities to retrieve, use a [QueryPredicate](querypredicate.md).

To execute the query, pass it into the scene’s [performQuery(\_:)](scene/performquery%28__%29.md) method and then iterate over the results.

```swift
// Build a query to retrieve all anchor components.
let query = EntityQuery(where: .has(AnchorComponent.self))

// Find and modify the scene's entities that have an anchor component.
scene.performQuery(query).forEach { entity in
    // Make any needed changes to entities.
}
```

## Topics

### Creating an entity query

- [init()](entityquery/init%28%29.md): Creates a query that returns all entities in a scene.
- [init(where:)](entityquery/init%28where_%29.md): Creates a query that returns all entities in a scene that match specific criteria.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Entity queries

- [QueryPredicate](querypredicate.md): An object that defines the criteria for an entity query.
- [QueryResult](queryresult.md): An object that returns the results of an entity query.

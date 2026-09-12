> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/querypredicate](https://developer.apple.com/documentation/realitykit/querypredicate)

# QueryPredicate

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An object that defines the criteria for an entity query.

## Declaration

```swift
struct QueryPredicate<Value>
```

## Mentioned In

- [Implementing systems for entities in a scene](implementing-systems-for-entities-in-a-scene.md)

<a id="overview"></a>

## Overview

Query predicates specify the entities an [EntityQuery](entityquery.md) returns from a scene. Predicates describe entities based on which components they contain, or on the entity’s relationship to other entities in the scene. For example, you can build a predicate to retrieve the model entities from a scene.

```swift
let modelPredicate = QueryPredicate.has(ModelComponent.self)
```

<a id="Create-compound-predicates"></a>

### Create compound predicates

You can combine predicates using Swift’s logical operators to create compound predicates. [QueryPredicate](querypredicate.md) supports Swift’s logical `AND` (`&&`), logical `OR` (`||`), and logical `NOT` (`!`) operators. The following code shows how to build a compound predicate that returns all entities that are either model entities or anchor entities:

```swift
let orPredicate: QueryPredicate<Entity> =
    .has(ModelComponent.self) || .has(AnchorComponent.self)
```

Use parentheses to control the order of operations when combining predicates. For example, you can create a query that returns any entity that has both a model component and a physics body component, or any entity that has only an anchor component.

```swift
let multiPredicate: QueryPredicate<Entity> =
    .has(ModelComponent.self) && .has(PhysicsBodyComponent.self) ||
    .has(AnchorComponent.self)
```

## Topics

### Creating predicates

- [has(\_:)](querypredicate/has%28__%29.md): Creates a new predicate that describes entities that have a specific component.

### Comparing predicates

- [!(\_:)](!%28__%29.md): Returns a predicate which evaluates to `true` if `operand` evaluates to `false`.
- [&&(\_:\_:)](&&%28____%29.md): Returns a predicate which evaluates to `true` if `left` AND `right` evaluate to `true`.
- [||(\_:\_:)](__%28____%29.md): Returns a predicate which evaluates to `true` if `left` OR `right` evaluates to `true`.

## See Also

### Entity searches

- [PixelCastHit](pixelcasthit.md)

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/querypredicate/has(_:)

# has(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a new predicate that describes entities that have a specific component.

## Declaration

```swift
static func has<T>(_ t: T.Type) -> QueryPredicate<Entity> where T : Component
```

## Parameters

- `t`: The type of component.

<a id="return-value"></a>

## Return Value

A predicate that describes entities with a specified component.

<a id="discussion"></a>

## Discussion

To create a `has` predicate, pass the component class’s `self` property.

```swift
let myPredicate = QueryPredicate.has(ModelComponent.self)
```

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/componentset](https://developer.apple.com/documentation/realitykit/entity/componentset)

# Entity.ComponentSet

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A collection of components that an entity stores.

## Declaration

```swift
@MainActor @preconcurrency struct ComponentSet
```

<a id="overview"></a>

## Overview

A `ComponentSet` represents all the components that an entity holds. Use this set to add, remove, and update components on an entity. This set can hold one component of each type.

Access the `ComponentSet` of an [Entity](../entity.md) using its [components](components.md) property.

`ComponentSet` conforms to [Sequence](https://developer.apple.com/documentation/swift/sequence), allowing you to iterate over it to access and use each component, as the example below shows:

```swift
for component in entity.components {
    print(component)
}
```

## Topics

### Updating the set

- [set(\_:)](componentset/set%28__%29-8sii2.md): Adds a new component to the set, or overrides an existing one.
- [set(\_:)](componentset/set%28__%29-2qzsc.md): Adds multiple components to the set, overriding any existing components of the same type.
- [remove(\_:)](componentset/remove%28__%29.md): Removes the component of the specified type from the collection.
- [removeAll()](componentset/removeall%28%29.md): Removes all components from the collection.

### Accessing members

- [subscript(\_:)](componentset/subscript%28__%29-5wdsf.md): Gets or sets the component of the specified type.
- [subscript(\_:)](componentset/subscript%28__%29-47rhg.md): Gets or sets the component with a specific dynamically supplied type.

### Checking for membership

- [has(\_:)](componentset/has%28__%29.md): Returns a Boolean value that indicates whether the set contains a component of the given type.

### Accessing components

- [subscript(componentType:)](componentset/subscript%28componenttype_%29-8y2jv.md): Gets or sets the component of the specified type.
- [subscript(\_:\_:)](componentset/subscript%28____%29-404se.md): Gets or sets the component of the specified type.

### Accessing animatable components

- [subscript(componentType:)](componentset/subscript%28componenttype_%29-3miek.md)
- [subscript(\_:\_:)](componentset/subscript%28____%29-b2gl.md)
- [subscript(withoutAnimation:)](componentset/subscript%28withoutanimation_%29.md): Gets or sets the component of the specified type, without considering implicit animations.

### Setting components by name

- [set(qualifiedComponentName:representation:)](componentset/set%28qualifiedcomponentname_representation_%29.md): Adds component data to an entity that is written to a Reality file but has no other effect at author time.

### Instance Properties

- [count](componentset/count.md): The number of components in the collection.
- [entity](componentset/entity.md)

### Instance Methods

- [set(\_:)](componentset/set%28__%29.md): Adds multiple components to the set, overriding any existing components of the same type.

### Subscripts

- [subscript(\_:)](componentset/subscript%28__%29.md): Gets or sets the component with a specific dynamically supplied type.
- [subscript(\_:\_:)](componentset/subscript%28____%29.md): Gets or sets the component of the specified type.
- [subscript(componentType:)](componentset/subscript%28componenttype_%29.md): Gets or sets the component of the specified type.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Managing components

- [components](components.md): All the components that an entity stores.

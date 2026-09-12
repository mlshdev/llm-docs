> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/transientcomponent](https://developer.apple.com/documentation/realitykit/transientcomponent)

# TransientComponent

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An interface for components that aren’t saved to file or cloned.

## Declaration

```swift
protocol TransientComponent : Component
```

<a id="overview"></a>

## Overview

Components that conform to the [TransientComponent](transientcomponent.md) protocol aren’t included when RealityKit serializes its owning entity to save it to a file. Similarly, when you clone an entity, any transient components on that entity aren’t copied to the clone.

To ensure that cloned entities, or entities saved to file get a copy of the transient component with default values, create and initialize the component in your entity’s `init()` method:

```swift
class MyEntity: Entity {
    required init() {
        let newComponent = MyComponent()
        components[MyComponent.self] = newComponent
        return newComponent
    }
}
```

Alternatively, you can create a computed property for your component that initializes it to default values the first time your code accesses it.

```swift
class MyEntity: Entity {
    var myComponent: MyComponent {
        // If the component exists, return it.
        if let component = components[MyComponent.self] {
            return component
        }

        // Create a new component and return it.
        components[MyComponent.self] = MyComponent()
        return newComponent
    }
}
```

Use transient components to represent runtime state for an entity. For example, an entity representing a fish in a virtual aquarium might store attributes such as hunger in a transient component.

In networked AR experiences, RealityKit sends transient components to peers when it sends the entity, if the component also conforms to [Codable](https://developer.apple.com/documentation/swift/codable). If transient components don’t conform, ReaityKit still sends the entity to network peers, but it excludes the transient component.

## Relationships

### Inherits From

- [Component](component.md)

### Conforming Types

- [ARKitAnchorComponent](arkitanchorcomponent.md)
- [ComputeGraphOutputComponent](computegraphoutputcomponent.md)
- [ComputeGraphRuntimeComponent](computegraphruntimecomponent.md)
- [ComputeGraphSharedUniforms](computegraphshareduniforms.md)
- [ComputeGraphViewpointComponent](computegraphviewpointcomponent.md)
- [PresentationComponent](presentationcomponent.md)
- [ViewAttachmentComponent](viewattachmentcomponent.md)

## See Also

### Multipeer synchronization

- [Loading remote assets in multiplayer apps](loading-remote-assets.md): Ensure assets load on all connected peers before using them.
- [MultipeerConnectivityService](multipeerconnectivityservice.md): A service that provides scene synchronization among all peers in a multipeer connectivity session.
- [NetworkCompatibilityToken](networkcompatibilitytoken.md): An opaque token used to check the networking compatibility between two peers in a multipeer connection.
- [NetworkCompatibilityToken.Compatibility](networkcompatibilitytoken/compatibility.md): Indicates whether two devices running RealityKit are compatible and able to connect and sync scenes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponent/entity](https://developer.apple.com/documentation/gameplaykit/gkcomponent/entity)

# entity (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The entity that owns this component.

## Declaration

```swift
weak var entity: GKEntity? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property in a component subclass to refer back to the owning entity and its attributes. An entity may be an instance either of the [GKEntity](../gkentity.md) class or of a custom subclass. In the latter case, a custom entity class can provide storage for state or resources accessed by multiple components.

## See Also

### Working with Entities

- [didAddToEntity()](didaddtoentity%28%29.md): Notifies the component that it has been assigned to an entity.
- [willRemoveFromEntity()](willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

# entity (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The entity that owns this component.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) GKEntity * entity;
```

<a id="Discussion"></a>

## Discussion

Use this property in a component subclass to refer back to the owning entity and its attributes. An entity may be an instance either of the [GKEntity](../gkentity.md) class or of a custom subclass. In the latter case, a custom entity class can provide storage for state or resources accessed by multiple components.

## See Also

### Working with Entities

- [didAddToEntity](didaddtoentity%28%29.md): Notifies the component that it has been assigned to an entity.
- [willRemoveFromEntity](willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

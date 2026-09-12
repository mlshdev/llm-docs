> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkcomponent/didaddtoentity()](https://developer.apple.com/documentation/gameplaykit/gkcomponent/didaddtoentity())

# didAddToEntity() (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Notifies the component that it has been assigned to an entity.

## Declaration

```swift
func didAddToEntity()
```

<a id="Discussion"></a>

## Discussion

Override this method in a component subclass if you need to perform game logic when the component is added to an entity. For example, if one component’s behavior depends on the presence of other components in the same entity, you can examine the entity’s [components](../gkentity/components.md) array in this method and take action accordingly.

## See Also

### Working with Entities

- [entity](entity.md): The entity that owns this component.
- [willRemoveFromEntity()](willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

# didAddToEntity (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Notifies the component that it has been assigned to an entity.

## Declaration

```objectivec
- (void) didAddToEntity;
```

<a id="Discussion"></a>

## Discussion

Override this method in a component subclass if you need to perform game logic when the component is added to an entity. For example, if one component’s behavior depends on the presence of other components in the same entity, you can examine the entity’s [components](../gkentity/components.md) array in this method and take action accordingly.

## See Also

### Working with Entities

- [entity](entity.md): The entity that owns this component.
- [willRemoveFromEntity](willremovefromentity%28%29.md): Notifies the component that it has been removed from an entity.

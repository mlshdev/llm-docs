> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionentityresolution](https://developer.apple.com/documentation/realitykit/actionentityresolution)

# ActionEntityResolution

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Options available to determine the resolution method for a target entity in an action.

## Declaration

```swift
enum ActionEntityResolution
```

<a id="overview"></a>

## Overview

Use this to resolve the entity an action should target. For example, [ImpulseAction](impulseaction.md) structure accepts this enumeration as an initializer argument to resolve the entity.

## Topics

### Operators

- [==(\_:\_:)](actionentityresolution/==%28____%29.md): Indicates whether two action entity resolutions are equal.

### Enumeration Cases

- [ActionEntityResolution.entityNamed(\_:)](actionentityresolution/entitynamed%28__%29.md): An option that resolves an entity from the specified name within the scene of the entity playing the action.
- [ActionEntityResolution.entityPath(\_:)](actionentityresolution/entitypath%28__%29.md): An option that resolves an entity by specifying a bind path relative to the entity playing the action.

### Initializers

- [init(from:)](actionentityresolution/init%28from_%29.md): Creates a new instance from a decoder.

### Instance Methods

- [encode(to:)](actionentityresolution/encode%28to_%29.md): Writes the action entity resolution data into an encoder.

### Type Properties

- [sourceEntity](actionentityresolution/sourceentity.md): Resolves to the source entity that is playing the action.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Action management

- [EntityAction](entityaction.md): A protocol that defines an action for an entity.
- [ActionAnimation](actionanimation.md): Defines an an action animation.
- [ActionHandlerProtocol](actionhandlerprotocol.md): The base protocol for action handlers.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateconfiguration](https://developer.apple.com/documentation/groupactivities/spatialtemplateconfiguration)

# SpatialTemplateConfiguration

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A type that contains the configuration details for a spatial template.

## Declaration

```swift
struct SpatialTemplateConfiguration
```

<a id="overview"></a>

## Overview

Create a [SpatialTemplateConfiguration](spatialtemplateconfiguration.md) structure and fill it with the information you want to apply to your custom [SpatialTemplate](spatialtemplate.md) type. A configuration structure contains the role to give to the person who initiates an activity that uses the template. For example, you might assign a presenter role to a person presenting a slide deck. Spatial templates use roles to place spatial Personas in the shared coordinate space.

## Topics

### Operators

- [==(\_:\_:)](spatialtemplateconfiguration/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Initializers

- [init(defaultInitiatorRole:)](spatialtemplateconfiguration/init%28defaultinitiatorrole_%29.md): Creates the configuration structure for a spatial template.

### Instance Properties

- [defaultInitiatorRole](spatialtemplateconfiguration/defaultinitiatorrole.md): The default role to assign to the initiator of the group activity.

### Instance Methods

- [hash(into:)](spatialtemplateconfiguration/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the spatial template

- [configuration](spatialtemplate/configuration.md): Information a spatial template uses to configure itself.

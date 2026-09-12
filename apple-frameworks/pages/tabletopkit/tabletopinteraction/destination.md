> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/destination](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/destination)

# TabletopInteraction.Destination

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the destination position and orientation of equipment in an interaction.

## Declaration

```swift
struct Destination
```

<a id="overview"></a>

## Overview

The position and orientation can be relative to either a piece of equipment or the table.

## Topics

### Getting the destination equipment

- [equipmentID](destination/equipmentid.md): The interaction’s destination equipment.

### Getting the interaction pose

- [pose](destination/pose.md): The 2D position and orientation of the interaction.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the interaction destination

- [setConfiguration(\_:)](setconfiguration%28__%29.md): Sets the configuration of this interaction.
- [TabletopInteraction.Configuration](configuration.md)
- [TabletopInteraction.AllowedDestinations](alloweddestinations.md): The possible destinations of equipment in an interaction.
- [setAllowedDestinations(\_:)](setalloweddestinations%28__%29.md): Deprecated. Sets which equipment the interaction can target.

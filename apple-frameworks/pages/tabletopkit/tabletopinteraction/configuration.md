> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/configuration](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/configuration)

# TabletopInteraction.Configuration

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.2+

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init()](configuration/init%28%29.md)
- [init(allowedDestinations:)](configuration/init%28alloweddestinations_%29.md)
- [init(allowedDestinations:hoverAlignment:)](configuration/init%28alloweddestinations_hoveralignment_%29.md)

### Getting the allowed destinations

- [allowedDestinations](configuration/alloweddestinations.md): The set of equipment that are allowed to be proposed as potential parents of the one being controlled.

### Getting the hover alignment

- [hoverAlignment](configuration/hoveralignment.md): Hover alignment describes how the equipment should behave when hovering a target.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the interaction destination

- [setConfiguration(\_:)](setconfiguration%28__%29.md): Sets the configuration of this interaction.
- [TabletopInteraction.AllowedDestinations](alloweddestinations.md): The possible destinations of equipment in an interaction.
- [TabletopInteraction.Destination](destination.md): An object that represents the destination position and orientation of equipment in an interaction.
- [setAllowedDestinations(\_:)](setalloweddestinations%28__%29.md): Deprecated. Sets which equipment the interaction can target.

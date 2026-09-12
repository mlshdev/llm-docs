> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopinteraction/alloweddestinations](https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/alloweddestinations)

# TabletopInteraction.AllowedDestinations

**Framework:** TabletopKit  
**Kind:** Enumeration  
**Availability:** visionOS 2.0+

The possible destinations of equipment in an interaction.

## Declaration

```swift
enum AllowedDestinations
```

## Topics

### Destinations

- [TabletopInteraction.AllowedDestinations.any](alloweddestinations/any.md): Any equipment is allowed to be the proposed destination
- [TabletopInteraction.AllowedDestinations.restricted(\_:)](alloweddestinations/restricted%28__%29.md): Restricts the proposed destination to the given identifiers

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the interaction destination

- [setConfiguration(\_:)](setconfiguration%28__%29.md): Sets the configuration of this interaction.
- [TabletopInteraction.Configuration](configuration.md)
- [TabletopInteraction.Destination](destination.md): An object that represents the destination position and orientation of equipment in an interaction.
- [setAllowedDestinations(\_:)](setalloweddestinations%28__%29.md): Deprecated. Sets which equipment the interaction can target.

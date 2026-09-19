> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopinteraction/setalloweddestinations(_:)

# setAllowedDestinations(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+ (deprecated in 2.2)

Sets which equipment the interaction can target.

## Declaration

```swift
func setAllowedDestinations(_ destination: TabletopInteraction.AllowedDestinations)
```

## See Also

### Managing the interaction destination

- [setConfiguration(\_:)](setconfiguration%28__%29.md): Sets the configuration of this interaction.
- [TabletopInteraction.Configuration](configuration.md)
- [TabletopInteraction.AllowedDestinations](alloweddestinations.md): The possible destinations of equipment in an interaction.
- [TabletopInteraction.Destination](destination.md): An object that represents the destination position and orientation of equipment in an interaction.

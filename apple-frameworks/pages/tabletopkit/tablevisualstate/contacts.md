> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tablevisualstate/contacts

# contacts

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

Returns all contacts for the current update of the physics simulation.

## Declaration

```swift
var contacts: some Sequence<TableVisualState.Contact> { get }
```

## See Also

### Representing collision states

- [contacts(of:)](contacts%28of_%29.md): Returns all contacts for the current update of the physics simulation for a specified equipment type.
- [TableVisualState.Contact](contact.md): An object that represents the contact of a collision during a simulation of tossable equipment.

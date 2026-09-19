> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tablevisualstate/contacts(of:)

# contacts(of:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns all contacts for the current update of the physics simulation for a specified equipment type.

## Declaration

```swift
func contacts<E>(of type: E.Type) -> some Sequence<TableVisualState.Contact> where E : Equipment

```

## See Also

### Representing collision states

- [contacts](contacts.md): Returns all contacts for the current update of the physics simulation.
- [TableVisualState.Contact](contact.md): An object that represents the contact of a collision during a simulation of tossable equipment.

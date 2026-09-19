> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentcollection/subscript(of:)

# subscript(of:)

**Framework:** TabletopKit  
**Kind:** Instance Subscript  
**Availability:** visionOS 26.0+

Returns the identifiers and corresponding states of all equipment that conform to the given type.

## Declaration

```swift
subscript<E>(of type: E.Type) -> [(identifier: EquipmentIdentifier, state: E.State)] where E : Equipment { get }
```

## Parameters

- `type`: All returned equipment identifiers and states correspond to equipment of this given type.

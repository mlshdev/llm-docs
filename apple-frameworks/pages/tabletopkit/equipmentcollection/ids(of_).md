> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentcollection/ids(of:)

# ids(of:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the identifiers of all equipment that conform to the given type.

## Declaration

```swift
func ids(of type: (some Equipment).Type) -> [EquipmentIdentifier]
```

## Parameters

- `type`: All returned equipment identifiers correspond to equipment of this given type.

## See Also

### Retrieving equipment identifiers

- [ids(childrenOf:)](ids%28childrenof_%29.md): Returns the identifiers of all equipment that are children of the given equipment identifier.
- [ids(descendantsOf:)](ids%28descendantsof_%29.md): Returns the identifiers of all equipment that are descendants of the given equipment identifier.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/equipmentcollection/ids(childrenof:)

# ids(childrenOf:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Returns the identifiers of all equipment that are children of the given equipment identifier.

## Declaration

```swift
func ids(childrenOf parentID: EquipmentIdentifier) -> [EquipmentIdentifier]
```

## Parameters

- `parentID`: The equipment identifier whose children should be returned.

## See Also

### Retrieving equipment identifiers

- [ids(descendantsOf:)](ids%28descendantsof_%29.md): Returns the identifiers of all equipment that are descendants of the given equipment identifier.
- [ids(of:)](ids%28of_%29.md): Returns the identifiers of all equipment that conform to the given type.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/equipmentcollection/ids(of:)](https://developer.apple.com/documentation/tabletopkit/equipmentcollection/ids(of:))

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

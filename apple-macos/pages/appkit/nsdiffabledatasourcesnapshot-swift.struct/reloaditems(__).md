> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/reloaditems(_:)

# reloadItems(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Reloads the data within the specified items in the snapshot.

## Declaration

```swift
mutating func reloadItems(_ identifiers: [ItemIdentifierType])
```

## Parameters

- `identifiers`: The array of identifiers corresponding to the items to reload in the snapshot.

## See Also

### Reloading Data

- [reloadSections(\_:)](reloadsections%28__%29.md): Reloads the data within the specified sections of the snapshot.

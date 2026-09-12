> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/reloadsections(withidentifiers:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/reloadsections(withidentifiers:))

# reloadSections(withIdentifiers:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Reloads the data within the specified sections of the snapshot.

## Declaration

```swift
func reloadSections(withIdentifiers sectionIdentifiers: [Any])
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to reload in the snapshot.

## See Also

### Reloading data

- [reloadItems(withIdentifiers:)](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.

# reloadSectionsWithIdentifiers: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Reloads the data within the specified sections of the snapshot.

## Declaration

```objectivec
- (void) reloadSectionsWithIdentifiers:(NSArray<id> *) sectionIdentifiers;
```

## Parameters

- `sectionIdentifiers`: The array of identifiers corresponding to the sections to reload in the snapshot.

## See Also

### Reloading data

- [reloadItemsWithIdentifiers:](reloaditems%28withidentifiers_%29.md): Reloads the data within the specified items in the snapshot.

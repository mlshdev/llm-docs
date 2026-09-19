> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportspersistentobjectids

# supportsPersistentObjectIDs (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.

## Declaration

```swift
var supportsPersistentObjectIDs: Bool { get set }
```

## See Also

### Declaring identifier capabilities

- [supports64BitObjectIDs](supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.
- [supportsDocumentID](supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

# supportsPersistentObjectIDs (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsPersistentObjectIDs;
```

## See Also

### Declaring identifier capabilities

- [supports64BitObjectIDs](supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.
- [supportsDocumentID](supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

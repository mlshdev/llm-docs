> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supports64bitobjectids](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supports64bitobjectids)

# supports64BitObjectIDs (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports 64-bit object IDs.

## Declaration

```swift
var supports64BitObjectIDs: Bool { get set }
```

## See Also

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supportsDocumentID](supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

# supports64BitObjectIDs (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports 64-bit object IDs.

## Declaration

```objectivec
@property (nonatomic) BOOL supports64BitObjectIDs;
```

## See Also

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supportsDocumentID](supportsdocumentid.md): A Boolean property that indicates whether the volume supports document IDs for document revisions.

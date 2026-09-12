> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportsdocumentid](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportsdocumentid)

# supportsDocumentID (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports document IDs for document revisions.

## Declaration

```swift
var supportsDocumentID: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A document ID is an identifier that persists across object ID changes.

## See Also

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supports64BitObjectIDs](supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.

# supportsDocumentID (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports document IDs for document revisions.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsDocumentID;
```

<a id="discussion"></a>

## Discussion

A document ID is an identifier that persists across object ID changes.

## See Also

### Declaring identifier capabilities

- [supportsPersistentObjectIDs](supportspersistentobjectids.md): A Boolean property that indicates whether the volume supports persistent object identifiers and can look up file system objects by their IDs.
- [supports64BitObjectIDs](supports64bitobjectids.md): A Boolean property that indicates whether the volume supports 64-bit object IDs.

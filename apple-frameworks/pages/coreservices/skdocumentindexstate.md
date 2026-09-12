> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skdocumentindexstate](https://developer.apple.com/documentation/coreservices/skdocumentindexstate)

# SKDocumentIndexState (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

The indexing state of a document.

## Declaration

```swift
struct SKDocumentIndexState
```

## Topics

### Constants

- [kSKDocumentStateNotIndexed](kskdocumentstatenotindexed.md): Specifies that the document is not indexed.
- [kSKDocumentStateIndexed](kskdocumentstateindexed.md): Specifies that the document is indexed.
- [kSKDocumentStateAddPending](kskdocumentstateaddpending.md): Specifies that the document is not in the index but will be added after the index is flushed or closed.
- [kSKDocumentStateDeletePending](kskdocumentstatedeletepending.md): Specifies that the document is in the index but will be deleted after the index is flushed or closed.

### Initializers

- [init(\_:)](skdocumentindexstate/1450037-init.md)
- [init(rawValue:)](skdocumentindexstate/1441863-init.md)

### Instance Properties

- [rawValue](skdocumentindexstate/1443351-rawvalue.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# SKDocumentIndexState (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

The indexing state of a document.

## Declaration

```objectivec
typedef enum SKDocumentIndexState : unsigned int {
    ...
} SKDocumentIndexState;
```

## Topics

### Constants

- [kSKDocumentStateNotIndexed](skdocumentindexstate/kskdocumentstatenotindexed.md): Specifies that the document is not indexed.
- [kSKDocumentStateIndexed](skdocumentindexstate/kskdocumentstateindexed.md): Specifies that the document is indexed.
- [kSKDocumentStateAddPending](skdocumentindexstate/kskdocumentstateaddpending.md): Specifies that the document is not in the index but will be added after the index is flushed or closed.
- [kSKDocumentStateDeletePending](skdocumentindexstate/kskdocumentstatedeletepending.md): Specifies that the document is in the index but will be deleted after the index is flushed or closed.

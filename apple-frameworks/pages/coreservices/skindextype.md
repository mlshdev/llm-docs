> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/skindextype](https://developer.apple.com/documentation/coreservices/skindextype)

# SKIndexType (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Specifies the category of an index.

## Declaration

```swift
struct SKIndexType
```

## Topics

### Constants

- [kSKIndexUnknown](kskindexunknown.md): Specifies an unknown index type.
- [kSKIndexInverted](kskindexinverted.md): Specifies an inverted index, mapping terms to documents.
- [kSKIndexVector](kskindexvector.md): Specifies a vector index, mapping documents to terms.
- [kSKIndexInvertedVector](kskindexinvertedvector.md): Specifies an index type with all the capabilities of an inverted and a vector index.

### Initializers

- [init(\_:)](skindextype/1443295-init.md)
- [init(rawValue:)](skindextype/1442314-init.md)

### Instance Properties

- [rawValue](skindextype/1450496-rawvalue.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

# SKIndexType (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

Specifies the category of an index.

## Declaration

```objectivec
typedef enum SKIndexType : unsigned int {
    ...
} SKIndexType;
```

## Topics

### Constants

- [kSKIndexUnknown](skindextype/kskindexunknown.md): Specifies an unknown index type.
- [kSKIndexInverted](skindextype/kskindexinverted.md): Specifies an inverted index, mapping terms to documents.
- [kSKIndexVector](skindextype/kskindexvector.md): Specifies a vector index, mapping documents to terms.
- [kSKIndexInvertedVector](skindextype/kskindexinvertedvector.md): Specifies an index type with all the capabilities of an inverted and a vector index.

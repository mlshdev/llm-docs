> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdocumenttypeidentifier](https://developer.apple.com/documentation/healthkit/hkdocumenttypeidentifier)

# HKDocumentTypeIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers for documents.

## Declaration

```swift
struct HKDocumentTypeIdentifier
```

<a id="overview"></a>

## Overview

To create an [HKDocumentType](hkdocumenttype.md) instance, pass an [HKDocumentTypeIdentifier](hkdocumenttypeidentifier.md) value to the [documentType(forIdentifier:)](hkobjecttype/documenttype%28foridentifier_%29.md) method.

For the complete list of quantity type identifiers, see Document Types.

## Topics

### Document Types

- [CDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.

### Initializers

- [init(rawValue:)](hkdocumenttypeidentifier/init%28rawvalue_%29.md): Returns a newly initialized document type identifier using the provided string.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating document types

- [documentType(forIdentifier:)](hkobjecttype/documenttype%28foridentifier_%29.md): Deprecated. Returns the shared document type for the provided identifier.

# HKDocumentTypeIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The identifiers for documents.

## Declaration

```objectivec
typedef NSString * HKDocumentTypeIdentifier;
```

<a id="overview"></a>

## Overview

To create an [HKDocumentType](hkdocumenttype.md) instance, pass an [HKDocumentTypeIdentifier](hkdocumenttypeidentifier.md) value to the [documentTypeForIdentifier:](hkobjecttype/documenttype%28foridentifier_%29.md) method.

For the complete list of quantity type identifiers, see Document Types.

## Topics

### Document Types

- [HKDocumentTypeIdentifierCDA](hkdocumenttypeidentifier/cda.md): The CDA Document type identifier, used when requesting permission to read or share CDA documents.

## See Also

### Creating document types

- [documentTypeForIdentifier:](hkobjecttype/documenttype%28foridentifier_%29.md): Deprecated. Returns the shared document type for the provided identifier.

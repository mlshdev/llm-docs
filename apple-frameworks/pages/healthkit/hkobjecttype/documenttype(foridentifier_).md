> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/documenttype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/documenttype(foridentifier:))

# documentType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ (deprecated in 27.0) · iPadOS 10.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

Returns the shared document type for the provided identifier.

## Declaration

```swift
class func documentType(forIdentifier identifier: HKDocumentTypeIdentifier) -> HKDocumentType?
```

## Parameters

- `identifier`: A document type identifier. For a list of valid identifiers, see [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKDocumentType](../hkdocumenttype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKQuantityType](../hkquantitytype.md) concrete subclass. HealthKit uses document types to manage medical documents. Use document type instances to create document samples that you can save in the HealthKit store. For more information, see [HKDocumentSample](../hkdocumentsample.md).

## See Also

### Creating document types

- [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md): The identifiers for documents.

# documentTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the shared document type for the provided identifier.

## Declaration

```objectivec
+ (HKDocumentType *) documentTypeForIdentifier:(HKDocumentTypeIdentifier) identifier;
```

## Parameters

- `identifier`: A document type identifier. For a list of valid identifiers, see [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared [HKDocumentType](../hkdocumenttype.md) instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKQuantityType](../hkquantitytype.md) concrete subclass. HealthKit uses document types to manage medical documents. Use document type instances to create document samples that you can save in the HealthKit store. For more information, see [HKDocumentSample](../hkdocumentsample.md).

## See Also

### Creating document types

- [HKDocumentTypeIdentifier](../hkdocumenttypeidentifier.md): The identifiers for documents.

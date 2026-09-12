> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdocumentquery](https://developer.apple.com/documentation/healthkit/hkdocumentquery)

# HKDocumentQuery (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

## Declaration

```swift
class HKDocumentQuery
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use an `HKDocumentQuery` object to search for documents in the HealthKit store. You can provide a predicate to filter the search results, a sort order for the returned samples, or even a limit to the number of samples returned.

Document queries are immutable: The query’s properties are set when the query is first created. They cannot change.

<a id="Executing-Queries"></a>

### Executing Queries

To create and execute a query, perform the following steps:

1. Create the document type by calling the [HKObjectType](hkobjecttype.md) class’s [documentType(forIdentifier:)](hkobjecttype/documenttype%28foridentifier_%29.md) method.
2. (optionally) Create an [NSPredicate](../foundation/nspredicate.md) object to filter the search results.
3. (optionally) Create an array of [NSSortDescriptor](../foundation/nssortdescriptor.md) objects to provide the sort order for the results.
4. Instantiate a new query by calling the [init(documentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:)](hkdocumentquery/init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md) method.
5. In the results handler, handle any errors and process the results.

Note, the query returns the results in batches and may call the results handler more than once. If the `done` parameter is set to [false](https://developer.apple.com/documentation/swift/false), the query is still active and will call the results handler with additional results. If the `done` parameter is set to [true](https://developer.apple.com/documentation/swift/true), the query is complete.

```swift
guard let cdaType = HKObjectType.documentType(forIdentifier: .CDA) else {
    fatalError("Unable to create a CDA document type.")
}
 
var allDocuments = [HKDocumentSample]()
let cdaQuery = HKDocumentQuery(documentType: cdaType,
                               predicate: nil,
                               limit: HKObjectQueryNoLimit,
                               sortDescriptors: nil,
                               includeDocumentData: false) {
                                
                                (query, resultsOrNil, done, errorOrNil) in
                                
                                guard let results = resultsOrNil else {
                                    if let queryError = errorOrNil {
                                        // Handle the query error here...
                                    }
                                    
                                    return
                                }
                                
                                allDocuments += results
                                
                                if done {
                                    // the allDocuments array now contains all the samples returned by the query.
                                    // Handle the documents here...
                                }
}
```

<a id="Subclassing-Document-Queries"></a>

### Subclassing Document Queries

As with many HealthKit classes, don’t subclass the [HKDocumentQuery](hkdocumentquery.md) class.

## Topics

### Creating Document Queries

- [init(documentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:)](hkdocumentquery/init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md): Instantiates and returns a document query.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.

### Accessing the Document Query’s Properties

- [includeDocumentData](hkdocumentquery/includedocumentdata.md): A Boolean value that indicates whether the sample includes the full document’s data.
- [limit](hkdocumentquery/limit.md): The maximum number of documents the receiver will return upon completion.
- [sortDescriptors](hkdocumentquery/sortdescriptors.md): An array of sort descriptors that specify the order of the results returned by this query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQueryDescriptor](hkverifiableclinicalrecordquerydescriptor.md): A query interface that provides one-time access to a SMART Health Card or EU Digital COVID Certificate using Swift concurrency.
- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.

# HKDocumentQuery (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

A query that returns a snapshot of all matching documents currently saved in the HealthKit store.

## Declaration

```objectivec
@interface HKDocumentQuery : HKQuery
```

## Mentioned In

- [Reading data from HealthKit](reading-data-from-healthkit.md)

<a id="overview"></a>

## Overview

Use an `HKDocumentQuery` object to search for documents in the HealthKit store. You can provide a predicate to filter the search results, a sort order for the returned samples, or even a limit to the number of samples returned.

Document queries are immutable: The query’s properties are set when the query is first created. They cannot change.

<a id="Executing-Queries"></a>

### Executing Queries

To create and execute a query, perform the following steps:

1. Create the document type by calling the [HKObjectType](hkobjecttype.md) class’s [documentTypeForIdentifier:](hkobjecttype/documenttype%28foridentifier_%29.md) method.
2. (optionally) Create an [NSPredicate](../foundation/nspredicate.md) object to filter the search results.
3. (optionally) Create an array of [NSSortDescriptor](../foundation/nssortdescriptor.md) objects to provide the sort order for the results.
4. Instantiate a new query by calling the [initWithDocumentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:](hkdocumentquery/init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md) method.
5. In the results handler, handle any errors and process the results.

Note, the query returns the results in batches and may call the results handler more than once. If the `done` parameter is set to [false](https://developer.apple.com/documentation/swift/false), the query is still active and will call the results handler with additional results. If the `done` parameter is set to [true](https://developer.apple.com/documentation/swift/true), the query is complete.

```swift
guard let cdaType = HKObjectType.documentType(forIdentifier: .CDA) else {
    fatalError("Unable to create a CDA document type.")
}
 
var allDocuments = [HKDocumentSample]()
let cdaQuery = HKDocumentQuery(documentType: cdaType,
                               predicate: nil,
                               limit: HKObjectQueryNoLimit,
                               sortDescriptors: nil,
                               includeDocumentData: false) {
                                
                                (query, resultsOrNil, done, errorOrNil) in
                                
                                guard let results = resultsOrNil else {
                                    if let queryError = errorOrNil {
                                        // Handle the query error here...
                                    }
                                    
                                    return
                                }
                                
                                allDocuments += results
                                
                                if done {
                                    // the allDocuments array now contains all the samples returned by the query.
                                    // Handle the documents here...
                                }
}
```

<a id="Subclassing-Document-Queries"></a>

### Subclassing Document Queries

As with many HealthKit classes, don’t subclass the [HKDocumentQuery](hkdocumentquery.md) class.

## Topics

### Creating Document Queries

- [initWithDocumentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:](hkdocumentquery/init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md): Instantiates and returns a document query.
- [HKObjectQueryNoLimit](hkobjectquerynolimit.md): A value indicating that the query returns all the matching samples in the HealthKit store.

### Accessing the Document Query’s Properties

- [includeDocumentData](hkdocumentquery/includedocumentdata.md): A Boolean value that indicates whether the sample includes the full document’s data.
- [limit](hkdocumentquery/limit.md): The maximum number of documents the receiver will return upon completion.
- [sortDescriptors](hkdocumentquery/sortdescriptors.md): An array of sort descriptors that specify the order of the results returned by this query.

## Relationships

### Inherits From

- [HKQuery](hkquery.md)

## See Also

### Clinical record queries

- [HKVerifiableClinicalRecordQuery](hkverifiableclinicalrecordquery.md): A query for one-time access to a SMART Health Card or EU Digital COVID Certificate.
- [HKVerifiableClinicalRecordSourceType](hkverifiableclinicalrecordsourcetype.md): The source type for the verifiable clinical record.
- [HKVerifiableClinicalRecordCredentialType](hkverifiableclinicalrecordcredentialtype.md): The type of record returned by a verifiable clinical record query.

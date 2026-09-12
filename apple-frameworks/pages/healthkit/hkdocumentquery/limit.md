> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdocumentquery/limit](https://developer.apple.com/documentation/healthkit/hkdocumentquery/limit)

# limit (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The maximum number of documents the receiver will return upon completion.

## Declaration

```swift
var limit: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the value passed to the [init(documentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:)](init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md) method’s `limit` parameter.

## See Also

### Accessing the Document Query’s Properties

- [includeDocumentData](includedocumentdata.md): A Boolean value that indicates whether the sample includes the full document’s data.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptors that specify the order of the results returned by this query.

# limit (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 3.0+

The maximum number of documents the receiver will return upon completion.

## Declaration

```objectivec
@property (readonly) NSUInteger limit;
```

<a id="Discussion"></a>

## Discussion

This property contains the value passed to the [initWithDocumentType:predicate:limit:sortDescriptors:includeDocumentData:resultsHandler:](init%28documenttype_predicate_limit_sortdescriptors_includedocumentdata_resultshandler_%29.md) method’s `limit` parameter.

## See Also

### Accessing the Document Query’s Properties

- [includeDocumentData](includedocumentdata.md): A Boolean value that indicates whether the sample includes the full document’s data.
- [sortDescriptors](sortdescriptors.md): An array of sort descriptors that specify the order of the results returned by this query.

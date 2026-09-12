> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument/documentdata](https://developer.apple.com/documentation/healthkit/hkcdadocument/documentdata)

# documentData (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The CDA document stored as XML data.

## Declaration

```swift
var documentData: Data? { get }
```

<a id="Discussion"></a>

## Discussion

The CDA document’s XML format is specified by the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard. .

When using an [HKDocumentQuery](../hkdocumentquery.md) object to retrieve documents from the HealthKit store, if the query’s [includeDocumentData](../hkdocumentquery/includedocumentdata.md) property is set to [false](https://developer.apple.com/documentation/swift/false), the retrieved documents will have `nil`-valued `documentData` properties.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

# documentData (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The CDA document stored as XML data.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSData * documentData;
```

<a id="Discussion"></a>

## Discussion

The CDA document’s XML format is specified by the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard. .

When using an [HKDocumentQuery](../hkdocumentquery.md) object to retrieve documents from the HealthKit store, if the query’s [includeDocumentData](../hkdocumentquery/includedocumentdata.md) property is set to [false](https://developer.apple.com/documentation/swift/false), the retrieved documents will have `nil`-valued `documentData` properties.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

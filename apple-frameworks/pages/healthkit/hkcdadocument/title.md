> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument/title](https://developer.apple.com/documentation/healthkit/hkcdadocument/title)

# title (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The document’s title.

## Declaration

```swift
var title: String { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit automatically extracts the document’s title from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.

# title (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The document’s title.

## Declaration

```objectivec
@property (copy, readonly) NSString * title;
```

<a id="Discussion"></a>

## Discussion

HealthKit automatically extracts the document’s title from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.

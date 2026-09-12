> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument/patientname](https://developer.apple.com/documentation/healthkit/hkcdadocument/patientname)

# patientName (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The patient’s name.

## Declaration

```swift
var patientName: String { get }
```

<a id="Discussion"></a>

## Discussion

HealthKit automatically extracts the patient’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [title](title.md): The document’s title.

# patientName (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The patient’s name.

## Declaration

```objectivec
@property (copy, readonly) NSString * patientName;
```

<a id="Discussion"></a>

## Discussion

HealthKit automatically extracts the patient’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [title](title.md): The document’s title.

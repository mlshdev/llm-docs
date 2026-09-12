> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument/custodianname](https://developer.apple.com/documentation/healthkit/hkcdadocument/custodianname)

# custodianName (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The name of the organization responsible for the document.

## Declaration

```swift
var custodianName: String { get }
```

<a id="Discussion"></a>

## Discussion

Usually, this is the treating institution’s name.

HealthKit automatically extracts the custodian’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

# custodianName (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The name of the organization responsible for the document.

## Declaration

```objectivec
@property (copy, readonly) NSString * custodianName;
```

<a id="Discussion"></a>

## Discussion

Usually, this is the treating institution’s name.

HealthKit automatically extracts the custodian’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [authorName](authorname.md): The document’s author.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

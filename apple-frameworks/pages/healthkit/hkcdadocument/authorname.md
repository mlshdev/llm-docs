> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument/authorname](https://developer.apple.com/documentation/healthkit/hkcdadocument/authorname)

# authorName (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The document’s author.

## Declaration

```swift
var authorName: String { get }
```

<a id="Discussion"></a>

## Discussion

Usually, this is the treating physician’s name.

HealthKit automatically extracts the author’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

# authorName (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

The document’s author.

## Declaration

```objectivec
@property (copy, readonly) NSString * authorName;
```

<a id="Discussion"></a>

## Discussion

Usually, this is the treating physician’s name.

HealthKit automatically extracts the author’s name from the CDA’s XML data.

## See Also

### Accessing the Document’s Data

- [custodianName](custodianname.md): The name of the organization responsible for the document.
- [documentData](documentdata.md): The CDA document stored as XML data.
- [patientName](patientname.md): The patient’s name.
- [title](title.md): The document’s title.

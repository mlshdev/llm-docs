> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcdadocument](https://developer.apple.com/documentation/healthkit/hkcdadocument)

# HKCDADocument (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

An object representing a Clinical Document Architecture (CDA) document in HealthKit.

## Declaration

```swift
class HKCDADocument
```

<a id="overview"></a>

## Overview

CDA documents use XML to encode clinical documents so that they can be easily exchanged. For more information on the CDA document format, see the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard.

Do not instantiate `HKCDADocument` objects directly. Instead, create a new [HKCDADocumentSample](hkcdadocumentsample.md) object by calling the  [init(data:start:end:metadata:)](hkcdadocumentsample/init%28data_start_end_metadata_%29.md) method, and passing the CDA’s XML data. HealthKit creates a `HKCDADocument` object for the XML, and assigns it to the sample’s [document](hkcdadocumentsample/document.md) property.

`HKCDADocument` objects are immutable. When you create a new document sample, HealthKit parses the title, patient name, author name, and custodian name from the XML to populates the document object’s properties. These properties cannot be changed.

As with many HealthKit classes, don’t subclass the [HKCDADocument](hkcdadocument.md) class.

## Topics

### Accessing the Document’s Data

- [authorName](hkcdadocument/authorname.md): The document’s author.
- [custodianName](hkcdadocument/custodianname.md): The name of the organization responsible for the document.
- [documentData](hkcdadocument/documentdata.md): The CDA document stored as XML data.
- [patientName](hkcdadocument/patientname.md): The patient’s name.
- [title](hkcdadocument/title.md): The document’s title.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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

### Accessing the Document

- [document](hkcdadocumentsample/document.md): The CDA document.

# HKCDADocument (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+

An object representing a Clinical Document Architecture (CDA) document in HealthKit.

## Declaration

```objectivec
@interface HKCDADocument : NSObject
```

<a id="overview"></a>

## Overview

CDA documents use XML to encode clinical documents so that they can be easily exchanged. For more information on the CDA document format, see the [Clinical Document Architecture, R2](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=7) standard.

Do not instantiate `HKCDADocument` objects directly. Instead, create a new [HKCDADocumentSample](hkcdadocumentsample.md) object by calling the  [CDADocumentSampleWithData:startDate:endDate:metadata:validationError:](hkcdadocumentsample/init%28data_start_end_metadata_%29.md) method, and passing the CDA’s XML data. HealthKit creates a `HKCDADocument` object for the XML, and assigns it to the sample’s [document](hkcdadocumentsample/document.md) property.

`HKCDADocument` objects are immutable. When you create a new document sample, HealthKit parses the title, patient name, author name, and custodian name from the XML to populates the document object’s properties. These properties cannot be changed.

As with many HealthKit classes, don’t subclass the [HKCDADocument](hkcdadocument.md) class.

## Topics

### Accessing the Document’s Data

- [authorName](hkcdadocument/authorname.md): The document’s author.
- [custodianName](hkcdadocument/custodianname.md): The name of the organization responsible for the document.
- [documentData](hkcdadocument/documentdata.md): The CDA document stored as XML data.
- [patientName](hkcdadocument/patientname.md): The patient’s name.
- [title](hkcdadocument/title.md): The document’s title.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Accessing the Document

- [document](hkcdadocumentsample/document.md): The CDA document.

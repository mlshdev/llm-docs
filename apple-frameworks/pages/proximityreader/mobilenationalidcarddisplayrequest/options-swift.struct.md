> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddisplayrequest/options-swift.struct](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddisplayrequest/options-swift.struct)

# MobileNationalIDCardDisplayRequest.Options

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

An object that customizes how to perform a display request.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

Use this object to configure the validation mode of the request.

## Topics

### Structures

- [MobileNationalIDCardDisplayRequest.Options.ValidationMode](options-swift.struct/validationmode-swift.struct.md): A type that represents the validation mode of the mobile document request.

### Initializers

- [init(validationMode:)](options-swift.struct/init%28validationmode_%29.md): Creates a mobile document reader display request options type.

### Instance Properties

- [validationMode](options-swift.struct/validationmode-swift.property.md): The validation mode of the mobile document request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the request details

- [region](region.md): The region of the document you’re requesting.
- [elements](elements.md): The document elements you’re requesting.
- [MobileNationalIDCardDisplayRequest.Element](element.md): A type that represents an element you can request from a mobile national ID card.
- [options](options-swift.property.md): An object that customizes how to perform a display request.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest/options-swift.struct](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest/options-swift.struct)

# MobileDocumentDisplayRequest.Options

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

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

- [MobileDocumentDisplayRequest.Options.DocumentType](options-swift.struct/documenttype.md): A type that represents a type of supported mobile document.
- [MobileDocumentDisplayRequest.Options.ValidationMode](options-swift.struct/validationmode-swift.struct.md): A type that represents the validation mode of the mobile document request.

### Initializers

- [init(allowedDocumentTypes:validationMode:)](options-swift.struct/init%28alloweddocumenttypes_validationmode_%29.md): Creates a mobile document reader display request options type.

### Instance Properties

- [allowedDocumentTypes](options-swift.struct/alloweddocumenttypes.md): The allowed document types of the mobile document request.
- [validationMode](options-swift.struct/validationmode-swift.property.md): The validation mode of the mobile document request.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a display request

- [options](options-swift.property.md): An object that customizes how to perform a display request.

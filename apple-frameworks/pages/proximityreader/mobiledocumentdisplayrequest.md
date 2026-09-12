> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentdisplayrequest](https://developer.apple.com/documentation/proximityreader/mobiledocumentdisplayrequest)

# MobileDocumentDisplayRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.

## Declaration

```swift
struct MobileDocumentDisplayRequest
```

## Topics

### Creating a display request

- [init(elements:options:)](mobiledocumentdisplayrequest/init%28elements_options_%29.md): Creates a new mobile document display request.
- [MobileDocumentDisplayRequest.Element](mobiledocumentdisplayrequest/element.md): A type that represents an element you can request from a mobile document.

### Configuring a display request

- [MobileDocumentDisplayRequest.Options](mobiledocumentdisplayrequest/options-swift.struct.md): An object that customizes how to perform a display request.
- [options](mobiledocumentdisplayrequest/options-swift.property.md): An object that customizes how to perform a display request.

### Handling the response

- [MobileDocumentDisplayRequest.Response](mobiledocumentdisplayrequest/response.md): A type that contains the response information from a successful mobile document display request.

### Instance Properties

- [elements](mobiledocumentdisplayrequest/elements.md): The document elements you’re requesting.

### Default Implementations

- [MobileDocumentRequest Implementations](mobiledocumentdisplayrequest/mobiledocumentrequest-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MobileDocumentRequest](mobiledocumentrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mobile document requests

- [MobileDriversLicenseDisplayRequest](mobiledriverslicensedisplayrequest.md): A mobile driver’s license request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDriversLicenseDataRequest](mobiledriverslicensedatarequest.md): A mobile driver’s license request that retrieves elements from the holder and returns the validated document elements.
- [MobileDriversLicenseRawDataRequest](mobiledriverslicenserawdatarequest.md): A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
- [MobileNationalIDCardRawDataRequest](mobilenationalidcardrawdatarequest.md): A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentRequest](mobiledocumentrequest.md): A type that represents a mobile document request.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md): A photo ID request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md): A type that describes a raw data request for any mobile document from a group of requests.

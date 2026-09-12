> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledriverslicenserawdatarequest](https://developer.apple.com/documentation/proximityreader/mobiledriverslicenserawdatarequest)

# MobileDriversLicenseRawDataRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.

## Declaration

```swift
struct MobileDriversLicenseRawDataRequest
```

## Topics

### Creating a raw data request

- [init(retainedElements:nonRetainedElements:)](mobiledriverslicenserawdatarequest/init%28retainedelements_nonretainedelements_%29.md): Returns a mobile driver’s license raw data request.
- [retainedElements](mobiledriverslicenserawdatarequest/retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](mobiledriverslicenserawdatarequest/nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [MobileDriversLicenseRawDataRequest.Element](mobiledriverslicenserawdatarequest/element.md): A type representing an element that you can request from a mobile driver’s license.

### Handling the response

- [MobileDriversLicenseRawDataRequest.Response](mobiledriverslicenserawdatarequest/response.md): A type that contains the response information from a successful mobile driver’s license raw data request.

### Initializers

- [init(retainedElements:nonRetainedElements:issuerIdentifiers:)](mobiledriverslicenserawdatarequest/init%28retainedelements_nonretainedelements_issueridentifiers_%29.md): Returns a mobile driver’s license raw data request with issuer identifiers.

### Instance Properties

- [issuerIdentifiers](mobiledriverslicenserawdatarequest/issueridentifiers.md): The subject key identifiers of the issuers trusted by the reader.

### Default Implementations

- [MobileDocumentRequest Implementations](mobiledriverslicenserawdatarequest/mobiledocumentrequest-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md)
- [MobileDocumentRequest](mobiledocumentrequest.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mobile document requests

- [MobileDriversLicenseDisplayRequest](mobiledriverslicensedisplayrequest.md): A mobile driver’s license request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDriversLicenseDataRequest](mobiledriverslicensedatarequest.md): A mobile driver’s license request that retrieves elements from the holder and returns the validated document elements.
- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
- [MobileNationalIDCardRawDataRequest](mobilenationalidcardrawdatarequest.md): A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md): A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDocumentRequest](mobiledocumentrequest.md): A type that represents a mobile document request.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md): A photo ID request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md): A type that describes a raw data request for any mobile document from a group of requests.

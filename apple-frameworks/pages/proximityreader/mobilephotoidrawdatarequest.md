> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilephotoidrawdatarequest](https://developer.apple.com/documentation/proximityreader/mobilephotoidrawdatarequest)

# MobilePhotoIDRawDataRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A photo ID request which retrieves elements from the holder and returns the raw response data for processing.

## Declaration

```swift
struct MobilePhotoIDRawDataRequest
```

## Topics

### Creating a raw data request

- [init(retainedElements:nonRetainedElements:)](mobilephotoidrawdatarequest/init%28retainedelements_nonretainedelements_%29.md): Returns a photo ID raw data request.
- [MobilePhotoIDRawDataRequest.Element](mobilephotoidrawdatarequest/element.md): A type representing an element that you can request from a photo ID.
- [nonRetainedElements](mobilephotoidrawdatarequest/nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [retainedElements](mobilephotoidrawdatarequest/retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.

### Handling the response

- [MobilePhotoIDRawDataRequest.Response](mobilephotoidrawdatarequest/response.md): A type that contains the response information from a successful photo ID raw data request.

### Initializers

- [init(retainedElements:nonRetainedElements:issuerIdentifiers:)](mobilephotoidrawdatarequest/init%28retainedelements_nonretainedelements_issueridentifiers_%29.md): Returns a photo ID raw data request with issuer identifiers.

### Instance Properties

- [issuerIdentifiers](mobilephotoidrawdatarequest/issueridentifiers.md): The subject key identifiers of the issuers trusted by the reader.

### Default Implementations

- [MobileDocumentRequest Implementations](mobilephotoidrawdatarequest/mobiledocumentrequest-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md)
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
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md): A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDocumentRequest](mobiledocumentrequest.md): A type that represents a mobile document request.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md): A type that describes a raw data request for any mobile document from a group of requests.

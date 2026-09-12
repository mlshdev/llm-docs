> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcardrawdatarequest](https://developer.apple.com/documentation/proximityreader/mobilenationalidcardrawdatarequest)

# MobileNationalIDCardRawDataRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.

## Declaration

```swift
struct MobileNationalIDCardRawDataRequest
```

## Topics

### Creating a raw data request

- [init(region:retainedElements:nonRetainedElements:)](mobilenationalidcardrawdatarequest/init%28region_retainedelements_nonretainedelements_%29.md): Creates a mobile national ID card raw data request.

### Determining the region availability

- [isSupportedRegion(\_:)](mobilenationalidcardrawdatarequest/issupportedregion%28__%29.md): Returns a Boolean value that indicates whether you can make a request for the specified region.

### Configuring the request details

- [region](mobilenationalidcardrawdatarequest/region.md): The region of the document you’re requesting.
- [retainedElements](mobilenationalidcardrawdatarequest/retainedelements.md): The document elements you’re requesting and intend to retain for an indefinite period of time.
- [nonRetainedElements](mobilenationalidcardrawdatarequest/nonretainedelements.md): The document elements you’re requesting and intend to retain no longer than is necessary to process the result in realtime.
- [MobileNationalIDCardRawDataRequest.Element](mobilenationalidcardrawdatarequest/element.md): A type representing an element that you can request from a mobile national ID card.

### Handling the response

- [MobileNationalIDCardRawDataRequest.Response](mobilenationalidcardrawdatarequest/response.md): A type that contains the response information from a successful mobile national ID card raw data request.

### Initializers

- [init(region:retainedElements:nonRetainedElements:issuerIdentifiers:)](mobilenationalidcardrawdatarequest/init%28region_retainedelements_nonretainedelements_issueridentifiers_%29.md): Creates a mobile national ID card raw data request with issuer identifiers.

### Instance Properties

- [issuerIdentifiers](mobilenationalidcardrawdatarequest/issueridentifiers.md): The subject key identifiers of the issuers trusted by the reader.

### Default Implementations

- [MobileDocumentRequest Implementations](mobilenationalidcardrawdatarequest/mobiledocumentrequest-implementations.md)

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
- [MobileDriversLicenseRawDataRequest](mobiledriverslicenserawdatarequest.md): A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md): A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDocumentRequest](mobiledocumentrequest.md): A type that represents a mobile document request.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md): A photo ID request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md): A type that describes a raw data request for any mobile document from a group of requests.

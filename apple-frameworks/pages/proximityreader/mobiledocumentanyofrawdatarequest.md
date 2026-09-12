> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentanyofrawdatarequest](https://developer.apple.com/documentation/proximityreader/mobiledocumentanyofrawdatarequest)

# MobileDocumentAnyOfRawDataRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A type that describes a raw data request for any mobile document from a group of requests.

## Declaration

```swift
struct MobileDocumentAnyOfRawDataRequest
```

## Topics

### Initializing a raw data request

- [init()](mobiledocumentanyofrawdatarequest/init%28%29.md): Returns a composite mobile document raw data request.
- [addRequest(\_:)](mobiledocumentanyofrawdatarequest/addrequest%28__%29.md): Adds the request as a candidate of this composite request.

### Handling the response

- [MobileDocumentAnyOfRawDataRequest.Response](mobiledocumentanyofrawdatarequest/response.md): A type that contains the response information from a successful raw data request.

### Default Implementations

- [MobileDocumentRequest Implementations](mobiledocumentanyofrawdatarequest/mobiledocumentrequest-implementations.md)

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
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md): A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDocumentRequest](mobiledocumentrequest.md): A type that represents a mobile document request.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md): A photo ID request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.

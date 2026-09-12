> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobilenationalidcarddisplayrequest](https://developer.apple.com/documentation/proximityreader/mobilenationalidcarddisplayrequest)

# MobileNationalIDCardDisplayRequest

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.

## Declaration

```swift
struct MobileNationalIDCardDisplayRequest
```

## Topics

### Creating a display request

- [init(region:elements:options:)](mobilenationalidcarddisplayrequest/init%28region_elements_options_%29.md): Creates a new mobile national ID card display request.

### Determining the region availability

- [isSupportedRegion(\_:)](mobilenationalidcarddisplayrequest/issupportedregion%28__%29.md): Returns a Boolean value that indicates whether you can make a request for the specified region.

### Configuring the request details

- [region](mobilenationalidcarddisplayrequest/region.md): The region of the document you’re requesting.
- [elements](mobilenationalidcarddisplayrequest/elements.md): The document elements you’re requesting.
- [MobileNationalIDCardDisplayRequest.Element](mobilenationalidcarddisplayrequest/element.md): A type that represents an element you can request from a mobile national ID card.
- [options](mobilenationalidcarddisplayrequest/options-swift.property.md): An object that customizes how to perform a display request.
- [MobileNationalIDCardDisplayRequest.Options](mobilenationalidcarddisplayrequest/options-swift.struct.md): An object that customizes how to perform a display request.

### Handling the response

- [MobileNationalIDCardDisplayRequest.Response](mobilenationalidcarddisplayrequest/response.md): A type that contains the response information from a successful mobile national ID card display request.

### Default Implementations

- [MobileDocumentRequest Implementations](mobilenationalidcarddisplayrequest/mobiledocumentrequest-implementations.md)

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

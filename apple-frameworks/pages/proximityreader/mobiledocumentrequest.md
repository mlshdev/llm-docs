> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentrequest](https://developer.apple.com/documentation/proximityreader/mobiledocumentrequest)

# MobileDocumentRequest

**Framework:** ProximityReader  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

A type that represents a mobile document request.

## Declaration

```swift
protocol MobileDocumentRequest : Hashable, Sendable
```

## Mentioned In

- [Adopting the Verifier API in your iPhone app](adopting-the-verifier-api-in-your-iphone-app.md)

## Topics

### Mobile driver’s license display request

- [MobileDriversLicenseDisplayRequest](mobiledriverslicensedisplayrequest.md): A mobile driver’s license request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [displayDriversLicense(\_:options:)](mobiledocumentrequest/displaydriverslicense%28__options_%29.md): Conforms when `Self` is `MobileDriversLicenseDisplayRequest`. A request that displays driver’s license elements onscreen.

### Mobile driver’s license data request

- [MobileDriversLicenseDataRequest](mobiledriverslicensedatarequest.md): A mobile driver’s license request that retrieves elements from the holder and returns the validated document elements.
- [driversLicenseData(retaining:notRetaining:)](mobiledocumentrequest/driverslicensedata%28retaining_notretaining_%29.md): Conforms when `Self` is `MobileDriversLicenseDataRequest`. A request which retrieves elements from the holder and returns the validated document elements.

### Mobile driver’s license raw data request

- [MobileDriversLicenseRawDataRequest](mobiledriverslicenserawdatarequest.md): A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.
- [driversLicenseRawData(retaining:notRetaining:)](mobiledocumentrequest/driverslicenserawdata%28retaining_notretaining_%29.md): Conforms when `Self` is `MobileDriversLicenseRawDataRequest`. A request which retrieves mobile driver’s license elements from the holder and returns the raw response data for processing.

### National ID card display request

- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [nationalIDCard(region:\_:options:)](mobiledocumentrequest/nationalidcard%28region___options_%29.md): Conforms when `Self` is `MobileNationalIDCardDisplayRequest`. A request that displays national ID card elements onscreen.

### National ID card license data request

- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
- [nationalIDCardData(region:retaining:notRetaining:)](mobiledocumentrequest/nationalidcarddata%28region_retaining_notretaining_%29.md): Conforms when `Self` is `MobileNationalIDCardDataRequest`. A request which retrieves elements from the holder and returns the validated document elements.

### National ID card license raw data request

- [MobileNationalIDCardRawDataRequest](mobilenationalidcardrawdatarequest.md): A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.
- [nationalIDCardRawData(region:retaining:notRetaining:)](mobiledocumentrequest/nationalidcardrawdata%28region_retaining_notretaining_%29.md): Conforms when `Self` is `MobileNationalIDCardRawDataRequest`. A request which retrieves mobile national ID card elements from the holder and returns the raw response data for processing.

### Associated Types

- [Response](mobiledocumentrequest/response.md): A type that represents the response type of the request.

### Type Methods

- [displayDocument(\_:options:)](mobiledocumentrequest/displaydocument%28__options_%29.md): Conforms when `Self` is `MobileDocumentDisplayRequest`. A request that displays document elements onscreen.
- [driversLicenseRawData(retaining:notRetaining:issuerIdentifiers:)](mobiledocumentrequest/driverslicenserawdata%28retaining_notretaining_issueridentifiers_%29.md): Conforms when `Self` is `MobileDriversLicenseRawDataRequest`. A request which retrieves mobile driver’s license elements from the holder and returns the raw response data for processing.
- [nationalIDCardRawData(region:retaining:notRetaining:issuerIdentifiers:)](mobiledocumentrequest/nationalidcardrawdata%28region_retaining_notretaining_issueridentifiers_%29.md): Conforms when `Self` is `MobileNationalIDCardRawDataRequest`. A request which retrieves mobile national ID card elements from the holder and returns the raw response data for processing.
- [photoIDData(retaining:notRetaining:)](mobiledocumentrequest/photoiddata%28retaining_notretaining_%29.md): Conforms when `Self` is `MobilePhotoIDDataRequest`. A request which retrieves elements from the holder and returns the validated document elements.
- [photoIDRawData(retaining:notRetaining:)](mobiledocumentrequest/photoidrawdata%28retaining_notretaining_%29.md): Conforms when `Self` is `MobilePhotoIDRawDataRequest`. A request which retrieves photo ID elements from the holder and returns the raw response data for processing.
- [photoIDRawData(retaining:notRetaining:issuerIdentifiers:)](mobiledocumentrequest/photoidrawdata%28retaining_notretaining_issueridentifiers_%29.md): Conforms when `Self` is `MobilePhotoIDRawDataRequest`. A request which retrieves photo ID elements from the holder and returns the raw response data for processing.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [MobileDocumentDataRequest](mobiledocumentdatarequest.md)
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md)

### Conforming Types

- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md)
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md)
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md)
- [MobileDriversLicenseDataRequest](mobiledriverslicensedatarequest.md)
- [MobileDriversLicenseDisplayRequest](mobiledriverslicensedisplayrequest.md)
- [MobileDriversLicenseRawDataRequest](mobiledriverslicenserawdatarequest.md)
- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md)
- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md)
- [MobileNationalIDCardRawDataRequest](mobilenationalidcardrawdatarequest.md)
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md)
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md)

## See Also

### Mobile document requests

- [MobileDriversLicenseDisplayRequest](mobiledriverslicensedisplayrequest.md): A mobile driver’s license request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDriversLicenseDataRequest](mobiledriverslicensedatarequest.md): A mobile driver’s license request that retrieves elements from the holder and returns the validated document elements.
- [MobileDriversLicenseRawDataRequest](mobiledriverslicenserawdatarequest.md): A mobile driver’s license request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileNationalIDCardDisplayRequest](mobilenationalidcarddisplayrequest.md): A mobile national ID card request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileNationalIDCardDataRequest](mobilenationalidcarddatarequest.md): A mobile national ID card request that retrieves elements from the holder and returns the validated document elements.
- [MobileNationalIDCardRawDataRequest](mobilenationalidcardrawdatarequest.md): A mobile national ID card request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentDisplayRequest](mobiledocumentdisplayrequest.md): A mobile document request that retrieves elements from the holder and displays the results onscreen for visual inspection.
- [MobileDocumentDataRequest](mobiledocumentdatarequest.md): A type that represents a mobile document data request.
- [MobileDocumentRawDataRequest](mobiledocumentrawdatarequest.md): A type that represents a mobile document raw data request.
- [MobilePhotoIDDataRequest](mobilephotoiddatarequest.md): A photo ID request that retrieves elements from the holder and returns the validated document elements.
- [MobilePhotoIDRawDataRequest](mobilephotoidrawdatarequest.md): A photo ID request which retrieves elements from the holder and returns the raw response data for processing.
- [MobileDocumentAnyOfDataRequest](mobiledocumentanyofdatarequest.md): A type that describes a data request for any mobile document from a group of requests.
- [MobileDocumentAnyOfRawDataRequest](mobiledocumentanyofrawdatarequest.md): A type that describes a raw data request for any mobile document from a group of requests.

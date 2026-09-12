> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreadersession](https://developer.apple.com/documentation/proximityreader/mobiledocumentreadersession)

# MobileDocumentReaderSession

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

The object you use to start reading a mobile document.

## Declaration

```swift
final class MobileDocumentReaderSession
```

## Mentioned In

- [Adopting the Verifier API in your iPhone app](adopting-the-verifier-api-in-your-iphone-app.md)
- [Generating reader tokens for the Verifier API](generating-reader-tokens-for-the-verifier-api.md)

<a id="overview"></a>

## Overview

Use a `MobileDocumentReaderSession` object to read mobile documents from a properly configured device. Don’t create this object directly. Instead, obtain one by calling the [prepare(using:)](mobiledocumentreader/prepare%28using_%29.md) method of your [MobileDocumentReader](mobiledocumentreader.md) object. This returns a session after the successful configuration of the device.

Maintain a strong reference to a session object for the duration of the document-reading process. You may use the same session object to perform multiple read operations, but you may perform only one read operation at a time from the device.

## Topics

### Performing a document request

- [requestDocument(\_:)](mobiledocumentreadersession/requestdocument%28__%29.md): Presents a sheet to read a mobile document and returns the relevant response.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Mobile document reader

- [Adopting the Verifier API in your iPhone app](adopting-the-verifier-api-in-your-iphone-app.md): Configure and test ID Verifier support in your app for reading mobile documents.
- [Generating reader tokens for the Verifier API](generating-reader-tokens-for-the-verifier-api.md): Configure your server to generate reader tokens to prepare a device for mobile document reading.
- [Checking IDs with the Verifier API](checking-ids-with-the-verifier-api.md): Read and verify mobile driver’s license, photo ID, and National ID information without any additional hardware.
- [MobileDocumentReader](mobiledocumentreader.md): An object for configuring mobile document reading on the current device.

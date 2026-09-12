> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/mobiledocumentreadersession/requestdocument(_:)](https://developer.apple.com/documentation/proximityreader/mobiledocumentreadersession/requestdocument(_:))

# requestDocument(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Presents a sheet to read a mobile document and returns the relevant response.

## Declaration

```swift
@discardableResult final func requestDocument<Request>(_ request: Request) async throws -> Request.Response where Request : MobileDocumentRequest
```

## Parameters

- `request`: The mobile document request.

<a id="return-value"></a>

## Return Value

A [Response](../mobiledocumentrequest/response.md) if the request was successful.

## Mentioned In

- [Adopting the Verifier API in your iPhone app](../adopting-the-verifier-api-in-your-iphone-app.md)

<a id="discussion"></a>

## Discussion

Call this method to begin requesting data contained in a mobile document. This method displays a system-provided sheet with instructions on what the mobile document holder needs to do. This UI remains onscreen until the system reads the person’s mobile document, you cancel the task, or an error occurs.

> **Throws**

> This method throws a [MobileDocumentReaderError](../mobiledocumentreadererror.md) if a mobile document request error occurs.

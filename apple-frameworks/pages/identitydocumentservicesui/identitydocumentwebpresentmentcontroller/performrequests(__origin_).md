> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller/performrequests(_:origin:)](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontroller/performrequests(_:origin:))

# performRequests(\_:origin:)

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

Performs an identity document request.

## Declaration

```swift
@MainActor final func performRequests(_ requests: [any IdentityDocumentWebPresentmentRequest], origin: URL) async throws -> any IdentityDocumentWebPresentmentResponse
```

## Parameters

- `requests`: A list of incoming document requests.
- `origin`: The origin of the requesting website.

<a id="return-value"></a>

## Return Value

A response that contains the requested document information.

<a id="Discussion"></a>

## Discussion

In iOS, the systems sources this document from a document provider installed on the current device. On other platforms, this function triggers a remote presentment flow where the app prompts the person to use a nearby device for the presentment.

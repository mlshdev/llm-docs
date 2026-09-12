> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontrollerdelegate/rawrequestsforwebpresentmentcontroller(_:)](https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentwebpresentmentcontrollerdelegate/rawrequestsforwebpresentmentcontroller(_:))

# rawRequestsForWebPresentmentController(\_:)

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst · macOS 26.0+

A method that allows the calling app to provide the incoming raw web presentment requests to the web presentment controller.

## Declaration

```swift
@MainActor func rawRequestsForWebPresentmentController(_ webPresentmentController: IdentityDocumentWebPresentmentController) async -> [IdentityDocumentWebPresentmentRawRequest]
```

## Parameters

- `webPresentmentController`: The active presentment controller.

<a id="return-value"></a>

## Return Value

A list of raw web presentment requests.

<a id="Discussion"></a>

## Discussion

If this method is unimplemented, then an `IdentityDocumentWebPresentmentError/invalidRequest` is thrown from the web presentment controller.

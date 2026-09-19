> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservicesui/identitydocumentpresentmentcontrollerpresentationcontextproviding/presentationanchorforpresentmentcontroller(_:)-58gth

# presentationAnchorForPresentmentController(\_:)

**Framework:** IdentityDocumentServicesUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Indicates the presentation anchor within which the system presents the controller’s UI to the presentment controller.

## Declaration

```swift
@MainActor func presentationAnchorForPresentmentController(_ presentmentController: any IdentityDocumentPresentmentControlling) -> IdentityDocumentPresentationAnchor?
```

## Parameters

- `presentmentController`: The active presentment controller.

<a id="return-value"></a>

## Return Value

The presentation anchor the system uses to present UI.

<a id="Discussion"></a>

## Discussion

Returning `nil` from this method results in an `IdentityDocumentWebPresentmentError/invalidRequest` error when performing an authorization request.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservicesui/iso18013mobiledocumentrequestscene/init(content:)

# init(content:)

**Framework:** IdentityDocumentServicesUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

Initialize an ISO 18013 mobile document raw request scene.

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder content: @escaping (ISO18013MobileDocumentRequestContext) -> Content)
```

## Parameters

- `content`: A closure that builds the authorization UI with the provided context.

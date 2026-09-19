> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitydocumentservices/mobiledocumentregistration/invalidationdate

# invalidationDate

**Framework:** IdentityDocumentServices  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A date that indicates when the system needs to invalidate this registration.

## Declaration

```swift
var invalidationDate: Date?
```

<a id="Discussion"></a>

## Discussion

Use this date when you know the expiration time period of a document. If this is `nil`, the registration never expires.

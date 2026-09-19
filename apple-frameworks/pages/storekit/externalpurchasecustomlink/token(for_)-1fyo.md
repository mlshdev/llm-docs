> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/token(for:)-1fyo

# token(for:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.1+ (deprecated in 27.2) · iPadOS 18.1+ (deprecated in 27.2) · Mac Catalyst 18.1+ (deprecated in 27.2) · macOS 15.1+ (deprecated in 27.2) · tvOS 18.1+ (deprecated in 27.2) · visionOS 2.1+ (deprecated in 27.2) · watchOS 11.1+ (deprecated in 27.2)

Returns an external purchase token of the specified type.

> Use \`token(for:)\` with a \`TokenType\` instead.

## Declaration

```swift
static func token(for tokenType: String) async throws -> ExternalPurchaseCustomLink.Token?
```

## Parameters

- `tokenType`: The type of token to request.

<a id="discussion"></a>

## Discussion

If `isEligible` is `false`, this method will always fail.

> **Throws**

> A `StoreKitError`.

## See Also

### Deprecated methods and values

- [showNotice(type:)](shownotice%28type_%29.md): Deprecated. Displays the system disclosure notice sheet and asks the customer whether to continue.
- [ExternalPurchaseCustomLink.NoticeType](noticetype.md): Deprecated. The custom link out style that informs the type of disclosure notice to display.

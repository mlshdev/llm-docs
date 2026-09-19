> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/tokentype

# ExternalPurchaseCustomLink.TokenType

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Values that represent the external purchase token types.

## Declaration

```swift
struct TokenType
```

<a id="Discussion"></a>

## Discussion

Provide a token type value when you call [token(for:)](token%28for_%29-6pixj.md).

## Topics

### Token types

- [withinApp](tokentype/withinapp.md): Beta. A token type for workflows that use an alternative payment provider inside the app.
- [outOfApp](tokentype/outofapp.md): Beta. A token type for workflows in which customers complete transactions outside of the app.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting external purchase tokens

- [token(for:)](token%28for_%29-6pixj.md): Beta. Returns an external purchase token of the specified token type.
- [ExternalPurchaseCustomLink.Token](token.md): A token you use with the External Purchase custom link API.
- [Receiving and decoding external purchase tokens](../receiving-and-decoding-external-purchase-tokens.md): Receive tokens for external purchases that you use to report transactions to Apple.

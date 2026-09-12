> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkidentityrequest/merchantidentifier](https://developer.apple.com/documentation/passkit/pkidentityrequest/merchantidentifier)

# merchantIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A value that represents the merchant that makes the request.

## Declaration

```swift
var merchantIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property identifies the merchant making the request, and must match one of the merchant identifiers in the app’s entitlement. For information about configuring the entitlement, see [com.apple.developer.in-app-identity-presentment.merchant-identifiers](../../bundleresources/entitlements/com.apple.developer.in-app-identity-presentment.merchant-identifiers.md).

Set this property before you invoke [requestDocument(\_:completion:)](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [descriptor](descriptor.md): The description of the document the app requests.
- [nonce](nonce.md): An arbitrary number that the signed response playload includes.

# merchantIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

A value that represents the merchant that makes the request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * merchantIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property identifies the merchant making the request, and must match one of the merchant identifiers in the app’s entitlement. For information about configuring the entitlement, see [com.apple.developer.in-app-identity-presentment.merchant-identifiers](../../bundleresources/entitlements/com.apple.developer.in-app-identity-presentment.merchant-identifiers.md).

Set this property before you invoke [requestDocument:completion:](../pkidentityauthorizationcontroller/requestdocument%28__completion_%29.md).

## See Also

### Configuring an identity request

- [descriptor](descriptor.md): The description of the document the app requests.
- [nonce](nonce.md): An arbitrary number that the signed response playload includes.

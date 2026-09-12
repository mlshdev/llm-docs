> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext/merchantidentifier](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext/merchantidentifier)

# merchantIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The Apply Pay merchant identifier.

## Declaration

```swift
var merchantIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

The merchant identifier you provide when you make an Apple Pay payment request. If you request a payment token for another merchant, use their merchant identifier if available. Otherwise, use your own merchant identifier.

For more information about merchant identifiers, see [Setting up Apple Pay](../setting-up-apple-pay.md).

## See Also

### Specifying the merchant

- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.

# merchantIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The Apply Pay merchant identifier.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * merchantIdentifier;
```

<a id="Discussion"></a>

## Discussion

The merchant identifier you provide when you make an Apple Pay payment request. If you request a payment token for another merchant, use their merchant identifier if available. Otherwise, use your own merchant identifier.

For more information about merchant identifiers, see [Setting up Apple Pay](../setting-up-apple-pay.md).

## See Also

### Specifying the merchant

- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.

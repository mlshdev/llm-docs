> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext/merchantdomain](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext/merchantdomain)

# merchantDomain (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The merchant’s top-level domain that the Apple Pay server associates with the payment token.

## Declaration

```swift
var merchantDomain: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This value is optional; provide the top-level domain for the merchant if it’s available.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.

# merchantDomain (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The merchant’s top-level domain that the Apple Pay server associates with the payment token.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * merchantDomain;
```

<a id="Discussion"></a>

## Discussion

This value is optional; provide the top-level domain for the merchant if it’s available.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.
- [externalIdentifier](externalidentifier.md): An external identifier for the merchant.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext/externalidentifier](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext/externalidentifier)

# externalIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An external identifier for the merchant.

## Declaration

```swift
var externalIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

An external identifier for the merchant that the app developer provides. If you request a payment token for another merchant, always use the same external identifier for that merchant in your app.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.

# externalIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An external identifier for the merchant.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * externalIdentifier;
```

<a id="Discussion"></a>

## Discussion

An external identifier for the merchant that the app developer provides. If you request a payment token for another merchant, always use the same external identifier for that merchant in your app.

## See Also

### Specifying the merchant

- [merchantIdentifier](merchantidentifier.md): The Apply Pay merchant identifier.
- [merchantDomain](merchantdomain.md): The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- [merchantName](merchantname.md): The merchant’s display name that the Apple Pay server associates with the payment token.

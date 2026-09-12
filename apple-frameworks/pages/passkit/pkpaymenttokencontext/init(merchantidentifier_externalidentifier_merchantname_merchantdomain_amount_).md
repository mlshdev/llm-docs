> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext/init(merchantidentifier:externalidentifier:merchantname:merchantdomain:amount:)](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext/init(merchantidentifier:externalidentifier:merchantname:merchantdomain:amount:))

# init(merchantIdentifier:externalIdentifier:merchantName:merchantDomain:amount:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a payment token context for a single merchant.

## Declaration

```swift
init(merchantIdentifier: String, externalIdentifier: String, merchantName: String, merchantDomain: String?, amount: NSDecimalNumber)
```

## Parameters

- `merchantIdentifier`: The Apple Pay merchant identifier.
- `externalIdentifier`: An external identifier for the merchant.
- `merchantName`: The merchant’s display name that the Apple Pay server associates with the payment token.
- `merchantDomain`: The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- `amount`: The amount to authorize for the payment token.

# initWithMerchantIdentifier:externalIdentifier:merchantName:merchantDomain:amount: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a payment token context for a single merchant.

## Declaration

```objectivec
- (instancetype) initWithMerchantIdentifier:(NSString *) merchantIdentifier externalIdentifier:(NSString *) externalIdentifier merchantName:(NSString *) merchantName merchantDomain:(NSString *) merchantDomain amount:(NSDecimalNumber *) amount;
```

## Parameters

- `merchantIdentifier`: The Apple Pay merchant identifier.
- `externalIdentifier`: An external identifier for the merchant.
- `merchantName`: The merchant’s display name that the Apple Pay server associates with the payment token.
- `merchantDomain`: The merchant’s top-level domain that the Apple Pay server associates with the payment token.
- `amount`: The amount to authorize for the payment token.

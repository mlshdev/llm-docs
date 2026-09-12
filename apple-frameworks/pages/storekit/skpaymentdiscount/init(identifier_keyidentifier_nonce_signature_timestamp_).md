> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skpaymentdiscount/init(identifier:keyidentifier:nonce:signature:timestamp:)](https://developer.apple.com/documentation/storekit/skpaymentdiscount/init(identifier:keyidentifier:nonce:signature:timestamp:))

# init(identifier:keyIdentifier:nonce:signature:timestamp:) (Swift)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Initializes the payment discount with a signature and the parameters used by the signature.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```swift
init(identifier: String, keyIdentifier: String, nonce: UUID, signature: String, timestamp: NSNumber)
```

# initWithIdentifier:keyIdentifier:nonce:signature:timestamp: (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ (deprecated in 18.0) · iPadOS 12.2+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.14.4+ (deprecated in 15.0) · tvOS 12.2+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 6.2+ (deprecated in 11.0)

Initializes the payment discount with a signature and the parameters used by the signature.

> Create a Product.PurchaseOption.promotionalOffer to use in Product.purchase(confirmIn:options:).

## Declaration

```objectivec
- (instancetype) initWithIdentifier:(NSString *) identifier keyIdentifier:(NSString *) keyIdentifier nonce:(NSUUID *) nonce signature:(NSString *) signature timestamp:(NSNumber *) timestamp;
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymenttoken/paymentnetwork

# paymentNetwork (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

The payment network for the card that funds this transaction.

> This property is deprecated. Use [paymentMethod](paymentmethod.md) instead.

## Declaration

```swift
var paymentNetwork: String { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the constants listed in [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Deprecated

- [paymentInstrumentName](paymentinstrumentname.md): Deprecated. A description of the payment card that the user selected to fund the transaction.

# paymentNetwork (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

The payment network for the card that funds this transaction.

> This property is deprecated. Use [paymentMethod](paymentmethod.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * paymentNetwork;
```

<a id="Discussion"></a>

## Discussion

The value of this property is one of the constants listed in [PKPaymentRequest](../pkpaymentrequest.md).

## See Also

### Deprecated

- [paymentInstrumentName](paymentinstrumentname.md): Deprecated. A description of the payment card that the user selected to fund the transaction.

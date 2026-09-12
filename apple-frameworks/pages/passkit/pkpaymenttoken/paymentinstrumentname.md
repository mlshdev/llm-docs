> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttoken/paymentinstrumentname](https://developer.apple.com/documentation/passkit/pkpaymenttoken/paymentinstrumentname)

# paymentInstrumentName (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

A description of the payment card that the user selected to fund the transaction.

> This property is deprecated. Use [paymentMethod](paymentmethod.md) instead.

## Declaration

```swift
var paymentInstrumentName: String { get }
```

<a id="Discussion"></a>

## Discussion

This string is suitable for display; it doesn’t contain the full payment information.

## See Also

### Deprecated

- [paymentNetwork](paymentnetwork.md): Deprecated. The payment network for the card that funds this transaction.

# paymentInstrumentName (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 9.0) · iPadOS 8.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 11.0+ · visionOS 1.0+ (deprecated in 1.0)

A description of the payment card that the user selected to fund the transaction.

> This property is deprecated. Use [paymentMethod](paymentmethod.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * paymentInstrumentName;
```

<a id="Discussion"></a>

## Discussion

This string is suitable for display; it doesn’t contain the full payment information.

## See Also

### Deprecated

- [paymentNetwork](paymentnetwork.md): Deprecated. The payment network for the card that funds this transaction.

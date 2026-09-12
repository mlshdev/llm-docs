> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/paymentpass](https://developer.apple.com/documentation/passkit/pkpaymentmethod/paymentpass)

# paymentPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

The accompanying payment pass.

> Use [secureElementPass](secureelementpass.md) instead.

## Declaration

```swift
@NSCopying var paymentPass: PKPaymentPass? { get }
```

<a id="Discussion"></a>

## Discussion

If your app has an association with the pass that is funding the payment, this property contains information about that pass; otherwise, it’s `nil`.

Use this property to detect your brand of credit and debit cards. For example, you can provide a discount if the user pays using your store-branded credit card.

> **Note**

>  To be able to access the pass, the issuer must add your App ID to the pass when it provisions it. To add your App ID to these passes, contact the bank that issues your cards or the person who manages your cobrand program.

## See Also

### Getting the pass

- [secureElementPass](secureelementpass.md): The accompanying Secure Element pass.

# paymentPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 3.0+ (deprecated in 27.0)

The accompanying payment pass.

> Use [secureElementPass](secureelementpass.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) PKPaymentPass * paymentPass;
```

<a id="Discussion"></a>

## Discussion

If your app has an association with the pass that is funding the payment, this property contains information about that pass; otherwise, it’s `nil`.

Use this property to detect your brand of credit and debit cards. For example, you can provide a discount if the user pays using your store-branded credit card.

> **Note**

>  To be able to access the pass, the issuer must add your App ID to the pass when it provisions it. To add your App ID to these passes, contact the bank that issues your cards or the person who manages your cobrand program.

## See Also

### Getting the pass

- [secureElementPass](secureelementpass.md): The accompanying Secure Element pass.

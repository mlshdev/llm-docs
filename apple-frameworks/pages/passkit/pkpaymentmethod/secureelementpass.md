> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentmethod/secureelementpass](https://developer.apple.com/documentation/passkit/pkpaymentmethod/secureelementpass)

# secureElementPass (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The accompanying Secure Element pass.

## Declaration

```swift
@NSCopying var secureElementPass: PKSecureElementPass? { get }
```

<a id="Discussion"></a>

## Discussion

If your app has an association with the pass that is funding the payment, this property contains information about that pass; otherwise, it’s `nil`.

Use this property to detect your brand of credit and debit cards. For example, you can provide a discount if the user pays using your store-branded credit card.

> **Note**

>  To be able to access the pass, the issuer must add your App ID to the pass when it provisions it. To add your App ID to these passes, contact the bank that issues your cards or the person who manages your cobrand program.

## See Also

### Getting the pass

- [paymentPass](paymentpass.md): Deprecated. The accompanying payment pass.

# secureElementPass (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.2+

The accompanying Secure Element pass.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) PKSecureElementPass * secureElementPass;
```

<a id="Discussion"></a>

## Discussion

If your app has an association with the pass that is funding the payment, this property contains information about that pass; otherwise, it’s `nil`.

Use this property to detect your brand of credit and debit cards. For example, you can provide a discount if the user pays using your store-branded credit card.

> **Note**

>  To be able to access the pass, the issuer must add your App ID to the pass when it provisions it. To add your App ID to these passes, contact the bank that issues your cards or the person who manages your cobrand program.

## See Also

### Getting the pass

- [paymentPass](paymentpass.md): Deprecated. The accompanying payment pass.

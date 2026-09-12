> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticreloadpaymentrequest/paymentdescription](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentrequest/paymentdescription)

# paymentDescription (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A description that you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.

## Declaration

```swift
var paymentDescription: String { get set }
```

<a id="Discussion"></a>

## Discussion

Provide a display name for the automatic reload, for example, “Gift Card Reload”.

## See Also

### Describing an automatic reload payment

- [billingAgreement](billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

# paymentDescription (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A description that you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * paymentDescription;
```

<a id="Discussion"></a>

## Discussion

Provide a display name for the automatic reload, for example, “Gift Card Reload”.

## See Also

### Describing an automatic reload payment

- [billingAgreement](billingagreement.md): A localized billing agreement that the payment sheet displays to the user before the user authorizes the payment.

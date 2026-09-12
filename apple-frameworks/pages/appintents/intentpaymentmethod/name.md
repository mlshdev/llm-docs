> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpaymentmethod/name](https://developer.apple.com/documentation/appintents/intentpaymentmethod/name)

# name

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The user-visible name of the payment method

## Declaration

```swift
var name: String? { get }
```

## See Also

### Getting the payment details

- [paymentType](paymenttype-swift.property.md): The kind of payment method, such as a credit card or bank account
- [identificationHint](identificationhint.md): A hint making it easier for the user to identify the payment method among others of similar name or type, such as the last several digits of a credit card number
- [icon](icon.md): The icon or image representing this payment method
- [IntentPaymentMethod.PaymentType](paymenttype-swift.enum.md): Constants that describe the available payment options, such as credit cards or bank accounts.

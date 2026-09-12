> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentpaymentmethod/icon](https://developer.apple.com/documentation/appintents/intentpaymentmethod/icon)

# icon

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The icon or image representing this payment method

## Declaration

```swift
var icon: DisplayRepresentation.Image? { get }
```

## See Also

### Getting the payment details

- [paymentType](paymenttype-swift.property.md): The kind of payment method, such as a credit card or bank account
- [name](name.md): The user-visible name of the payment method
- [identificationHint](identificationhint.md): A hint making it easier for the user to identify the payment method among others of similar name or type, such as the last several digits of a credit card number
- [IntentPaymentMethod.PaymentType](paymenttype-swift.enum.md): Constants that describe the available payment options, such as credit cards or bank accounts.

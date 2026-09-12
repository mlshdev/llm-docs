> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/requiredrecipientcontactfields](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/requiredrecipientcontactfields)

# requiredRecipientContactFields (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

## Declaration

```swift
var requiredRecipientContactFields: [PKContactField] { get set }
```

<a id="Discussion"></a>

## Discussion

The framework uses these details to display the input fields for name, email address, phone number, and so on on the payment sheet. The framework always shows them in a specific order, regardless of the order of API input.

## See Also

### Requesting recipient contact fields

- [recipientContact](recipientcontact.md): A contact object that describes the recipient.

# requiredRecipientContactFields (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<NSString *> * requiredRecipientContactFields;
```

<a id="Discussion"></a>

## Discussion

The framework uses these details to display the input fields for name, email address, phone number, and so on on the payment sheet. The framework always shows them in a specific order, regardless of the order of API input.

## See Also

### Requesting recipient contact fields

- [recipientContact](recipientcontact.md): A contact object that describes the recipient.

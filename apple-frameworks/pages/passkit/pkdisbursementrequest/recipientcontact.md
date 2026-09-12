> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdisbursementrequest/recipientcontact](https://developer.apple.com/documentation/passkit/pkdisbursementrequest/recipientcontact)

# recipientContact (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A contact object that describes the recipient.

## Declaration

```swift
var recipientContact: PKContact? { get set }
```

<a id="Discussion"></a>

## Discussion

If the merchant already has recipient contact information on file, set it here. Merchants should also include the corresponding contact fields in their [requiredRecipientContactFields](requiredrecipientcontactfields.md) to ensure the data is visible on the payment sheet. Doing so enables people to select alternative contact information on the payment sheet, which merchants need to anticipate when they receive the final Apple Pay payment data.

## See Also

### Requesting recipient contact fields

- [requiredRecipientContactFields](requiredrecipientcontactfields.md): An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

# recipientContact (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 15.0+ · visionOS 1.0+

A contact object that describes the recipient.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKContact * recipientContact;
```

<a id="Discussion"></a>

## Discussion

If the merchant already has recipient contact information on file, set it here. Merchants should also include the corresponding contact fields in their [requiredRecipientContactFields](requiredrecipientcontactfields.md) to ensure the data is visible on the payment sheet. Doing so enables people to select alternative contact information on the payment sheet, which merchants need to anticipate when they receive the final Apple Pay payment data.

## See Also

### Requesting recipient contact fields

- [requiredRecipientContactFields](requiredrecipientcontactfields.md): An array that indicates which of the recipient’s contact details the merchant requires in order to process a disbursement.

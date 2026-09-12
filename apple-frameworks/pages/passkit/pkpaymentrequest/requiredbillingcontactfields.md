> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/requiredbillingcontactfields](https://developer.apple.com/documentation/passkit/pkpaymentrequest/requiredbillingcontactfields)

# requiredBillingContactFields (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of fields that you need for a billing contact to process the transaction.

## Declaration

```swift
var requiredBillingContactFields: Set<PKContactField> { get set }
```

<a id="Discussion"></a>

## Discussion

See [PKContactField](../pkcontactfield.md) for the list of possible contact fields.

## See Also

### Requesting billing and shipping contact fields

- [requiredShippingContactFields](requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.
- [PKContactField](../pkcontactfield.md): The fields that describe a contact.

# requiredBillingContactFields (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A list of fields that you need for a billing contact to process the transaction.

## Declaration

```objectivec
@property (nonatomic, strong) NSSet<NSString *> * requiredBillingContactFields;
```

<a id="Discussion"></a>

## Discussion

See [PKContactField](../pkcontactfield.md) for the list of possible contact fields.

## See Also

### Requesting billing and shipping contact fields

- [requiredShippingContactFields](requiredshippingcontactfields.md): A list of fields that you need for a shipping contact to process the transaction.
- [PKContactField](../pkcontactfield.md): The fields that describe a contact.

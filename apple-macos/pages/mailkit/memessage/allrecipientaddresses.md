> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/allrecipientaddresses](https://developer.apple.com/documentation/mailkit/memessage/allrecipientaddresses)

# allRecipientAddresses (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses for all recipients of the message.

## Declaration

```swift
var allRecipientAddresses: [MEEmailAddress] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains all values in [toAddresses](toaddresses.md), [ccAddresses](ccaddresses.md), and [bccAddresses](bccaddresses.md).

The entries in the array specify the email addresses only, and don’t include any additional text. For example, if the recipient headers in the message includes `Maria Ruiz <mruiz2@icloud.com>`, the array contains `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [fromAddress](fromaddress.md): The sender’s email address.
- [toAddresses](toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.

# allRecipientAddresses (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses for all recipients of the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MEEmailAddress *> * allRecipientAddresses;
```

<a id="Discussion"></a>

## Discussion

This property contains all values in [toAddresses](toaddresses.md), [ccAddresses](ccaddresses.md), and [bccAddresses](bccaddresses.md).

The entries in the array specify the email addresses only, and don’t include any additional text. For example, if the recipient headers in the message includes `Maria Ruiz <mruiz2@icloud.com>`, the array contains `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [fromAddress](fromaddress.md): The sender’s email address.
- [toAddresses](toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.

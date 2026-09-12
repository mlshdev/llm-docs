> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/toaddresses](https://developer.apple.com/documentation/mailkit/memessage/toaddresses)

# toAddresses (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses for the primary recipients of the message.

## Declaration

```swift
var toAddresses: [MEEmailAddress] { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the To header in the message.

The entries in the array specify the email addresses only, and don’t include any additional text. For example, if the To header in the message includes `Maria Ruiz <mruiz2@icloud.com>`, the array contains `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [fromAddress](fromaddress.md): The sender’s email address.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](allrecipientaddresses.md): An array of email addresses for all recipients of the message.

# toAddresses (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

An array of email addresses for the primary recipients of the message.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<MEEmailAddress *> * toAddresses;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the To header in the message.

The entries in the array specify the email addresses only, and don’t include any additional text. For example, if the To header in the message includes `Maria Ruiz <mruiz2@icloud.com>`, the array contains `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [fromAddress](fromaddress.md): The sender’s email address.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](allrecipientaddresses.md): An array of email addresses for all recipients of the message.

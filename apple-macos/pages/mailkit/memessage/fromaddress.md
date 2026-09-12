> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mailkit/memessage/fromaddress](https://developer.apple.com/documentation/mailkit/memessage/fromaddress)

# fromAddress (Swift)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The sender’s email address.

## Declaration

```swift
@NSCopying var fromAddress: MEEmailAddress { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the From header in the message.

The value specifies the email address only, and doesn’t include any additional text. For example, if the From header in the message is `Maria Ruiz <mruiz2@icloud.com>`, the value of this property is `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [toAddresses](toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](allrecipientaddresses.md): An array of email addresses for all recipients of the message.

# fromAddress (Objective-C)

**Framework:** MailKit  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The sender’s email address.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) MEEmailAddress * fromAddress;
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the From header in the message.

The value specifies the email address only, and doesn’t include any additional text. For example, if the From header in the message is `Maria Ruiz <mruiz2@icloud.com>`, the value of this property is `mruiz2@icloud.com`.

## See Also

### Accessing the Sender and Recipients

- [toAddresses](toaddresses.md): An array of email addresses for the primary recipients of the message.
- [ccAddresses](ccaddresses.md): An array of email addresses for the secondary recipients of the message.
- [bccAddresses](bccaddresses.md): An array of email addresses for the concealed tertiary recipients of the message.
- [replyToAddresses](replytoaddresses.md): An array of email addresses to use when replying to the message.
- [allRecipientAddresses](allrecipientaddresses.md): An array of email addresses for all recipients of the message.

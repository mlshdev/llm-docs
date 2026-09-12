> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/setpreferredsendingemailaddress(_:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/setpreferredsendingemailaddress(_:))

# setPreferredSendingEmailAddress(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the preferred email address to use in the From field, if such an address is available.

## Declaration

```swift
func setPreferredSendingEmailAddress(_ emailAddress: String)
```

## Parameters

- `emailAddress`: The preferred email address used to send this message.

<a id="Discussion"></a>

## Discussion

If the user doesn’t have an account with a preferred address set up, the default account is used instead.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject(\_:)](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients(\_:)](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients(\_:)](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody(\_:isHTML:)](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.

# setPreferredSendingEmailAddress: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the preferred email address to use in the From field, if such an address is available.

## Declaration

```objectivec
- (void) setPreferredSendingEmailAddress:(NSString *) emailAddress;
```

## Parameters

- `emailAddress`: The preferred email address used to send this message.

<a id="Discussion"></a>

## Discussion

If the user doesn’t have an account with a preferred address set up, the default account is used instead.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject:](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients:](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients:](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody:isHTML:](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.

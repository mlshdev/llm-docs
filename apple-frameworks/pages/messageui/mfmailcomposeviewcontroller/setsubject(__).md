> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/setsubject(_:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/setsubject(_:))

# setSubject(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial text for the subject line of the email.

## Declaration

```swift
func setSubject(_ subject: String)
```

## Parameters

- `subject`: The text to display in the subject line.

<a id="Discussion"></a>

## Discussion

This method replaces the previous subject text with the new text. Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setToRecipients(\_:)](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients(\_:)](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody(\_:isHTML:)](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress(\_:)](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

# setSubject: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial text for the subject line of the email.

## Declaration

```objectivec
- (void) setSubject:(NSString *) subject;
```

## Parameters

- `subject`: The text to display in the subject line.

<a id="Discussion"></a>

## Discussion

This method replaces the previous subject text with the new text. Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setToRecipients:](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients:](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody:isHTML:](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress:](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/settorecipients(_:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/settorecipients(_:))

# setToRecipients(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial recipients to include in the email’s To field.

## Declaration

```swift
func setToRecipients(_ toRecipients: [String]?)
```

## Parameters

- `toRecipients`: An array of [String](https://developer.apple.com/documentation/swift/string) objects, each containing the email address of a single recipient.

<a id="Discussion"></a>

## Discussion

This method replaces the previous recipients with the new ones listed in the `toRecipients` parameter. This method doesn’t filter out duplicate email addresses, so if duplicates are present, multiple copies of the email message may be sent to the same address.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject(\_:)](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients(\_:)](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody(\_:isHTML:)](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress(\_:)](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

# setToRecipients: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial recipients to include in the email’s To field.

## Declaration

```objectivec
- (void) setToRecipients:(NSArray<NSString *> *) toRecipients;
```

## Parameters

- `toRecipients`: An array of [String](https://developer.apple.com/documentation/swift/string) objects, each containing the email address of a single recipient.

<a id="Discussion"></a>

## Discussion

This method replaces the previous recipients with the new ones listed in the `toRecipients` parameter. This method doesn’t filter out duplicate email addresses, so if duplicates are present, multiple copies of the email message may be sent to the same address.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject:](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients:](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody:isHTML:](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress:](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

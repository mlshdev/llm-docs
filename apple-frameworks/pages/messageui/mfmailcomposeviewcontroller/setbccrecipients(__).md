> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/setbccrecipients(_:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/setbccrecipients(_:))

# setBccRecipients(\_:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial recipients to include in the email’s Bcc field.

## Declaration

```swift
func setBccRecipients(_ bccRecipients: [String]?)
```

## Parameters

- `bccRecipients`: An array of [String](https://developer.apple.com/documentation/swift/string) objects, each containing the email address of a single recipient.

<a id="Discussion"></a>

## Discussion

This method replaces the previous blind carbon-copy (Bcc) recipients with the new ones listed in the `bccRecipients` parameter. This method doesn’t filter out duplicate email addresses, so if duplicates are present, the recipient may receive multiple copies of the email message.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

> **Important**

>  [MFMailComposeViewController](../mfmailcomposeviewcontroller.md) ignores calls to this method in Mac apps built with Mac Catalyst.

## See Also

### Setting mail fields programmatically

- [setSubject(\_:)](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients(\_:)](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setMessageBody(\_:isHTML:)](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress(\_:)](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

# setBccRecipients: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial recipients to include in the email’s Bcc field.

## Declaration

```objectivec
- (void) setBccRecipients:(NSArray<NSString *> *) bccRecipients;
```

## Parameters

- `bccRecipients`: An array of [String](https://developer.apple.com/documentation/swift/string) objects, each containing the email address of a single recipient.

<a id="Discussion"></a>

## Discussion

This method replaces the previous blind carbon-copy (Bcc) recipients with the new ones listed in the `bccRecipients` parameter. This method doesn’t filter out duplicate email addresses, so if duplicates are present, the recipient may receive multiple copies of the email message.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

> **Important**

>  [MFMailComposeViewController](../mfmailcomposeviewcontroller.md) ignores calls to this method in Mac apps built with Mac Catalyst.

## See Also

### Setting mail fields programmatically

- [setSubject:](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients:](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setMessageBody:isHTML:](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress:](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

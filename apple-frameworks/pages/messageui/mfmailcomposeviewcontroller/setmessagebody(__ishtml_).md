> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/setmessagebody(_:ishtml:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/setmessagebody(_:ishtml:))

# setMessageBody(\_:isHTML:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial body text to include in the email.

## Declaration

```swift
func setMessageBody(_ body: String, isHTML: Bool)
```

## Parameters

- `body`: The initial body text of the message. The text is interpreted as either plain text or HTML, depending on the value of the `isHTML` parameter.
- `isHTML`: Specify [true](https://developer.apple.com/documentation/swift/true) if the body parameter contains HTML content or specify [false](https://developer.apple.com/documentation/swift/false) if it contains plain text.

<a id="Discussion"></a>

## Discussion

This method replaces the previous body content with the new content. If the user has a signature file, the body content is inserted immediately before the signature. If you want to include images with your content, you must attach the images separately using the [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md) method.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject(\_:)](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients(\_:)](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients(\_:)](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [addAttachmentData(\_:mimeType:fileName:)](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress(\_:)](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

# setMessageBody:isHTML: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the initial body text to include in the email.

## Declaration

```objectivec
- (void) setMessageBody:(NSString *) body isHTML:(BOOL) isHTML;
```

## Parameters

- `body`: The initial body text of the message. The text is interpreted as either plain text or HTML, depending on the value of the `isHTML` parameter.
- `isHTML`: Specify [true](https://developer.apple.com/documentation/swift/true) if the body parameter contains HTML content or specify [false](https://developer.apple.com/documentation/swift/false) if it contains plain text.

<a id="Discussion"></a>

## Discussion

This method replaces the previous body content with the new content. If the user has a signature file, the body content is inserted immediately before the signature. If you want to include images with your content, you must attach the images separately using the [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md) method.

Only call this method before you display the mail composition interface. Don’t call it after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject:](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients:](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients:](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [addAttachmentData:mimeType:fileName:](addattachmentdata%28__mimetype_filename_%29.md): Adds the specified data as an attachment to the message.
- [setPreferredSendingEmailAddress:](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

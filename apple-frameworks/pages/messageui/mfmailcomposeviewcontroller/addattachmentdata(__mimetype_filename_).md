> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/messageui/mfmailcomposeviewcontroller/addattachmentdata(_:mimetype:filename:)](https://developer.apple.com/documentation/messageui/mfmailcomposeviewcontroller/addattachmentdata(_:mimetype:filename:))

# addAttachmentData(\_:mimeType:fileName:) (Swift)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified data as an attachment to the message.

## Declaration

```swift
func addAttachmentData(_ attachment: Data, mimeType: String, fileName filename: String)
```

## Parameters

- `attachment`: The data to attach. Typically, this is the contents of a file that you want to include. This parameter must not be `nil`.
- `mimeType`: The MIME type of the specified data. (For example, the MIME type for a JPEG image is `image/jpeg`.) For a list of valid MIME types, see [http://www.iana.org/assignments/media-types/](http://www.iana.org/assignments/media-types/). This parameter must not be `nil`.
- `filename`: The preferred filename to associate with the data. This is the default name applied to the file when it is transferred to its destination. Any path separator (`/`) characters in the filename are converted to underscore (`_`) characters prior to transmission. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method attaches the specified data after the message body, but before the user’s signature. You may attach multiple files (using different file names), but must do so prior to displaying the mail composition interface. Don’t call this method after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject(\_:)](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients(\_:)](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients(\_:)](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients(\_:)](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody(\_:isHTML:)](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [setPreferredSendingEmailAddress(\_:)](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

# addAttachmentData:mimeType:fileName: (Objective-C)

**Framework:** Message UI  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the specified data as an attachment to the message.

## Declaration

```objectivec
- (void) addAttachmentData:(NSData *) attachment mimeType:(NSString *) mimeType fileName:(NSString *) filename;
```

## Parameters

- `attachment`: The data to attach. Typically, this is the contents of a file that you want to include. This parameter must not be `nil`.
- `mimeType`: The MIME type of the specified data. (For example, the MIME type for a JPEG image is `image/jpeg`.) For a list of valid MIME types, see [http://www.iana.org/assignments/media-types/](http://www.iana.org/assignments/media-types/). This parameter must not be `nil`.
- `filename`: The preferred filename to associate with the data. This is the default name applied to the file when it is transferred to its destination. Any path separator (`/`) characters in the filename are converted to underscore (`_`) characters prior to transmission. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method attaches the specified data after the message body, but before the user’s signature. You may attach multiple files (using different file names), but must do so prior to displaying the mail composition interface. Don’t call this method after presenting the interface to the user.

## See Also

### Setting mail fields programmatically

- [setSubject:](setsubject%28__%29.md): Sets the initial text for the subject line of the email.
- [setToRecipients:](settorecipients%28__%29.md): Sets the initial recipients to include in the email’s To field.
- [setCcRecipients:](setccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Cc field.
- [setBccRecipients:](setbccrecipients%28__%29.md): Sets the initial recipients to include in the email’s Bcc field.
- [setMessageBody:isHTML:](setmessagebody%28__ishtml_%29.md): Sets the initial body text to include in the email.
- [setPreferredSendingEmailAddress:](setpreferredsendingemailaddress%28__%29.md): Sets the preferred email address to use in the From field, if such an address is available.

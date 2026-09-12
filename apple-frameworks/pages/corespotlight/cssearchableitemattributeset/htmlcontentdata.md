> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitemattributeset/htmlcontentdata](https://developer.apple.com/documentation/corespotlight/cssearchableitemattributeset/htmlcontentdata)

# htmlContentData (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The HTML content of the document encoded as an NSData object representing a UTF-8 encoded string.

## Declaration

```swift
var htmlContentData: Data? { get set }
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

## See Also

### Describing messages

- [Common Mailbox Identifiers](../common-mailbox-identifiers.md): Constants that describe common mailbox names.
- [accountHandles](accounthandles.md): An array of the canonical handles for the account with which the message is associated.
- [accountIdentifier](accountidentifier.md): The unique identifier for the account with which the message is associated, if any.
- [additionalRecipients](additionalrecipients.md): An array of [CSPerson](../csperson.md) objects representing the content of the Cc: field in an email message.
- [authorAddresses](authoraddresses.md): An array of addresses associated with the author of the message.
- [authorEmailAddresses](authoremailaddresses.md): An array of email addresses associated with the author of the message.
- [authorNames](authornames.md): An array of names representing the authors who have worked on the message.
- [authors](authors.md): An array of [CSPerson](../csperson.md) objects representing the content of the From: field in an item.
- [emailAddresses](emailaddresses.md): An array of email addresses associated with the message.
- [emailHeaders](emailheaders.md): A dictionary that contains all the headers of the message.
- [hiddenAdditionalRecipients](hiddenadditionalrecipients.md): An array of [CSPerson](../csperson.md) objects representing the content of the Bcc: field in an email message.
- [instantMessageAddresses](instantmessageaddresses.md): An array of instant message addresses for the message.
- [likelyJunk](likelyjunk.md): A value that indicates if the message is likely to be considered junk.
- [mailboxIdentifiers](mailboxidentifiers.md): An array of mailbox identifiers associated with the message.
- [phoneNumbers](phonenumbers.md): An array of phone numbers associated with the message.

# HTMLContentData (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The HTML content of the document encoded as an NSData object representing a UTF-8 encoded string.

## Declaration

```objectivec
@property (copy, nullable) NSData * HTMLContentData;
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

## See Also

### Describing messages

- [Common Mailbox Identifiers](../common-mailbox-identifiers.md): Constants that describe common mailbox names.
- [accountHandles](accounthandles.md): An array of the canonical handles for the account with which the message is associated.
- [accountIdentifier](accountidentifier.md): The unique identifier for the account with which the message is associated, if any.
- [additionalRecipients](additionalrecipients.md): An array of [CSPerson](../csperson.md) objects representing the content of the Cc: field in an email message.
- [authorAddresses](authoraddresses.md): An array of addresses associated with the author of the message.
- [authorEmailAddresses](authoremailaddresses.md): An array of email addresses associated with the author of the message.
- [authorNames](authornames.md): An array of names representing the authors who have worked on the message.
- [authors](authors.md): An array of [CSPerson](../csperson.md) objects representing the content of the From: field in an item.
- [emailAddresses](emailaddresses.md): An array of email addresses associated with the message.
- [emailHeaders](emailheaders.md): A dictionary that contains all the headers of the message.
- [hiddenAdditionalRecipients](hiddenadditionalrecipients.md): An array of [CSPerson](../csperson.md) objects representing the content of the Bcc: field in an email message.
- [instantMessageAddresses](instantmessageaddresses.md): An array of instant message addresses for the message.
- [likelyJunk](likelyjunk.md): A value that indicates if the message is likely to be considered junk.
- [mailboxIdentifiers](mailboxidentifiers.md): An array of mailbox identifiers associated with the message.
- [phoneNumbers](phonenumbers.md): An array of phone numbers associated with the message.

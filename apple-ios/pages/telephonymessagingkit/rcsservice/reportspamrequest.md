> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/reportspamrequest](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/reportspamrequest)

# RCSService.ReportSpamRequest

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that contains information about a spam reporting request for an RCS message.

## Declaration

```swift
struct ReportSpamRequest
```

## Topics

### Creating a report spam request

- [init(message:fileContent:category:reason:)](reportspamrequest/init%28message_filecontent_category_reason_%29.md)

### Accessing request properties

- [message](reportspamrequest/message.md): The message to report as spam.
- [fileContent](reportspamrequest/filecontent.md): The content of the file attachment message.
- [category](reportspamrequest/category-swift.property.md): An optional category to classify the spam type of the message.
- [RCSService.ReportSpamRequest.Category](reportspamrequest/category-swift.enum.md): An enumeration of spam types, for use while reporting an RCS message as spam.
- [reason](reportspamrequest/reason.md): An optional reason to report the message as spam.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reporting spam

- [reportSpam(\_:)](reportspam%28__%29.md): Reports an RCS message as spam to the carrier and to partners.

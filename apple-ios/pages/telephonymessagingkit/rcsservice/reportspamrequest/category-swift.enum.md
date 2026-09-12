> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/reportspamrequest/category-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/reportspamrequest/category-swift.enum)

# RCSService.ReportSpamRequest.Category

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

An enumeration of spam types, for use while reporting an RCS message as spam.

## Declaration

```swift
enum Category
```

## Topics

### Identifying spam categories

- [RCSService.ReportSpamRequest.Category.invalid](category-swift.enum/invalid.md): RCS message considered as invalid.
- [RCSService.ReportSpamRequest.Category.spam](category-swift.enum/spam.md): RCS message considered as spam.
- [RCSService.ReportSpamRequest.Category.fraud](category-swift.enum/fraud.md): RCS message considered as fraud.
- [RCSService.ReportSpamRequest.Category.inappropriateContent](category-swift.enum/inappropriatecontent.md): RCS message considered as inappropriate content.
- [RCSService.ReportSpamRequest.Category.other](category-swift.enum/other.md): RCS message considered as other spam category.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing request properties

- [message](message.md): The message to report as spam.
- [fileContent](filecontent.md): The content of the file attachment message.
- [category](category-swift.property.md): An optional category to classify the spam type of the message.
- [reason](reason.md): An optional reason to report the message as spam.

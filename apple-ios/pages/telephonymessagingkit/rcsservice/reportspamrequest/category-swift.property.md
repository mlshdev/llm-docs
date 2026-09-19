> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/reportspamrequest/category-swift.property

# category

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

An optional category to classify the spam type of the message.

## Declaration

```swift
var category: RCSService.ReportSpamRequest.Category?
```

## See Also

### Accessing request properties

- [message](message.md): The message to report as spam.
- [fileContent](filecontent.md): The content of the file attachment message.
- [RCSService.ReportSpamRequest.Category](category-swift.enum.md): An enumeration of spam types, for use while reporting an RCS message as spam.
- [reason](reason.md): An optional reason to report the message as spam.

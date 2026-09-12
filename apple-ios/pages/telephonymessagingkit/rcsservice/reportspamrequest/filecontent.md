> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/reportspamrequest/filecontent](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/reportspamrequest/filecontent)

# fileContent

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The content of the file attachment message.

## Declaration

```swift
var fileContent: Data?
```

<a id="discussion"></a>

## Discussion

When possible, supply downloaded file content when reporting a message as spam.

## See Also

### Accessing request properties

- [message](message.md): The message to report as spam.
- [category](category-swift.property.md): An optional category to classify the spam type of the message.
- [RCSService.ReportSpamRequest.Category](category-swift.enum.md): An enumeration of spam types, for use while reporting an RCS message as spam.
- [reason](reason.md): An optional reason to report the message as spam.

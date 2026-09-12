> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/suggestionresponse](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/suggestionresponse)

# RCSService.SuggestionResponse

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure representing a response to a business suggestion.

## Declaration

```swift
struct SuggestionResponse
```

## Topics

### Creating a suggestion response

- [init(cellularServiceID:destination:messageID:originatingMessageID:suggestion:)](suggestionresponse/init%28cellularserviceid_destination_messageid_originatingmessageid_suggestion_%29.md)

### Accessing response properties

- [cellularServiceID](suggestionresponse/cellularserviceid.md): Service identifier to use for this response.
- [destination](suggestionresponse/destination.md): Destination handle to send response to.
- [RCSHandle](../rcshandle.md): An enumeration that represents an RCS destination or sender.
- [messageID](suggestionresponse/messageid.md): Message identifier to use for this response.
- [originatingMessageID](suggestionresponse/originatingmessageid.md): Message indentifier of the message that contained the specified suggestion.
- [RCSMessageID](../rcsmessageid.md): A structure that represents an RCS message identifier.
- [suggestion](suggestionresponse/suggestion.md): Suggestion for which to send the response.
- [RCSService.Business.Suggestion](business/suggestion.md): Enumeration representing a suggestion from a business.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to business suggestions

- [sendSuggestionResponse(\_:)](sendsuggestionresponse%28__%29.md): Sends a response for a business suggestion.
- [sendDeviceSpecifics(to:using:messageID:)](senddevicespecifics%28to_using_messageid_%29.md): Sends device specifics in response to a suggested action to send device specifics.

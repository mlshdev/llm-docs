> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/sendsuggestionresponse(_:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/sendsuggestionresponse(_:))

# sendSuggestionResponse(\_:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends a response for a business suggestion.

## Declaration

```swift
final func sendSuggestionResponse(_ response: RCSService.SuggestionResponse) async throws
```

## Parameters

- `response`: `SuggestionResponse` containing the response parameters.

## See Also

### Responding to business suggestions

- [RCSService.SuggestionResponse](suggestionresponse.md): Structure representing a response to a business suggestion.
- [sendDeviceSpecifics(to:using:messageID:)](senddevicespecifics%28to_using_messageid_%29.md): Sends device specifics in response to a suggested action to send device specifics.

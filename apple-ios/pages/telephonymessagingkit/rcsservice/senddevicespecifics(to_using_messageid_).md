> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/senddevicespecifics(to:using:messageid:)](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/senddevicespecifics(to:using:messageid:))

# sendDeviceSpecifics(to:using:messageID:)

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+

Sends device specifics in response to a suggested action to send device specifics.

## Declaration

```swift
final func sendDeviceSpecifics(to destination: RCSHandle.URI, using cellularServiceID: CellularServiceID, messageID: RCSMessageID) async throws
```

## Parameters

- `destination`: The destination handle to send device specifics to.
- `cellularServiceID`: The service identifier to use for the message.
- `messageID`: The message identifier to use for the message.

<a id="discussion"></a>

## Discussion

Call this method after the person using the app selects a [RCSService.Business.Suggestion](business/suggestion.md) of type [RCSService.Business.Suggestion.action(\_:)](business/suggestion/action%28__%29.md), whose action type is [RCSService.Business.SuggestedAction.Action.sendDeviceSpecifics](business/suggestedaction/action-swift.enum/senddevicespecifics.md) .

> **Throws**

>  If the session is no longer valid, this method throws [TelephonyMessagingSession.Error.invalidSession](../telephonymessagingsession/error/invalidsession.md). If the method can’t process the request for other reasons it throws [RCSService.Error.internalError](error/internalerror.md).

## See Also

### Responding to business suggestions

- [sendSuggestionResponse(\_:)](sendsuggestionresponse%28__%29.md): Sends a response for a business suggestion.
- [RCSService.SuggestionResponse](suggestionresponse.md): Structure representing a response to a business suggestion.

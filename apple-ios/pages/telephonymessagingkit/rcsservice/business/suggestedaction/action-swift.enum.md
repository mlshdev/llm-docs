> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business/suggestedaction/action-swift.enum](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business/suggestedaction/action-swift.enum)

# RCSService.Business.SuggestedAction.Action

**Framework:** TelephonyMessagingKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+

Enumeration specifying the type of action contained.

## Declaration

```swift
enum Action
```

## Topics

### Handling URL and phone-dialing actions

- [RCSService.Business.SuggestedAction.Action.openURL(\_:)](action-swift.enum/openurl%28__%29.md): URL action.
- [RCSService.Business.OpenURLAction](../openurlaction.md): Suggested action to open a URL.
- [RCSService.Business.SuggestedAction.Action.dialPhoneNumber(\_:)](action-swift.enum/dialphonenumber%28__%29.md): Dialer phone number.
- [RCSService.Business.DialPhoneNumberAction](../dialphonenumberaction.md): Suggested action to dial a phone number.

### Handling location actions

- [RCSService.Business.SuggestedAction.Action.showLocation(\_:)](action-swift.enum/showlocation%28__%29.md): Show location action.
- [RCSService.Business.ShowLocationAction](../showlocationaction.md): Shows a location on a map.
- [RCSService.Business.SuggestedAction.Action.sendLocation](action-swift.enum/sendlocation.md): Send location from device to business.

### Handling calendar event actions

- [RCSService.Business.SuggestedAction.Action.createCalendarEvent(\_:)](action-swift.enum/createcalendarevent%28__%29.md): Calendar action.
- [RCSService.Business.CreateCalendarEventAction](../createcalendareventaction.md): Structure representing an action to create a calendar event.

### Handling composition actions

- [RCSService.Business.SuggestedAction.Action.composeText(\_:)](action-swift.enum/composetext%28__%29.md): Compose text action.
- [RCSService.Business.ComposeTextAction](../composetextaction.md): Compose a draft text message.
- [RCSService.Business.SuggestedAction.Action.composeRecording(\_:)](action-swift.enum/composerecording%28__%29.md): Compose recording action.
- [RCSService.Business.ComposeRecordingAction](../composerecordingaction.md): Compose a draft message with a media recording.

### Handling local behavior actions

- [RCSService.Business.SuggestedAction.Action.sendDeviceSpecifics](action-swift.enum/senddevicespecifics.md): Request specifics about the user’s device.
- [RCSService.Business.SuggestedAction.Action.enableDisplayedNotifications](action-swift.enum/enabledisplayednotifications.md): Ask the user to enable sending displayed notifications.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing suggested action properties

- [displayText](displaytext.md): Display text for action.
- [action](action-swift.property.md): The suggested action.

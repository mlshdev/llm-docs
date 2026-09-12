> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business/media](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business/media)

# RCSService.Business.Media

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure containing media information provided by a business.

## Declaration

```swift
struct Media
```

## Topics

### Accessing media properties

- [url](media/url.md): URL for media.
- [sha256Digest](media/sha256digest.md): Fingerprint that can be used to verify the integrity of the media referred to by `url`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [RCSService.Business.Card](card.md): Structure representing a standalone card.
- [RCSService.Business.CardCarousel](cardcarousel.md): Structure representing a card carousel.
- [RCSService.Business.ComposeRecordingAction](composerecordingaction.md): Compose a draft message with a media recording.
- [RCSService.Business.ComposeTextAction](composetextaction.md): Compose a draft text message.
- [RCSService.Business.CreateCalendarEventAction](createcalendareventaction.md): Structure representing an action to create a calendar event.
- [RCSService.Business.DialPhoneNumberAction](dialphonenumberaction.md): Suggested action to dial a phone number.
- [RCSService.Business.OpenURLAction](openurlaction.md): Suggested action to open a URL.
- [RCSService.Business.ShowLocationAction](showlocationaction.md): Shows a location on a map.
- [RCSService.Business.SuggestedAction](suggestedaction.md): Suggested action sent by a business.
- [RCSService.Business.SuggestedReply](suggestedreply.md): Suggested reply in response to a business message.
- [RCSService.Business.TelephoneDetails](telephonedetails.md): Structure containing the telephone number details provided by a business.
- [RCSService.Business.URIEntry](urientry.md): Structure containing details of a URI provided by a business.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/business](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/business)

# RCSService.Business

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

Structure containing details about a business.

## Declaration

```swift
struct Business
```

<a id="overview"></a>

## Overview

This structure and its supporting types correspond to the “chatbot” JSON schemas defined by the RCS specification.

To get information about a business, use the [CellularServiceID](../cellularserviceid.md) and [RCSHandle](../rcshandle.md) from an [RCSMessage](../rcsmessage.md) you receive in the RCS service’s [incomingMessageNotifications](incomingmessagenotifications.md), then call [businessInformation(for:)](businessinformation%28for_%29.md) on the RCS service, which returns an instance of the `Business` type.

Your app receives [RCSService.Business.Card](business/card.md) and [RCSService.Business.CardCarousel](business/cardcarousel.md) instances as cases of the [RCSMessage.Content](../rcsmessage/content-swift.enum.md) enumeration in messages received from the RCS service’s [incomingMessageNotifications](incomingmessagenotifications.md) asynchronous sequence. Use the properties of the received cards to display content sent from the business to the person using your app.

An [RCSService.IncomingMessageNotification](incomingmessagenotification.md) instance may contain [RCSService.Business.Suggestion](business/suggestion.md) instances in its [suggestions](incomingmessagenotification/suggestions.md) array. These suggestions can include a [RCSService.Business.SuggestedAction](business/suggestedaction.md) or a [RCSService.Business.SuggestedReply](business/suggestedreply.md). Act on these, then call [sendSuggestionResponse(\_:)](sendsuggestionresponse%28__%29.md) on the RCS service.

## Topics

### Accessing business identity information

- [description](business/description.md): Description for business.
- [providerName](business/providername.md): Name of business provider.
- [organizationNames](business/organizationnames.md): Array of names specified by business.
- [RCSService.Business.OrganizationName](business/organizationname.md): Structure containing details about a business’ name.
- [categoryNames](business/categorynames.md): Array of category names which can be used to filter a list of businesses.

### Accessing business contact information

- [communicationAddress](business/communicationaddress-swift.property.md): Communication details of business.
- [RCSService.Business.CommunicationAddress](business/communicationaddress-swift.struct.md): Structure containing a business’ communication details.
- [addressEntries](business/addressentries.md): Array of business’ address locations.
- [RCSService.Business.AddressEntry](business/addressentry.md): Structure containing address details provided by a business.
- [emailAddress](business/emailaddress.md): Service email address.
- [websiteURL](business/websiteurl.md): URL for business’ website.
- [verificationDetails](business/verificationdetails-swift.property.md): Verification information about business.
- [RCSService.Business.VerificationDetails](business/verificationdetails-swift.struct.md): Structure containing verification details of a business.

### Accessing terms and conditions

- [termsAndConditionsURL](business/termsandconditionsurl.md): URL for business’ terms and conditions.

### Accessing display information

- [themeColor](business/themecolor.md): Theme color to apply to conversation view.
- [backgroundImageURL](business/backgroundimageurl.md): Background image to apply to business information page.
- [styleSheetTemplateURL](business/stylesheettemplateurl.md): URL referring to a CSS template to be used in rich cards sent by business.
- [persistentMenu](business/persistentmenu.md): Persistent menu with a nested collection of suggested replies and suggested actions.
- [RCSService.Business.Menu](business/menu.md): A menu provided by business.

### Accessing media entries

- [mediaEntries](business/mediaentries.md): Media entries provided by business.
- [RCSService.Business.MediaEntry](business/mediaentry.md): Structure containing media details provided by a business.

### Accessing version information

- [version](business/version.md): Version of contents.

### Supporting types

- [RCSService.Business.Card](business/card.md): Structure representing a standalone card.
- [RCSService.Business.CardCarousel](business/cardcarousel.md): Structure representing a card carousel.
- [RCSService.Business.ComposeRecordingAction](business/composerecordingaction.md): Compose a draft message with a media recording.
- [RCSService.Business.ComposeTextAction](business/composetextaction.md): Compose a draft text message.
- [RCSService.Business.CreateCalendarEventAction](business/createcalendareventaction.md): Structure representing an action to create a calendar event.
- [RCSService.Business.DialPhoneNumberAction](business/dialphonenumberaction.md): Suggested action to dial a phone number.
- [RCSService.Business.Media](business/media.md): Structure containing media information provided by a business.
- [RCSService.Business.OpenURLAction](business/openurlaction.md): Suggested action to open a URL.
- [RCSService.Business.ShowLocationAction](business/showlocationaction.md): Shows a location on a map.
- [RCSService.Business.SuggestedAction](business/suggestedaction.md): Suggested action sent by a business.
- [RCSService.Business.SuggestedReply](business/suggestedreply.md): Suggested reply in response to a business message.
- [RCSService.Business.TelephoneDetails](business/telephonedetails.md): Structure containing the telephone number details provided by a business.
- [RCSService.Business.URIEntry](business/urientry.md): Structure containing details of a URI provided by a business.

### Structures

- [RCSService.Business.Capabilities](business/capabilities-swift.struct.md): Structure containing details about a business’ capabilities.
- [RCSService.Business.WelcomeMessage](business/welcomemessage-swift.struct.md): Structure containing details about a business’ welcome message.

### Instance Properties

- [capabilities](business/capabilities-swift.property.md)
- [welcomeMessage](business/welcomemessage-swift.property.md)

### Enumerations

- [RCSService.Business.Feature](business/feature.md): Enumeration representing an RCS service feature supported by a business.
- [RCSService.Business.Suggestion](business/suggestion.md): Enumeration representing a suggestion from a business.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving business information

- [businessInformation(for:)](businessinformation%28for_%29.md): Requests business information for a specified handle.
- [RCSService.BusinessInformationRequest](businessinformationrequest.md): A structure representing a request to retrieve information about a business.

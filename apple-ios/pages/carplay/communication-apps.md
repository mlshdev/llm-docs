> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/communication-apps

# Communication

**Interface languages:** Swift, Objective-C

**Framework:** CarPlay  
**Kind:** API Collection

Build an app that offers SiriKit messaging or VoIP calling services.

<a id="overview"></a>

## Overview

A communication app helps people send and receive messages or VoIP calls. Create this type of app when communication is a focal part of your app’s content. In your app’s interface, display message threads, call history, and favorites using lists. Present additional types of content using the other templates available to your app.

This type of app supports the following CarPlay templates:

- [CPContactTemplate](cpcontacttemplate.md)
- [CPInformationTemplate](cpinformationtemplate.md)
- [CPNowPlayingTemplate](cpnowplayingtemplate.md)
- [CPTabBarTemplate](cptabbartemplate.md)
- [CPListTemplate](cplisttemplate.md)
- [CPGridTemplate](cpgridtemplate.md)
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md)
- [CPActionSheetTemplate](cpactionsheettemplate.md)
- [CPAlertTemplate](cpalerttemplate.md)

## Topics

### Essentials

- [CarPlay Communication App](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.carplay-communication): A Boolean value that indicates whether the CarPlay app offers SiriKit messaging or VoIP calling services.

### List items

- [CPMessageListItem](cpmessagelistitem.md): A list template row that manages a text message thread or contact.
- [CPMessageListItemLeadingConfiguration](cpmessagelistitemleadingconfiguration.md): A type that defines the content at the leading edge of a message list item’s row.
- [CPMessageListItemTrailingConfiguration](cpmessagelistitemtrailingconfiguration.md): A type that defines the content at the trailing edge of a message list item’s row.
- [CPMaximumMessageItemImageSize](cpmaximummessageitemimagesize.md): The maximum size for images in the leading and trailing regions of a message list item.
- [CPMaximumMessageItemLeadingDetailTextImageSize](cpmaximummessageitemleadingdetailtextimagesize.md): The maximum size for images in the detail text image of a message list item.

### Grid item

- [CPMessageGridItemConfiguration](cpmessagegriditemconfiguration.md): A type that associates message-related information with a grid button.

## See Also

### CarPlay app types

- [Audio](audio.md): Build an app that plays audio or video content.
- [Driving task](driving-task.md): Build an app that helps people perform driving-related tasks.
- [EV charging](ev-charging.md): Build an app that provides helpful information about nearby charging facilities.
- [Fueling](fueling.md): Build an app that provides helpful information about nearby fueling stations.
- [Navigation](navigation-apps.md): Build an app that provides turn-by-turn directions to someone while driving.
- [Parking](parking.md): Build an app that provides helpful information about nearby parking facilities.
- [Public safety](public-safety.md): Build an app that offers public safety information to someone who’s driving.
- [Quick food ordering](quick-food-ordering.md): Build an app that helps someone order food for pickup.
- [Video](video.md): Build an app that plays video content exclusively.
- [Voice-based conversation](voice-based-conversation.md): Build an app that responds to questions or requests and performs actions.

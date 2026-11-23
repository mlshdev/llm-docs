> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/all-templates-and-supporting-types

# All templates and supporting types

**Interface languages:** Swift, Objective-C

**Framework:** CarPlay  
**Kind:** API Collection

Explore the templates you use to build the interface of your CarPlay app.

<a id="overview"></a>

## Overview

Templates are objects you use to specify the content of your app’s CarPlay interface. A template manages the data you want to present, and offers some control over the presentation of that content. When you ask CarPlay to display a template, iOS generates the views needed to display that content and delivers them to CarPlay, which handles the presentation of that content in the vehicle. This process lets you focus on your app’s content while the system handles differences in display technologies, sizes, resolutions, interface configurations, and more.

Some CarPlay templates offer equivalent features to iOS views and view controllers, and you use them in similar situations. For example, the [CPTabBarTemplate](cptabbartemplate.md) creates a tab bar interface similar to an iOS tab bar controller. Templates like [CPListTemplate](cplisttemplate.md) and [CPGridTemplate](cpgridtemplate.md) are building blocks of most interfaces and available in all app types. Other templates support s pecialized experiences and are available only in apps that offer relevant features.

> **Note**

> For guidance on how to build your app’s interface, see [CarPlay](https://developer.apple.com/design/human-interface-guidelines/carplay) in Human Interface Guidelines.

## Topics

### Tab bar

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.

### Navigation bar

- [CPBarButtonProviding](cpbarbuttonproviding.md): The interface templates you use to manage buttons in the navigation bar.
- [CPBarButton](cpbarbutton.md): A button that appears in a navigation bar.
- [CPMessageComposeBarButton](cpmessagecomposebarbutton.md): A button that activates Siri and initiates the process for composing a message.

### Lists

- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPListSection](cplistsection.md): A container that groups related items in a list interface.
- [CPListItem](cplistitem.md): A selectable row in a list interface.
- [CPListImageRowItem](cplistimagerowitem.md): A row type that displays multiple sub-elements horizontally in a variety of styles.
- [Supporting types for lists](list-content.md): Create sections, single-line items, multi-element rows, headers, and other content for your list.

### Grids

- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPGridButton](cpgridbutton.md): A menu item button displayed on a grid template.
- [CPMessageGridItemConfiguration](cpmessagegriditemconfiguration.md): A type that associates message-related information with a grid button.
- [CPGridTemplateMaximumItems](cpgridtemplatemaximumitems.md): The maximum number of buttons that a grid template displays.

### Maps

- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
- [CPMapPanel](cpmappanel.md): An overlay for a custom map interface that shows navigation-related instructions or information over a portion of the map.
- [CPMapPanelSection](cpmappanelsection.md): A single section of a map panel that you fill with a title and one or more items.
- [CPMapPanelItem](cpmappanelitem.md): A type that manages the waypoint, route, trip, and other information you display in a map panel.
- [CPMapPanelButtonConfiguration](cpmappanelbuttonconfiguration.md): A type that manages the action buttons and travel estimates in a map panel.
- [CPChargingStationConnection](cpchargingstationconnection.md): Details about the equipment at an electric vehicle charging station.

### Now playing

- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPNowPlayingTemplateObserver](cpnowplayingtemplateobserver.md): Methods for responding to interactions with buttons in the Now Playing template.
- [Now Playing supporting types](now-playing-support.md): Add Now Playing buttons to your interface and configure overlays with sports information.

### Point of interest

- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPPointOfInterestTemplateDelegate](cppointofinteresttemplatedelegate.md): The methods to handle a point of interest template’s events.
- [CPPointOfInterest](cppointofinterest.md): An object that describes a point of interest on the template’s map and in its scrollable picker.

### Information

- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPInformationItem](cpinformationitem.md): A data object that provides content for an information template.
- [CPInformationRatingItem](cpinformationratingitem.md): A data object that provides rated content for an information template.

### Contacts

- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPContact](cpcontact.md): A data object that contains information about a contact.
- [CPContactCallButton](cpcontactcallbutton.md): A button for calling the contact.
- [CPContactDirectionsButton](cpcontactdirectionsbutton.md): A button for getting directions to the contact’s location.
- [CPContactMessageButton](cpcontactmessagebutton.md): A button that activates Siri and initiates the compose message flow.

### Search

- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.

### Voice control

- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPVoiceControlState](cpvoicecontrolstate.md): A voice control state containing title variants and images for use by a voice control template.

### Action sheets

- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.

### Alerts

- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.
- [CPAlertAction](cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.

### Common types

- [CPTemplate](cptemplate.md): An abstract base class for interface templates.
- [CPTextButton](cptextbutton.md): A button that displays a stylized title.
- [CPButton](cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](cpimageset.md): Light and dark representations of an image.
- [CPPanel](cppanel.md): A type that provides the common behaviors for panels you display on top of your app’s content.
- [CPPanelItem](cppanelitem.md): A type that provides the common behaviors for items you display in a section of a panel.
- [CPPanelButtonConfiguration](cppanelbuttonconfiguration.md): A type that provides the common behaviors for a button layout in a panel.

## See Also

### Interface templates

- [CPTabBarTemplate](cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPListTemplate](cplisttemplate.md): A template that displays a single-column list of items in one of several visual styles.
- [CPGridTemplate](cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPMapTemplate](cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPNowPlayingTemplate](cpnowplayingtemplate.md): A shared system template that shows the currently selected audio content and offers controls to manage playback.
- [CPPointOfInterestTemplate](cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPContactTemplate](cpcontacttemplate.md): A template that displays information about a person or a business.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.
- [CPActionSheetTemplate](cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](cpalerttemplate.md): A template that displays a modal alert.

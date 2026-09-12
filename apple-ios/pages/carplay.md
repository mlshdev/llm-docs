> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay](https://developer.apple.com/documentation/carplay)

# CarPlay (Swift)

**Framework:** CarPlay  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Integrate CarPlay in apps related to audio, communication, navigation, parking, EV charging, food ordering, and more.

<a id="overview"></a>

## Overview

Use the CarPlay framework to create an in-car experience for your app. The framework provides templates for building a version of your app’s interface suitable for presentation on a vehicle’s displays. Add the templates you want to your app and customize them to suit your content. You control the content of the templates, but the framework controls certain aspects of the template interface elements, such as the touch target size, font size, font color, and highlights.

CarPlay features run when the current device supports CarPlay and when that device is connected to an appropriately equipped vehicle. CarPlay handles variations in vehicle systems, letting you focus on your content. When a person runs your app from their vehicle, the system generates and hosts your app’s interface for you. If the device doesn’t support CarPlay, the system doesn’t try to access your app’s CarPlay features.

You can use other technologies to drive portions of your app’s CarPlay interface. Messaging apps can include [SiriKit](https://developer.apple.com/documentation/sirikit) support to allow someone to read or send messages. VoIP apps can use [CallKit](https://developer.apple.com/documentation/callkit) to manage incoming and outgoing calls, often in combination with SiriKit call support. Navigation apps can include [MapKit](https://developer.apple.com/documentation/mapkit) support.

> **Related Sessions from WWDC20**

>  Session 10635: [Accelerate Your App with CarPlay](https://developer.apple.com/videos/play/wwdc2020/10635/)

## Topics

### CarPlay Integration

- [Requesting CarPlay Entitlements](carplay/requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](carplay/displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](carplay/supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](carplay/using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](carplay/cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPTemplateApplicationSceneDelegate](carplay/cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
- [CPSessionConfiguration](carplay/cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.

### General Purpose Templates

Display your app’s content using a variety of templates that provide a consistent CarPlay layout and appearance.

- [CPListTemplate](carplay/cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](carplay/cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](carplay/cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](carplay/cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](carplay/cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

### Audio

Templates that are available exclusively to apps with the audio entitlement.

- [Integrating CarPlay with Your Music App](carplay/integrating-carplay-with-your-music-app.md): Configure your music app to work with CarPlay by displaying a custom UI.
- [CPNowPlayingTemplate](carplay/cpnowplayingtemplate.md): A shared system template that displays Now Playing information.

### Instrument cluster

Symbols that are available for managing the instrument cluster.

- [CPInstrumentClusterController](carplay/cpinstrumentclustercontroller.md)
- [CPInstrumentClusterControllerDelegate](carplay/cpinstrumentclustercontrollerdelegate.md)
- [CPTemplateApplicationInstrumentClusterScene](carplay/cptemplateapplicationinstrumentclusterscene.md)
- [CPTemplateApplicationInstrumentClusterSceneDelegate](carplay/cptemplateapplicationinstrumentclusterscenedelegate.md)

### Navigation

Symbols that are available exclusively to apps with the navigation entitlement.

- [Integrating CarPlay with Your Navigation App](carplay/integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](carplay/cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](carplay/cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](carplay/cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](carplay/cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](carplay/cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

### Location and Information

Templates that are available exclusively to apps with the parking, EV-charging, or food-ordering entitlements.

- [CPPointOfInterestTemplate](carplay/cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](carplay/cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPTextButton](carplay/cptextbutton.md): A button that displays a stylized title.
- [Integrating CarPlay with your quick-ordering app](carplay/integrating-carplay-with-your-quick-ordering-app.md): Configure your food-ordering app to work with CarPlay.

### Maneuvers

- [CPManeuver](carplay/cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverState](carplay/cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](carplay/cpmaneuvertype.md): Values that describe types of navigation maneuvers.

### Routes, lanes and junctions

- [CPRouteInformation](carplay/cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](carplay/cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](carplay/cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](carplay/cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](carplay/cpjunctiontype.md): Values that represent types of roadway junctions.

### Communication

Templates that are available exclusively to apps with the communication entitlement.

- [CPContactTemplate](carplay/cpcontacttemplate.md): A template that displays information about a person or a business.

### Actions and Alerts

- [CPActionSheetTemplate](carplay/cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](carplay/cpalerttemplate.md): A template that displays a modal alert.
- [CPAlertAction](carplay/cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.

### Related Types

- [CPButton](carplay/cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](carplay/cpimageset.md): Light and dark representations of an image.
- [CarPlayErrorDomain](carplay/carplayerrordomain.md): The domain that CarPlay uses for any errors it provides.

### Deprecated

- [Deprecated Symbols](carplay/deprecated-symbols.md): Symbols that the CarPlay framework no longer supports.

### Reference

- [CarPlay Enumerations](carplay/carplay-enumerations.md)
- [CarPlay Constants](carplay/carplay-constants.md)

### Classes

- [CPChargingStationConnection](carplay/cpchargingstationconnection.md)
- [CPImageOverlay](carplay/cpimageoverlay.md): An overlay that displays information over an image.
- [CPListImageRowItemCardElement](carplay/cplistimagerowitemcardelement.md)
- [CPListImageRowItemCondensedElement](carplay/cplistimagerowitemcondensedelement.md)
- [CPListImageRowItemElement](carplay/cplistimagerowitemelement.md): Abstract superclass for a a row item element object.
- [CPListImageRowItemGridElement](carplay/cplistimagerowitemgridelement.md)
- [CPListImageRowItemImageGridElement](carplay/cplistimagerowitemimagegridelement.md)
- [CPListImageRowItemRowElement](carplay/cplistimagerowitemrowelement.md)
- [CPListTemplateDetailsHeader](carplay/cplisttemplatedetailsheader.md): A header for list templates that displays rich media content with action buttons.
- [CPMapPanel](carplay/cpmappanel.md)
- [CPMapPanelButtonConfiguration](carplay/cpmappanelbuttonconfiguration.md)
- [CPMapPanelItem](carplay/cpmappanelitem.md)
- [CPMapPanelSection](carplay/cpmappanelsection.md)
- [CPMapTemplateWaypoint](carplay/cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPMessageGridItemConfiguration](carplay/cpmessagegriditemconfiguration.md)
- [CPMultiStopCardConfiguration](carplay/cpmultistopcardconfiguration.md)
- [CPNavigationWaypoint](carplay/cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPNowPlayingMode](carplay/cpnowplayingmode.md)
- [CPNowPlayingModeSports](carplay/cpnowplayingmodesports.md): The sports mode represents a layout for now playing suited to live-streaming or recorded playback of a sporting event that features exactly two teams.
- [CPNowPlayingSportsClock](carplay/cpnowplayingsportsclock.md): A representation of the amount of time elapsed so far in this event, for events where the clock counts UP.
- [CPNowPlayingSportsEventStatus](carplay/cpnowplayingsportseventstatus.md): A representation of the status of a sporting event.
- [CPNowPlayingSportsTeam](carplay/cpnowplayingsportsteam.md): A representation of a sports team for the now playing screen, in sports that have exactly two teams.
- [CPNowPlayingSportsTeamLogo](carplay/cpnowplayingsportsteamlogo.md): A logo image or, if no image is available, an abbreviation or initialism for this team.
- [CPPanel](carplay/cppanel.md)
- [CPPanelButtonConfiguration](carplay/cppanelbuttonconfiguration.md)
- [CPPanelItem](carplay/cppanelitem.md)
- [CPPlaybackConfiguration](carplay/cpplaybackconfiguration.md)
- [CPRouteDetail](carplay/cproutedetail.md)
- [CPRouteSegment](carplay/cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPSportsOverlay](carplay/cpsportsoverlay.md): A sports overlay that displays left and right team information.
- [CPThumbnailImage](carplay/cpthumbnailimage.md)

### Protocols

- [CPPlayableItem](carplay/cpplayableitem.md)

### Structures

- [CPLocationCoordinate3D](carplay/cplocationcoordinate3d.md): CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

### Variables

- [CPMaximumMessageItemLeadingDetailTextImageSize](carplay/cpmaximummessageitemleadingdetailtextimagesize.md): Maximum size of an image for the detailed text leading image.

### Functions

- [NSStringFromCPJunctionType(\_:)](carplay/nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus(\_:)](carplay/nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPManeuverType(\_:)](carplay/nsstringfromcpmaneuvertype%28__%29.md)
- [NSStringFromCPRerouteReason(\_:)](carplay/nsstringfromcpreroutereason%28__%29.md)
- [NSStringFromCPTrafficSide(\_:)](carplay/nsstringfromcptrafficside%28__%29.md)

### Enumerations

- [CPRerouteReason](carplay/cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](carplay/cproutesource.md)

# CarPlay (Objective-C)

**Framework:** CarPlay  
**Kind:** Framework  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Integrate CarPlay in apps related to audio, communication, navigation, parking, EV charging, food ordering, and more.

<a id="overview"></a>

## Overview

Use the CarPlay framework to create an in-car experience for your app. The framework provides templates for building a version of your app’s interface suitable for presentation on a vehicle’s displays. Add the templates you want to your app and customize them to suit your content. You control the content of the templates, but the framework controls certain aspects of the template interface elements, such as the touch target size, font size, font color, and highlights.

CarPlay features run when the current device supports CarPlay and when that device is connected to an appropriately equipped vehicle. CarPlay handles variations in vehicle systems, letting you focus on your content. When a person runs your app from their vehicle, the system generates and hosts your app’s interface for you. If the device doesn’t support CarPlay, the system doesn’t try to access your app’s CarPlay features.

You can use other technologies to drive portions of your app’s CarPlay interface. Messaging apps can include [SiriKit](https://developer.apple.com/documentation/sirikit) support to allow someone to read or send messages. VoIP apps can use [CallKit](https://developer.apple.com/documentation/callkit) to manage incoming and outgoing calls, often in combination with SiriKit call support. Navigation apps can include [MapKit](https://developer.apple.com/documentation/mapkit) support.

> **Related Sessions from WWDC20**

>  Session 10635: [Accelerate Your App with CarPlay](https://developer.apple.com/videos/play/wwdc2020/10635/)

## Topics

### CarPlay Integration

- [Requesting CarPlay Entitlements](carplay/requesting-carplay-entitlements.md): Configure your CarPlay-enabled app with the entitlements it requires.
- [Displaying Content in CarPlay](carplay/displaying-content-in-carplay.md): Use scenes to present your app’s content on the vehicle’s built-in screen.
- [Supporting Previous Versions of iOS](carplay/supporting-previous-versions-of-ios.md): Make your CarPlay-enabled apps compatible with older system versions, such as iOS 13 and earlier.
- [Using the CarPlay Simulator](carplay/using-the-carplay-simulator.md): Configure Simulator to run and debug your CarPlay-enabled app.
- [CPTemplateApplicationScene](carplay/cptemplateapplicationscene.md): A CarPlay scene that controls your app’s user interface.
- [CPTemplateApplicationSceneDelegate](carplay/cptemplateapplicationscenedelegate.md): The methods for responding to the life cycle events of your app’s scene.
- [CPSessionConfiguration](carplay/cpsessionconfiguration.md): An object that provides vehicle properties and configuration for the CarPlay environment.

### General Purpose Templates

Display your app’s content using a variety of templates that provide a consistent CarPlay layout and appearance.

- [CPListTemplate](carplay/cplisttemplate.md): A template that displays and manages a list of items.
- [CPGridTemplate](carplay/cpgridtemplate.md): A template that displays and manages a grid of items.
- [CPTabBarTemplate](carplay/cptabbartemplate.md): A container template that displays and manages other templates, presenting them as tabs.
- [CPTemplate](carplay/cptemplate.md): An abstract base class for interface templates.
- [CPBarButtonProviding](carplay/cpbarbuttonproviding.md): The methods that templates use to provide buttons for the navigation bar.

### Audio

Templates that are available exclusively to apps with the audio entitlement.

- [Integrating CarPlay with Your Music App](carplay/integrating-carplay-with-your-music-app.md): Configure your music app to work with CarPlay by displaying a custom UI.
- [CPNowPlayingTemplate](carplay/cpnowplayingtemplate.md): A shared system template that displays Now Playing information.

### Instrument cluster

Symbols that are available for managing the instrument cluster.

- [CPInstrumentClusterController](carplay/cpinstrumentclustercontroller.md)
- [CPInstrumentClusterControllerDelegate](carplay/cpinstrumentclustercontrollerdelegate.md)
- [CPTemplateApplicationInstrumentClusterScene](carplay/cptemplateapplicationinstrumentclusterscene.md)
- [CPTemplateApplicationInstrumentClusterSceneDelegate](carplay/cptemplateapplicationinstrumentclusterscenedelegate.md)

### Navigation

Symbols that are available exclusively to apps with the navigation entitlement.

- [Integrating CarPlay with Your Navigation App](carplay/integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](carplay/cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](carplay/cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPMapTemplate](carplay/cpmaptemplate.md): A template that displays a navigation overlay that your app draws on the map.
- [CPSearchTemplate](carplay/cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](carplay/cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

### Location and Information

Templates that are available exclusively to apps with the parking, EV-charging, or food-ordering entitlements.

- [CPPointOfInterestTemplate](carplay/cppointofinteresttemplate.md): A template that displays a map with selectable points of interest.
- [CPInformationTemplate](carplay/cpinformationtemplate.md): A template that provides information for a point of interest, food order, parking location, or charging location.
- [CPTextButton](carplay/cptextbutton.md): A button that displays a stylized title.
- [Integrating CarPlay with your quick-ordering app](carplay/integrating-carplay-with-your-quick-ordering-app.md): Configure your food-ordering app to work with CarPlay.

### Maneuvers

- [CPManeuver](carplay/cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverState](carplay/cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](carplay/cpmaneuvertype.md): Values that describe types of navigation maneuvers.

### Routes, lanes and junctions

- [CPRouteInformation](carplay/cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPLane](carplay/cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](carplay/cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](carplay/cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](carplay/cpjunctiontype.md): Values that represent types of roadway junctions.

### Communication

Templates that are available exclusively to apps with the communication entitlement.

- [CPContactTemplate](carplay/cpcontacttemplate.md): A template that displays information about a person or a business.

### Actions and Alerts

- [CPActionSheetTemplate](carplay/cpactionsheettemplate.md): A template that displays a modal action sheet.
- [CPAlertTemplate](carplay/cpalerttemplate.md): A template that displays a modal alert.
- [CPAlertAction](carplay/cpalertaction.md): An object that encapsulates an action the user can perform on an action sheet or alert.

### Related Types

- [CPButton](carplay/cpbutton.md): A button that displays an image and invokes a handler when the user taps it.
- [CPImageSet](carplay/cpimageset.md): Light and dark representations of an image.
- [CarPlayErrorDomain](carplay/carplayerrordomain.md): The domain that CarPlay uses for any errors it provides.

### Deprecated

- [Deprecated Symbols](carplay/deprecated-symbols.md): Symbols that the CarPlay framework no longer supports.

### Reference

- [CarPlay Enumerations](carplay/carplay-enumerations.md)
- [CarPlay Constants](carplay/carplay-constants.md)

### Classes

- [CPChargingStationConnection](carplay/cpchargingstationconnection.md)
- [CPImageOverlay](carplay/cpimageoverlay.md): An overlay that displays information over an image.
- [CPListImageRowItemCardElement](carplay/cplistimagerowitemcardelement.md)
- [CPListImageRowItemCondensedElement](carplay/cplistimagerowitemcondensedelement.md)
- [CPListImageRowItemElement](carplay/cplistimagerowitemelement.md): Abstract superclass for a a row item element object.
- [CPListImageRowItemGridElement](carplay/cplistimagerowitemgridelement.md)
- [CPListImageRowItemImageGridElement](carplay/cplistimagerowitemimagegridelement.md)
- [CPListImageRowItemRowElement](carplay/cplistimagerowitemrowelement.md)
- [CPListTemplateDetailsHeader](carplay/cplisttemplatedetailsheader.md): A header for list templates that displays rich media content with action buttons.
- [CPMapPanel](carplay/cpmappanel.md)
- [CPMapPanelButtonConfiguration](carplay/cpmappanelbuttonconfiguration.md)
- [CPMapPanelItem](carplay/cpmappanelitem.md)
- [CPMapPanelSection](carplay/cpmappanelsection.md)
- [CPMapTemplateWaypoint](carplay/cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPMessageGridItemConfiguration](carplay/cpmessagegriditemconfiguration.md)
- [CPMultiStopCardConfiguration](carplay/cpmultistopcardconfiguration.md)
- [CPNavigationWaypoint](carplay/cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPNowPlayingMode](carplay/cpnowplayingmode.md)
- [CPNowPlayingModeSports](carplay/cpnowplayingmodesports.md): The sports mode represents a layout for now playing suited to live-streaming or recorded playback of a sporting event that features exactly two teams.
- [CPNowPlayingSportsClock](carplay/cpnowplayingsportsclock.md): A representation of the amount of time elapsed so far in this event, for events where the clock counts UP.
- [CPNowPlayingSportsEventStatus](carplay/cpnowplayingsportseventstatus.md): A representation of the status of a sporting event.
- [CPNowPlayingSportsTeam](carplay/cpnowplayingsportsteam.md): A representation of a sports team for the now playing screen, in sports that have exactly two teams.
- [CPNowPlayingSportsTeamLogo](carplay/cpnowplayingsportsteamlogo.md): A logo image or, if no image is available, an abbreviation or initialism for this team.
- [CPPanel](carplay/cppanel.md)
- [CPPanelButtonConfiguration](carplay/cppanelbuttonconfiguration.md)
- [CPPanelItem](carplay/cppanelitem.md)
- [CPPlaybackConfiguration](carplay/cpplaybackconfiguration.md)
- [CPRouteDetail](carplay/cproutedetail.md)
- [CPRouteSegment](carplay/cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPSportsOverlay](carplay/cpsportsoverlay.md): A sports overlay that displays left and right team information.
- [CPThumbnailImage](carplay/cpthumbnailimage.md)

### Protocols

- [CPMapPanelDelegate](carplay/cpmappanel/delegate-swift.protocol.md)
- [CPPlayableItem](carplay/cpplayableitem.md)

### Structures

- [CPLocationCoordinate3D](carplay/cplocationcoordinate3d.md): CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

### Variables

- [CPMaximumMessageItemLeadingDetailTextImageSize](carplay/cpmaximummessageitemleadingdetailtextimagesize.md): Maximum size of an image for the detailed text leading image.
- [CPTemplateApplicationDashboardSceneSessionRoleApplication](carplay/cptemplateapplicationdashboardscenesessionroleapplication.md)
- [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](carplay/cptemplateapplicationinstrumentclusterscenesessionroleapplication.md)
- [CPTemplateApplicationSceneSessionRoleApplication](carplay/cptemplateapplicationscenesessionroleapplication.md)

### Functions

- [NSStringFromCPJunctionType](carplay/nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus](carplay/nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPManeuverType](carplay/nsstringfromcpmaneuvertype%28__%29.md)
- [NSStringFromCPRerouteReason](carplay/nsstringfromcpreroutereason%28__%29.md)
- [NSStringFromCPTrafficSide](carplay/nsstringfromcptrafficside%28__%29.md)

### Macros

- [CARPLAY_TEMPLATE_UI_ACTOR](carplay/carplay_template_ui_actor.md)

### Enumerations

- [CPChargingStationConnectionConnector](carplay/cpchargingstationconnection/connector-swift.enum.md)
- [CPImageOverlayAlignment](carplay/cpimageoverlay/alignment-swift.enum.md): Alignment options for positioning.
- [CPListImageRowItemCondensedElementShape](carplay/cplistimagerowitemcondensedelement/shape.md): Types of shape used to draw a condensed row element.
- [CPListImageRowItemImageGridElementShape](carplay/cplistimagerowitemimagegridelement/shape.md): Types of shape used to draw a list item.
- [CPPlaybackAction](carplay/cpplaybackconfiguration/action.md): The playback action to perform on the item.
- [CPPlaybackPresentation](carplay/cpplaybackconfiguration/presentation.md): The style of media presentation shown after selecting the item.
- [CPRerouteReason](carplay/cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](carplay/cproutesource.md)

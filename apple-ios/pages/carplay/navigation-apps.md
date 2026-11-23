> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/navigation-apps

# Navigation (Swift)

**Framework:** CarPlay  
**Kind:** API Collection

Build an app that provides turn-by-turn directions to someone while driving.

<a id="overview"></a>

## Overview

A navigation app provides turn-by-turn driving directions and information about upcoming maneuvers. Use this type of app to deliver your custom map content, and provide additional information on top of the map using the CarPlay map template and map panels. Navigation apps can offer route choices, multiple stops along the route, and guidance on the the best lane, road, or junction to take. Apps can also replicate most of this content in the vehicle’s instrument cluster or in the CarPlay dashboard using separate scenes.

This type of app supports the following CarPlay templates:

- [CPMapTemplate](cpmaptemplate.md)

- [CPContactTemplate](cpcontacttemplate.md)
- [CPInformationTemplate](cpinformationtemplate.md)
- [CPSearchTemplate](cpsearchtemplate.md)
- [CPTabBarTemplate](cptabbartemplate.md)
- [CPListTemplate](cplisttemplate.md)
- [CPGridTemplate](cpgridtemplate.md)
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md)
- [CPActionSheetTemplate](cpactionsheettemplate.md)
- [CPAlertTemplate](cpalerttemplate.md)

## Topics

### Essentials

- [CarPlay Navigation app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.carplay-maps): A Boolean value that indicates whether the CarPlay app provides turn-by-turn directions.
- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

### Instrument cluster display

Symbols that are available for managing the instrument cluster.

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

### Session management

- [CPNavigationSession](cpnavigationsession.md): An object that represents an active route guidance session.

### Trip and waypoints

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.
- [CPMapTemplateWaypoint](cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)

### Route details

- [CPRouteChoice](cproutechoice.md): A possible route for a trip.
- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](cproutesource.md)
- [NSStringFromCPRerouteReason(\_:)](nsstringfromcpreroutereason%28__%29.md)

### Maneuvers

- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
- [CPTravelEstimates](cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.
- [CPTripPreviewTextConfiguration](cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.
- [NSStringFromCPManeuverType(\_:)](nsstringfromcpmaneuvertype%28__%29.md)
- [CPLocationCoordinate3D](cplocationcoordinate3d.md): CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

### Lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType(\_:)](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus(\_:)](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide(\_:)](nsstringfromcptrafficside%28__%29.md)

### Navigation alerts

- [CPNavigationAlert](cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

## See Also

### CarPlay app types

- [Audio](audio.md): Build an app that plays audio or video content.
- [Communication](communication-apps.md): Build an app that offers SiriKit messaging or VoIP calling services.
- [Driving task](driving-task.md): Build an app that helps people perform driving-related tasks.
- [EV charging](ev-charging.md): Build an app that provides helpful information about nearby charging facilities.
- [Fueling](fueling.md): Build an app that provides helpful information about nearby fueling stations.
- [Parking](parking.md): Build an app that provides helpful information about nearby parking facilities.
- [Public safety](public-safety.md): Build an app that offers public safety information to someone who’s driving.
- [Quick food ordering](quick-food-ordering.md): Build an app that helps someone order food for pickup.
- [Video](video.md): Build an app that plays video content exclusively.
- [Voice-based conversation](voice-based-conversation.md): Build an app that responds to questions or requests and performs actions.

# Navigation (Objective-C)

**Framework:** CarPlay  
**Kind:** API Collection

Build an app that provides turn-by-turn directions to someone while driving.

<a id="overview"></a>

## Overview

A navigation app provides turn-by-turn driving directions and information about upcoming maneuvers. Use this type of app to deliver your custom map content, and provide additional information on top of the map using the CarPlay map template and map panels. Navigation apps can offer route choices, multiple stops along the route, and guidance on the the best lane, road, or junction to take. Apps can also replicate most of this content in the vehicle’s instrument cluster or in the CarPlay dashboard using separate scenes.

This type of app supports the following CarPlay templates:

- [CPMapTemplate](cpmaptemplate.md)

- [CPContactTemplate](cpcontacttemplate.md)
- [CPInformationTemplate](cpinformationtemplate.md)
- [CPSearchTemplate](cpsearchtemplate.md)
- [CPTabBarTemplate](cptabbartemplate.md)
- [CPListTemplate](cplisttemplate.md)
- [CPGridTemplate](cpgridtemplate.md)
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md)
- [CPActionSheetTemplate](cpactionsheettemplate.md)
- [CPAlertTemplate](cpalerttemplate.md)

## Topics

### Essentials

- [CarPlay Navigation app](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.carplay-maps): A Boolean value that indicates whether the CarPlay app provides turn-by-turn directions.
- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.

### Dashboard display

- [CPDashboardController](cpdashboardcontroller.md): A controller that provides shortcut buttons for the CarPlay Dashboard.
- [CPDashboardButton](cpdashboardbutton.md): A shortcut button for placement on the CarPlay Dashboard.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSupportsDashboardNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

### Instrument cluster display

Symbols that are available for managing the instrument cluster.

- [CPTemplateApplicationInstrumentClusterScene](cptemplateapplicationinstrumentclusterscene.md): A CarPlay scene that presents navigation-related instructions in the vehicle’s instrument display.
- [CPTemplateApplicationInstrumentClusterSceneDelegate](cptemplateapplicationinstrumentclusterscenedelegate.md): The methods for responding to the life cycle events in your app’s instrument cluster scene.
- [CPInstrumentClusterController](cpinstrumentclustercontroller.md): The controller you use to configure and manage your instrument cluster interface.
- [CPInstrumentClusterControllerDelegate](cpinstrumentclustercontrollerdelegate.md): The methods for responding to changes to instrument cluster settings.
- [CPInstrumentClusterSetting](cpinstrumentclustersetting.md): Constants that indicate when to include or exclude vehicle-related data in your custom content.
- [CPSupportsInstrumentClusterNavigationScene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

### Session management

- [CPNavigationSession](cpnavigationsession.md): An object that represents an active route guidance session.

### Trip and waypoints

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.
- [CPMapTemplateWaypoint](cpmaptemplatewaypoint.md): CPMapTemplateWaypoint represents a waypoint with associated travel estimates
- [CPNavigationWaypoint](cpnavigationwaypoint.md): CPNavigationWaypoint represents a point of interest along a route that provides location-based information and guidance.
- [CPMultiStopCardConfiguration](cpmultistopcardconfiguration.md)

### Route details

- [CPRouteChoice](cproutechoice.md): A possible route for a trip.
- [CPRouteInformation](cprouteinformation.md): A class that describes the characteristic elements of a route.
- [CPRouteDetail](cproutedetail.md)
- [CPRouteSegment](cproutesegment.md): CPRouteSegment describes information pertaining to a segment of a route.
- [CPRerouteReason](cpreroutereason.md): Values that represent reasons for navigation rerouting.
- [CPRouteSource](cproutesource.md)
- [NSStringFromCPRerouteReason](nsstringfromcpreroutereason%28__%29.md)

### Maneuvers

- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.
- [CPManeuverState](cpmaneuverstate.md): Values that describe the state of a maneuver.
- [CPManeuverType](cpmaneuvertype.md): Values that describe types of navigation maneuvers.
- [CPTravelEstimates](cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.
- [CPTripPreviewTextConfiguration](cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.
- [NSStringFromCPManeuverType](nsstringfromcpmaneuvertype%28__%29.md)
- [CPLocationCoordinate3D](cplocationcoordinate3d.md): CPLocationCoordinate3D represents a three-dimensional coordinate with latitude, longitude, and altitude components.

### Lanes and junctions

- [CPLane](cplane.md): A class that describes characteristics of a lane on a roadway.
- [CPLaneGuidance](cplaneguidance.md): A class that provides information that describes the number of lanes on a roadway and navigation instruction variants.
- [CPLaneStatus](cplanestatus.md): Values that describe the status or preferability of a lane.
- [CPJunctionType](cpjunctiontype.md): Values that represent types of roadway junctions.
- [CPTrafficSide](cptrafficside.md): Values that represent which side of the road the traffic drives on.
- [NSStringFromCPJunctionType](nsstringfromcpjunctiontype%28__%29.md)
- [NSStringFromCPLaneStatus](nsstringfromcplanestatus%28__%29.md)
- [NSStringFromCPTrafficSide](nsstringfromcptrafficside%28__%29.md)

### Navigation alerts

- [CPNavigationAlert](cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

## See Also

### CarPlay app types

- [Audio](audio.md): Build an app that plays audio or video content.
- [Communication](communication-apps.md): Build an app that offers SiriKit messaging or VoIP calling services.
- [Driving task](driving-task.md): Build an app that helps people perform driving-related tasks.
- [EV charging](ev-charging.md): Build an app that provides helpful information about nearby charging facilities.
- [Fueling](fueling.md): Build an app that provides helpful information about nearby fueling stations.
- [Parking](parking.md): Build an app that provides helpful information about nearby parking facilities.
- [Public safety](public-safety.md): Build an app that offers public safety information to someone who’s driving.
- [Quick food ordering](quick-food-ordering.md): Build an app that helps someone order food for pickup.
- [Video](video.md): Build an app that plays video content exclusively.
- [Voice-based conversation](voice-based-conversation.md): Build an app that responds to questions or requests and performs actions.

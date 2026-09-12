> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate](https://developer.apple.com/documentation/carplay/cpmaptemplate)

# CPMapTemplate (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a navigation overlay that your app draws on the map.

## Declaration

```swift
@MainActor class CPMapTemplate
```

<a id="overview"></a>

## Overview

After CarPlay calls your scene delegate’s [templateApplicationScene(\_:didConnect:to:)](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method, create a map template and set it as the root template by calling [setRootTemplate(\_:animated:completion:)](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) on the interface controller the method provides.

The map template appears as an overlay on top of the base view. The template is the control layer, providing a navigation bar and map buttons that users interact with through the CarPlay screen.

> **Note**

>  The base view is where your app draws its map. CarPlay doesn’t support direct user interactions in this view. Instead, your app uses templates, which overlay the base view, to allow users to interact with your app through the CarPlay screen.

When the user begins to interact with your app through the CarPlay screen, the system displays the navigation bar, hiding it after a brief period of inactivity. You can change this behavior by setting the [automaticallyHidesNavigationBar](cpmaptemplate/automaticallyhidesnavigationbar.md) and [hidesButtonsWithNavigationBar](cpmaptemplate/hidesbuttonswithnavigationbar.md) properties.

The navigation bar includes up to two leading and two trailing buttons. You can change the buttons, including their titles and icon images, by setting the [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md) and [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md) properties on your template.

You can display additional map buttons by providing an array of [CPMapButton](cpmapbutton.md) objects to [mapButtons](cpmaptemplate/mapbuttons.md). Use these buttons to provide users access to actions, such as entering panning mode or zooming in and out on the map.

## Topics

### Configuring Map Templates

- [automaticallyHidesNavigationBar](cpmaptemplate/automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](cpmaptemplate/hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
- [guidanceBackgroundColor](cpmaptemplate/guidancebackgroundcolor.md): The background color the map template uses when displaying guidance.

### Handling Map Template Events

- [mapDelegate](cpmaptemplate/mapdelegate.md): The object that serves as the delegate of the map template.
- [CPMapTemplateDelegate](cpmaptemplatedelegate.md): The protocol an object implements to handle events from a map template.

### Managing Map Buttons

- [mapButtons](cpmaptemplate/mapbuttons.md): An array of map buttons on the trailing bottom corner of the map template.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.

### Displaying Trip Previews

- [showTripPreviews(\_:textConfiguration:)](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews(\_:selectedTrip:textConfiguration:)](cpmaptemplate/showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews()](cpmaptemplate/hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreview(for:textConfiguration:)](cpmaptemplate/showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

### Navigating a Trip

- [startNavigationSession(for:)](cpmaptemplate/startnavigationsession%28for_%29.md): Begins navigational guidance for a trip.
- [CPNavigationSession](cpnavigationsession.md): An object that represents an active route guidance session.

### Providing Trip Estimates

- [updateEstimates(\_:for:)](cpmaptemplate/updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [update(\_:for:with:)](cpmaptemplate/update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](cptripestimatestyle.md): The set of display styles for trip estimates.

### Displaying a Navigation Alert

- [present(navigationAlert:animated:)](cpmaptemplate/present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlert(animated:completion:)](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](cpmaptemplate/currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

### Panning the Map

- [showPanningInterface(animated:)](cpmaptemplate/showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [dismissPanningInterface(animated:)](cpmaptemplate/dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.
- [isPanningInterfaceVisible](cpmaptemplate/ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.

### Instance Methods

- [hidePanel(completion:)](cpmaptemplate/hidepanel%28completion_%29.md): Hides the overlay.
- [popPanel(completion:)](cpmaptemplate/poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.
- [pushPanel(\_:completion:)](cpmaptemplate/pushpanel%28__completion_%29.md): Pushes a new panel.
- [showPanel(\_:completion:)](cpmaptemplate/showpanel%28__completion_%29.md): Shows an overlay with the specified panel.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

# CPMapTemplate (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A template that displays a navigation overlay that your app draws on the map.

## Declaration

```objectivec
@interface CPMapTemplate : CPTemplate
```

<a id="overview"></a>

## Overview

After CarPlay calls your scene delegate’s [templateApplicationScene:didConnectInterfaceController:toWindow:](cptemplateapplicationscenedelegate/templateapplicationscene%28__didconnect_to_%29.md) method, create a map template and set it as the root template by calling [setRootTemplate:animated:completion:](cpinterfacecontroller/setroottemplate%28__animated_completion_%29.md) on the interface controller the method provides.

The map template appears as an overlay on top of the base view. The template is the control layer, providing a navigation bar and map buttons that users interact with through the CarPlay screen.

> **Note**

>  The base view is where your app draws its map. CarPlay doesn’t support direct user interactions in this view. Instead, your app uses templates, which overlay the base view, to allow users to interact with your app through the CarPlay screen.

When the user begins to interact with your app through the CarPlay screen, the system displays the navigation bar, hiding it after a brief period of inactivity. You can change this behavior by setting the [automaticallyHidesNavigationBar](cpmaptemplate/automaticallyhidesnavigationbar.md) and [hidesButtonsWithNavigationBar](cpmaptemplate/hidesbuttonswithnavigationbar.md) properties.

The navigation bar includes up to two leading and two trailing buttons. You can change the buttons, including their titles and icon images, by setting the [leadingNavigationBarButtons](cpbarbuttonproviding/leadingnavigationbarbuttons.md) and [trailingNavigationBarButtons](cpbarbuttonproviding/trailingnavigationbarbuttons.md) properties on your template.

You can display additional map buttons by providing an array of [CPMapButton](cpmapbutton.md) objects to [mapButtons](cpmaptemplate/mapbuttons.md). Use these buttons to provide users access to actions, such as entering panning mode or zooming in and out on the map.

## Topics

### Configuring Map Templates

- [automaticallyHidesNavigationBar](cpmaptemplate/automaticallyhidesnavigationbar.md): A Boolean value that indicates whether the template should automatically hide the navigation bar.
- [hidesButtonsWithNavigationBar](cpmaptemplate/hidesbuttonswithnavigationbar.md): A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
- [guidanceBackgroundColor](cpmaptemplate/guidancebackgroundcolor.md): The background color the map template uses when displaying guidance.

### Handling Map Template Events

- [mapDelegate](cpmaptemplate/mapdelegate.md): The object that serves as the delegate of the map template.
- [CPMapTemplateDelegate](cpmaptemplatedelegate.md): The protocol an object implements to handle events from a map template.

### Managing Map Buttons

- [mapButtons](cpmaptemplate/mapbuttons.md): An array of map buttons on the trailing bottom corner of the map template.
- [CPMapButton](cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.

### Displaying Trip Previews

- [showTripPreviews:textConfiguration:](cpmaptemplate/showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews:selectedTrip:textConfiguration:](cpmaptemplate/showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews](cpmaptemplate/hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreviewForTrip:textConfiguration:](cpmaptemplate/showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

### Navigating a Trip

- [startNavigationSessionForTrip:](cpmaptemplate/startnavigationsession%28for_%29.md): Begins navigational guidance for a trip.
- [CPNavigationSession](cpnavigationsession.md): An object that represents an active route guidance session.

### Providing Trip Estimates

- [updateTravelEstimates:forTrip:](cpmaptemplate/updateestimates%28__for_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip.
- [updateTravelEstimates:forTrip:withTimeRemainingColor:](cpmaptemplate/update%28__for_with_%29.md): Updates travel estimates, such as arrival time and the remaining time and distance for a trip, with the specified time-remaining color.
- [CPTimeRemainingColor](cptimeremainingcolor.md): The color the system uses when displaying the time remaining for a trip.
- [tripEstimateStyle](cpmaptemplate/tripestimatestyle.md): The style that the map template uses when displaying trip estimates during active nagivation.
- [CPTripEstimateStyle](cptripestimatestyle.md): The set of display styles for trip estimates.

### Displaying a Navigation Alert

- [presentNavigationAlert:animated:](cpmaptemplate/present%28navigationalert_animated_%29.md): Displays a navigation alert on the map template.
- [dismissNavigationAlertAnimated:completion:](cpmaptemplate/dismissnavigationalert%28animated_completion_%29.md): Tells the map template to dismiss the visable navigation alert.
- [currentNavigationAlert](cpmaptemplate/currentnavigationalert.md): The visible navigation alert.
- [CPNavigationAlert](cpnavigationalert.md): An alert that displays map- or navigation-related information to the user.

### Panning the Map

- [showPanningInterfaceAnimated:](cpmaptemplate/showpanninginterface%28animated_%29.md): Shows the panning interface on the map.
- [dismissPanningInterfaceAnimated:](cpmaptemplate/dismisspanninginterface%28animated_%29.md): Dismisses the panning interface.
- [panningInterfaceVisible](cpmaptemplate/ispanninginterfacevisible.md): A Boolean value that indicates whether the map template is displaying the panning interface.

### Instance Methods

- [hidePanelWithCompletion:](cpmaptemplate/hidepanel%28completion_%29.md): Hides the overlay.
- [popPanelWithCompletion:](cpmaptemplate/poppanel%28completion_%29.md): Pops the top panel from the overlay’s panel stack.
- [pushPanel:completion:](cpmaptemplate/pushpanel%28__completion_%29.md): Pushes a new panel.
- [showPanel:completion:](cpmaptemplate/showpanel%28__completion_%29.md): Shows an overlay with the specified panel.

## Relationships

### Inherits From

- [CPTemplate](cptemplate.md)

### Conforms To

- [CPBarButtonProviding](cpbarbuttonproviding.md)

## See Also

### Navigation

- [Integrating CarPlay with Your Navigation App](integrating-carplay-with-your-navigation-app.md): Configure your navigation app to work with CarPlay by displaying your custom map and directions.
- [CPTemplateApplicationDashboardScene](cptemplateapplicationdashboardscene.md): A CarPlay scene that controls your app’s dashboard navigation window.
- [CPTemplateApplicationDashboardSceneDelegate](cptemplateapplicationdashboardscenedelegate.md): The methods for responding to the life-cycle events of your navigation app’s dashboard scene.
- [CPSearchTemplate](cpsearchtemplate.md): A template that provides the ability to search for a destination and see a list of search results.
- [CPVoiceControlTemplate](cpvoicecontroltemplate.md): A template that displays a voice control indicator during audio input.

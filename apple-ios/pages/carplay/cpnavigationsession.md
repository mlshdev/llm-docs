> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession](https://developer.apple.com/documentation/carplay/cpnavigationsession)

# CPNavigationSession (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that represents an active route guidance session.

## Declaration

```swift
@MainActor class CPNavigationSession
```

<a id="overview"></a>

## Overview

To start a navigation session, you call [startNavigationSession(for:)](cpmaptemplate/startnavigationsession%28for_%29.md) on the map template, passing the trip the user selected. The map template’s delegate receives the selected trip via [mapTemplate(\_:startedTrip:using:)](cpmaptemplatedelegate/maptemplate%28__startedtrip_using_%29.md).

When calculating the initial set of maneuvers, you set [pauseTrip(for:description:)](cpnavigationsession/pausetrip%28for_description_%29.md) to [CPNavigationSession.PauseReason.loading](cpnavigationsession/pausereason/loading.md) so that CarPlay displays the correct state to the user.

During turn-by-turn guidance, you create [CPManeuver](cpmaneuver.md) objects that contain information about upcoming turns, and then update [upcomingManeuvers](cpnavigationsession/upcomingmaneuvers.md). Maintain at least one maneuver in the array at all times. You should call [updateEstimates(\_:for:)](cpnavigationsession/updateestimates%28__for_%29.md) regularly to update the remaining time and distance for each maneuver.

When CarPlay pauses, finishes, or cancels route guidance, you must call the corresponding method on the active navigation session.

## Topics

### Getting the Trip

- [trip](cpnavigationsession/trip.md): The trip associated with the navigation session.
- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.

### Managing Trip Navigation

- [cancelTrip()](cpnavigationsession/canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip()](cpnavigationsession/finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:)](cpnavigationsession/pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](cpnavigationsession/pausetrip%28for_description_turncardcolor_%29.md)
- [CPNavigationSession.PauseReason](cpnavigationsession/pausereason.md): A set of reasons for pausing a trip.
- [resumeTrip(updatedRouteInformation:)](cpnavigationsession/resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.

### Managing Upcoming Maneuvers

- [upcomingManeuvers](cpnavigationsession/upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](cpnavigationsession/maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](cpnavigationsession/currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](cpnavigationsession/currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [add(\_:)](cpnavigationsession/add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](cpnavigationsession/add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.

### Updating Travel Estimates

- [updateEstimates(\_:for:)](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.
- [CPTravelEstimates](cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.

### Instance Properties

- [currentSegment](cpnavigationsession/currentsegment.md): The current route segment.
- [isRouteSharingEnabled](cpnavigationsession/isroutesharingenabled.md): Whether the vehicle is presently using route data for any features in its built-in navigation system.
- [isRouteSharingSupported](cpnavigationsession/isroutesharingsupported.md): Whether the connected vehicle supports the route sharing feature.
- [optionsPanel](cpnavigationsession/optionspanel.md): The options panel to display when the ellipsis button on the travel estimates is tapped.
- [routeSegments](cpnavigationsession/routesegments.md): The route segments associated with this navigation session.

### Instance Methods

- [addRouteSegments(\_:)](cpnavigationsession/addroutesegments%28__%29.md): Use this method to add CPRouteSegments in chronological order to the navigation session. CPRouteSegment objects must be added as soon as they are available.
- [resumeNavigation(updatedTrip:routeSegments:currentSegment:rerouteReason:)](cpnavigationsession/resumenavigation%28updatedtrip_routesegments_currentsegment_reroutereason_%29.md): Resume navigation with an updated trip and route segments for cases such as the trip destination changing.
- [resumeTrip(updatedRouteSegments:currentSegment:rerouteReason:)](cpnavigationsession/resumetrip%28updatedroutesegments_currentsegment_reroutereason_%29.md): Resume the current trip with updated route segments

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Navigating a Trip

- [startNavigationSession(for:)](cpmaptemplate/startnavigationsession%28for_%29.md): Begins navigational guidance for a trip.

# CPNavigationSession (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that represents an active route guidance session.

## Declaration

```objectivec
@interface CPNavigationSession : NSObject
```

<a id="overview"></a>

## Overview

To start a navigation session, you call [startNavigationSessionForTrip:](cpmaptemplate/startnavigationsession%28for_%29.md) on the map template, passing the trip the user selected. The map template’s delegate receives the selected trip via [mapTemplate:startedTrip:usingRouteChoice:](cpmaptemplatedelegate/maptemplate%28__startedtrip_using_%29.md).

When calculating the initial set of maneuvers, you set [pauseTripForReason:description:](cpnavigationsession/pausetrip%28for_description_%29.md) to [CPTripPauseReasonLoading](cpnavigationsession/pausereason/loading.md) so that CarPlay displays the correct state to the user.

During turn-by-turn guidance, you create [CPManeuver](cpmaneuver.md) objects that contain information about upcoming turns, and then update [upcomingManeuvers](cpnavigationsession/upcomingmaneuvers.md). Maintain at least one maneuver in the array at all times. You should call [updateTravelEstimates:forManeuver:](cpnavigationsession/updateestimates%28__for_%29.md) regularly to update the remaining time and distance for each maneuver.

When CarPlay pauses, finishes, or cancels route guidance, you must call the corresponding method on the active navigation session.

## Topics

### Getting the Trip

- [trip](cpnavigationsession/trip.md): The trip associated with the navigation session.
- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.

### Managing Trip Navigation

- [cancelTrip](cpnavigationsession/canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip](cpnavigationsession/finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:](cpnavigationsession/pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](cpnavigationsession/pausetrip%28for_description_turncardcolor_%29.md)
- [CPTripPauseReason](cpnavigationsession/pausereason.md): A set of reasons for pausing a trip.
- [resumeTripWithUpdatedRouteInformation:](cpnavigationsession/resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.

### Managing Upcoming Maneuvers

- [upcomingManeuvers](cpnavigationsession/upcomingmaneuvers.md): The next set of maneuvers the user should perform while following the current route.
- [maneuverState](cpnavigationsession/maneuverstate.md): The current maneuver state.
- [currentRoadNameVariants](cpnavigationsession/currentroadnamevariants.md): An array of strings that describe variants of the current road name.
- [currentLaneGuidance](cpnavigationsession/currentlaneguidance.md): The current lane guidance to use for navigation metadata.
- [addManeuvers:](cpnavigationsession/add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](cpnavigationsession/add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.

### Updating Travel Estimates

- [updateTravelEstimates:forManeuver:](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.
- [CPTravelEstimates](cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.

### Instance Properties

- [currentSegment](cpnavigationsession/currentsegment.md): The current route segment.
- [routeSharingEnabled](cpnavigationsession/isroutesharingenabled.md): Whether the vehicle is presently using route data for any features in its built-in navigation system.
- [routeSharingSupported](cpnavigationsession/isroutesharingsupported.md): Whether the connected vehicle supports the route sharing feature.
- [optionsPanel](cpnavigationsession/optionspanel.md): The options panel to display when the ellipsis button on the travel estimates is tapped.
- [routeSegments](cpnavigationsession/routesegments.md): The route segments associated with this navigation session.

### Instance Methods

- [addRouteSegments:](cpnavigationsession/addroutesegments%28__%29.md): Use this method to add CPRouteSegments in chronological order to the navigation session. CPRouteSegment objects must be added as soon as they are available.
- [resumeNavigationWithUpdatedTrip:routeSegments:currentSegment:rerouteReason:](cpnavigationsession/resumenavigation%28updatedtrip_routesegments_currentsegment_reroutereason_%29.md): Resume navigation with an updated trip and route segments for cases such as the trip destination changing.
- [resumeTripWithUpdatedRouteSegments:currentSegment:rerouteReason:](cpnavigationsession/resumetrip%28updatedroutesegments_currentsegment_reroutereason_%29.md): Resume the current trip with updated route segments

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Navigating a Trip

- [startNavigationSessionForTrip:](cpmaptemplate/startnavigationsession%28for_%29.md): Begins navigational guidance for a trip.

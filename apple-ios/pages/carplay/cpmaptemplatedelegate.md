> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate)

# CPMapTemplateDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The protocol an object implements to handle events from a map template.

## Declaration

```swift
@MainActor protocol CPMapTemplateDelegate : NSObjectProtocol
```

## Topics

### Setting the Display Style

- [mapTemplate(\_:displayStyleFor:)](cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md): Asks the delegate for the maneuver’s display style.
- [CPManeuverDisplayStyle](cpmaneuverdisplaystyle.md): A display style that determines the visual layout for a maneuver.

### Handling Navigation Events

- [mapTemplate(\_:selectedPreviewFor:using:)](cpmaptemplatedelegate/maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate(\_:startedTrip:using:)](cpmaptemplatedelegate/maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation(\_:)](cpmaptemplatedelegate/maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata(\_:)](cpmaptemplatedelegate/maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

### Displaying Notifications

- [mapTemplate(\_:shouldShowNotificationFor:)](cpmaptemplatedelegate/maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate(\_:shouldUpdateNotificationFor:with:)](cpmaptemplatedelegate/maptemplate%28__shouldupdatenotificationfor_with_%29.md): Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.
- [mapTemplate(\_:shouldShowNotificationFor:)](cpmaptemplatedelegate/maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.

### Handling Navigation Alerts

- [mapTemplate(\_:willShow:)](cpmaptemplatedelegate/maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate(\_:didShow:)](cpmaptemplatedelegate/maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate(\_:willDismiss:dismissalContext:)](cpmaptemplatedelegate/maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate(\_:didDismiss:dismissalContext:)](cpmaptemplatedelegate/maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.
- [CPNavigationAlert.DismissalContext](cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

### Panning the Map

- [mapTemplateDidShowPanningInterface(\_:)](cpmaptemplatedelegate/maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface(\_:)](cpmaptemplatedelegate/maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface(\_:)](cpmaptemplatedelegate/maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture(\_:)](cpmaptemplatedelegate/maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate(\_:panBeganWith:)](cpmaptemplatedelegate/maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate(\_:panWith:)](cpmaptemplatedelegate/maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate(\_:panEndedWith:)](cpmaptemplatedelegate/maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPMapTemplate.PanDirection](cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate(\_:didEndPanGestureWithVelocity:)](cpmaptemplatedelegate/maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate(\_:didUpdatePanGestureWithTranslation:velocity:)](cpmaptemplatedelegate/maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.

### Instance Methods

- [mapTemplate(\_:didEndZoomGestureWithVelocity:)](cpmaptemplatedelegate/maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.
- [mapTemplate(\_:didFailToShareDestinationFor:error:)](cpmaptemplatedelegate/maptemplate%28__didfailtosharedestinationfor_error_%29.md): Called when a vehicle failed to handle a shared trip’s destination
- [mapTemplate(\_:didReceiveRequestForDestination:)](cpmaptemplatedelegate/maptemplate%28__didreceiverequestfordestination_%29.md): Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.
- [mapTemplate(\_:didReceiveUpdatedRouteSource:)](cpmaptemplatedelegate/maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplate(\_:didRequestMultiStopCardConfigurationWithCompletion:)](cpmaptemplatedelegate/maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.
- [mapTemplate(\_:didRequestToInsert:into:completion:)](cpmaptemplatedelegate/maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate(\_:didRequestToRemove:)](cpmaptemplatedelegate/maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.
- [mapTemplate(\_:didRequestToRemoveDestination:)](cpmaptemplatedelegate/maptemplate%28__didrequesttoremovedestination_%29.md): Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.
- [mapTemplate(\_:didRotateWithCenter:rotation:velocity:)](cpmaptemplatedelegate/maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.
- [mapTemplate(\_:didShareDestinationFor:)](cpmaptemplatedelegate/maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination
- [mapTemplate(\_:didUpdateRouteSharingEnabled:)](cpmaptemplatedelegate/maptemplate%28__didupdateroutesharingenabled_%29.md): Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.
- [mapTemplate(\_:didUpdateZoomGestureWithCenter:scale:velocity:)](cpmaptemplatedelegate/maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.
- [mapTemplate(\_:pitchEndedWithCenter:)](cpmaptemplatedelegate/maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.
- [mapTemplate(\_:pitchWithCenter:)](cpmaptemplatedelegate/maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems
- [mapTemplate(\_:rotationDidEndWithVelocity:)](cpmaptemplatedelegate/maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.
- [mapTemplate(\_:waypoint:accepted:forSegment:)](cpmaptemplatedelegate/maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.
- [mapTemplate(\_:willShareDestinationFor:)](cpmaptemplatedelegate/maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplateDidBeginPitchGesture(\_:)](cpmaptemplatedelegate/maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplateDidBeginRotationGesture(\_:)](cpmaptemplatedelegate/maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplateDidBeginZoomGesture(\_:)](cpmaptemplatedelegate/maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplateShouldProvideMultiStopRouting(\_:)](cpmaptemplatedelegate/maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplateShouldProvideRouteSharing(\_:)](cpmaptemplatedelegate/maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling Map Template Events

- [mapDelegate](cpmaptemplate/mapdelegate.md): The object that serves as the delegate of the map template.

# CPMapTemplateDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The protocol an object implements to handle events from a map template.

## Declaration

```objectivec
@protocol CPMapTemplateDelegate <NSObject>
```

## Topics

### Setting the Display Style

- [mapTemplate:displayStyleForManeuver:](cpmaptemplatedelegate/maptemplate%28__displaystylefor_%29.md): Asks the delegate for the maneuver’s display style.
- [CPManeuverDisplayStyle](cpmaneuverdisplaystyle.md): A display style that determines the visual layout for a maneuver.

### Handling Navigation Events

- [mapTemplate:selectedPreviewForTrip:usingRouteChoice:](cpmaptemplatedelegate/maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate:startedTrip:usingRouteChoice:](cpmaptemplatedelegate/maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation:](cpmaptemplatedelegate/maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata:](cpmaptemplatedelegate/maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

### Displaying Notifications

- [mapTemplate:shouldShowNotificationForManeuver:](cpmaptemplatedelegate/maptemplate%28__shouldshownotificationfor_%29-4mnm1.md): Asks the delegate whether the system should display the maneuver as a notification when the app is in the background.
- [mapTemplate:shouldUpdateNotificationForManeuver:withTravelEstimates:](cpmaptemplatedelegate/maptemplate%28__shouldupdatenotificationfor_with_%29.md): Asks the delegate whether the system should display the maneuver with updated travel estimates as a notification when the app is in the background.
- [mapTemplate:shouldShowNotificationForNavigationAlert:](cpmaptemplatedelegate/maptemplate%28__shouldshownotificationfor_%29-5lu8a.md): Asks the delegate whether the system should display the navigation alert as a notification when the app is in the background.

### Handling Navigation Alerts

- [mapTemplate:willShowNavigationAlert:](cpmaptemplatedelegate/maptemplate%28__willshow_%29.md): Tells the delegate that the system will show the navigation alert.
- [mapTemplate:didShowNavigationAlert:](cpmaptemplatedelegate/maptemplate%28__didshow_%29.md): Tells the delegate that the system showed the navigation alert.
- [mapTemplate:willDismissNavigationAlert:dismissalContext:](cpmaptemplatedelegate/maptemplate%28__willdismiss_dismissalcontext_%29.md): Tells the delegate that the system is preparing to dismiss the navigation alert.
- [mapTemplate:didDismissNavigationAlert:dismissalContext:](cpmaptemplatedelegate/maptemplate%28__diddismiss_dismissalcontext_%29.md): Tells the delegate that the system dismissed the navigation alert.
- [CPNavigationAlertDismissalContext](cpnavigationalert/dismissalcontext.md): A set of reasons for dismissing a navigation alert.

### Panning the Map

- [mapTemplateDidShowPanningInterface:](cpmaptemplatedelegate/maptemplatedidshowpanninginterface%28__%29.md): Tells the delegate that the panning interface is visible on the map.
- [mapTemplateWillDismissPanningInterface:](cpmaptemplatedelegate/maptemplatewilldismisspanninginterface%28__%29.md): Tells the delegate that the panning interface will disappear from the map.
- [mapTemplateDidDismissPanningInterface:](cpmaptemplatedelegate/maptemplatediddismisspanninginterface%28__%29.md): Tells the delegate that the panning interface is no longer visible on the map.
- [mapTemplateDidBeginPanGesture:](cpmaptemplatedelegate/maptemplatedidbeginpangesture%28__%29.md): Tells the delegate that the pan gesture has started.
- [mapTemplate:panBeganWithDirection:](cpmaptemplatedelegate/maptemplate%28__panbeganwith_%29.md): Tells the delegate that the user is starting to pan the map.
- [mapTemplate:panWithDirection:](cpmaptemplatedelegate/maptemplate%28__panwith_%29.md): Tells the delegate that the user is panning in a certain direction on the map.
- [mapTemplate:panEndedWithDirection:](cpmaptemplatedelegate/maptemplate%28__panendedwith_%29.md): Tells the delegate that the user stopped panning the map.
- [CPPanDirection](cpmaptemplate/pandirection.md): The directions a user can pan (or move) a map displayed on the CarPlay screen.
- [mapTemplate:didEndPanGestureWithVelocity:](cpmaptemplatedelegate/maptemplate%28__didendpangesturewithvelocity_%29.md): Tells the delegate that the pan gesture ended with the specified velocity.
- [mapTemplate:didUpdatePanGestureWithTranslation:velocity:](cpmaptemplatedelegate/maptemplate%28__didupdatepangesturewithtranslation_velocity_%29.md): Tells the delegate that the pan gesture changed.

### Instance Methods

- [mapTemplate:didEndZoomGestureWithVelocity:](cpmaptemplatedelegate/maptemplate%28__didendzoomgesturewithvelocity_%29.md): Tells the delegate that a person stopped zooming the map.
- [mapTemplate:didFailToShareDestinationForTrip:error:](cpmaptemplatedelegate/maptemplate%28__didfailtosharedestinationfor_error_%29.md): Called when a vehicle failed to handle a shared trip’s destination
- [mapTemplate:didReceiveRequestForDestination:](cpmaptemplatedelegate/maptemplate%28__didreceiverequestfordestination_%29.md): Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.
- [mapTemplate:didReceiveUpdatedRouteSource:](cpmaptemplatedelegate/maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplate:didRequestMultiStopCardConfigurationWithCompletion:](cpmaptemplatedelegate/maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.
- [mapTemplate:didRequestToInsertWaypoint:intoSegment:completion:](cpmaptemplatedelegate/maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate:didRequestToRemoveWaypoint:](cpmaptemplatedelegate/maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.
- [mapTemplate:didRequestToRemoveDestination:](cpmaptemplatedelegate/maptemplate%28__didrequesttoremovedestination_%29.md): Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.
- [mapTemplate:didRotateWithCenter:rotation:velocity:](cpmaptemplatedelegate/maptemplate%28__didrotatewithcenter_rotation_velocity_%29.md): Tells the delegate that a person is rotating the map.
- [mapTemplate:didShareDestinationForTrip:](cpmaptemplatedelegate/maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination
- [mapTemplate:didUpdateRouteSharingEnabled:](cpmaptemplatedelegate/maptemplate%28__didupdateroutesharingenabled_%29.md): Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.
- [mapTemplate:didUpdateZoomGestureWithCenter:scale:velocity:](cpmaptemplatedelegate/maptemplate%28__didupdatezoomgesturewithcenter_scale_velocity_%29.md): Tells the delegate that a person is zooming on the map.
- [mapTemplate:pitchEndedWithCenter:](cpmaptemplatedelegate/maptemplate%28__pitchendedwithcenter_%29.md): Tells the delegate that a person stopped pitching the map.
- [mapTemplate:pitchWithCenter:](cpmaptemplatedelegate/maptemplate%28__pitchwithcenter_%29.md): Called when a pitch gesture changes. May not be called when connected to some CarPlay systems
- [mapTemplate:rotationDidEndWithVelocity:](cpmaptemplatedelegate/maptemplate%28__rotationdidendwithvelocity_%29.md): Tells the delegate that a person stopped rotating the map.
- [mapTemplate:mapTemplateWaypoint:accepted:forSegment:](cpmaptemplatedelegate/maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.
- [mapTemplate:willShareDestinationForTrip:](cpmaptemplatedelegate/maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplateDidBeginPitchGesture:](cpmaptemplatedelegate/maptemplatedidbeginpitchgesture%28__%29.md): Tells the delegate that the pitch gesture started.
- [mapTemplateDidBeginRotationGesture:](cpmaptemplatedelegate/maptemplatedidbeginrotationgesture%28__%29.md): Tells the delegate that the rotation gesture started.
- [mapTemplateDidBeginZoomGesture:](cpmaptemplatedelegate/maptemplatedidbeginzoomgesture%28__%29.md): Tells the delegate that the zoom gesture started.
- [mapTemplateShouldProvideMultiStopRouting:](cpmaptemplatedelegate/maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplateShouldProvideRouteSharing:](cpmaptemplatedelegate/maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Handling Map Template Events

- [mapDelegate](cpmaptemplate/mapdelegate.md): The object that serves as the delegate of the map template.

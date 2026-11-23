> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequesttoremovedestination:)

# mapTemplate(\_:didRequestToRemoveDestination:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestToRemoveDestination waypoint: CPNavigationWaypoint)
```

## See Also

### Updating routes, stops, and destinations

- [mapTemplate(\_:didReceiveRequestForDestination:)](maptemplate%28__didreceiverequestfordestination_%29.md): Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.
- [mapTemplate(\_:didReceiveUpdatedRouteSource:)](maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplateShouldProvideMultiStopRouting(\_:)](maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplate(\_:didRequestMultiStopCardConfigurationWithCompletion:)](maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.

# mapTemplate:didRequestToRemoveDestination: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToRemoveDestination:(CPNavigationWaypoint *) waypoint;
```

## See Also

### Updating routes, stops, and destinations

- [mapTemplate:didReceiveRequestForDestination:](maptemplate%28__didreceiverequestfordestination_%29.md): Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.
- [mapTemplate:didReceiveUpdatedRouteSource:](maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplateShouldProvideMultiStopRouting:](maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplate:didRequestMultiStopCardConfigurationWithCompletion:](maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.

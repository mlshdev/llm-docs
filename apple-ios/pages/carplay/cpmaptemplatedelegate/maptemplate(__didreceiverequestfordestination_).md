> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didreceiverequestfordestination:)

# mapTemplate(\_:didReceiveRequestForDestination:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didReceiveRequestForDestination waypoint: CPNavigationWaypoint)
```

## See Also

### Updating routes, stops, and destinations

- [mapTemplate(\_:didRequestToRemoveDestination:)](maptemplate%28__didrequesttoremovedestination_%29.md): Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.
- [mapTemplate(\_:didReceiveUpdatedRouteSource:)](maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplateShouldProvideMultiStopRouting(\_:)](maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplate(\_:didRequestMultiStopCardConfigurationWithCompletion:)](maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.

# mapTemplate:didReceiveRequestForDestination: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didReceiveRequestForDestination:(CPNavigationWaypoint *) waypoint;
```

## See Also

### Updating routes, stops, and destinations

- [mapTemplate:didRequestToRemoveDestination:](maptemplate%28__didrequesttoremovedestination_%29.md): Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.
- [mapTemplate:didReceiveUpdatedRouteSource:](maptemplate%28__didreceiveupdatedroutesource_%29.md): Called when the route source status has been updated by the built-in system.
- [mapTemplateShouldProvideMultiStopRouting:](maptemplateshouldprovidemultistoprouting%28__%29.md): Determines if the template should provide UI for multi-stop routing while actively navigating, including the ability to add and remove stops.
- [mapTemplate:didRequestMultiStopCardConfigurationWithCompletion:](maptemplate%28__didrequestmultistopcardconfigurationwithcompletion_%29.md): Called when the user requests multi-stop card to be displayed via tapping ETA tray.

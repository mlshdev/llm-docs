> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didfailtosharedestinationfor:error:)

# mapTemplate(\_:didFailToShareDestinationFor:error:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle failed to handle a shared trip’s destination

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didFailToShareDestinationFor trip: CPTrip, error: any Error)
```

## See Also

### Sharing routes and destinations

- [mapTemplateShouldProvideRouteSharing(\_:)](maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.
- [mapTemplate(\_:didUpdateRouteSharingEnabled:)](maptemplate%28__didupdateroutesharingenabled_%29.md): Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.
- [mapTemplate(\_:willShareDestinationFor:)](maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplate(\_:didShareDestinationFor:)](maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination

# mapTemplate:didFailToShareDestinationForTrip:error: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle failed to handle a shared trip’s destination

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didFailToShareDestinationForTrip:(CPTrip *) trip error:(NSError *) error;
```

## See Also

### Sharing routes and destinations

- [mapTemplateShouldProvideRouteSharing:](maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.
- [mapTemplate:didUpdateRouteSharingEnabled:](maptemplate%28__didupdateroutesharingenabled_%29.md): Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.
- [mapTemplate:willShareDestinationForTrip:](maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplate:didShareDestinationForTrip:](maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination

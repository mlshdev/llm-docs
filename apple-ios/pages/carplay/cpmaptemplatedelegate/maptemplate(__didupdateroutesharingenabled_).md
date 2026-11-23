> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didupdateroutesharingenabled:)

# mapTemplate(\_:didUpdateRouteSharingEnabled:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didUpdateRouteSharingEnabled enabled: Bool)
```

## See Also

### Sharing routes and destinations

- [mapTemplateShouldProvideRouteSharing(\_:)](maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.
- [mapTemplate(\_:willShareDestinationFor:)](maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplate(\_:didShareDestinationFor:)](maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination
- [mapTemplate(\_:didFailToShareDestinationFor:error:)](maptemplate%28__didfailtosharedestinationfor_error_%29.md): Called when a vehicle failed to handle a shared trip’s destination

# mapTemplate:didUpdateRouteSharingEnabled: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the route sharing enabled status has been updated by the built-in system. Route sharing enabled is set to true when any vehicle features are enabled that rely on a route provided by the built‑in navigation system to func‑ tion.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didUpdateRouteSharingEnabled:(BOOL) enabled;
```

## See Also

### Sharing routes and destinations

- [mapTemplateShouldProvideRouteSharing:](maptemplateshouldprovideroutesharing%28__%29.md): Determines if the template should provide route sharing information to the vehicle. Apps that participate in route sharing will donate navigation information to the vehicle including the current route, a list of waypoints, and other metadata that allows the vehicle to track the user’s preferred route to their destination.
- [mapTemplate:willShareDestinationForTrip:](maptemplate%28__willsharedestinationfor_%29.md): Called when a trip’s destination is about to be shared to the vehicle
- [mapTemplate:didShareDestinationForTrip:](maptemplate%28__didsharedestinationfor_%29.md): Called when a vehicle successfully handled a shared trip’s destination
- [mapTemplate:didFailToShareDestinationForTrip:error:](maptemplate%28__didfailtosharedestinationfor_error_%29.md): Called when a vehicle failed to handle a shared trip’s destination

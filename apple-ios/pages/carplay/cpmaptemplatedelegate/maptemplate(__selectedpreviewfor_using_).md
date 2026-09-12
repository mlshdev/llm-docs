> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:selectedpreviewfor:using:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:selectedpreviewfor:using:))

# mapTemplate(\_:selectedPreviewFor:using:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected a trip and route choice to preview.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, selectedPreviewFor trip: CPTrip, using routeChoice: CPRouteChoice)
```

## Parameters

- `mapTemplate`: The current map template.
- `trip`: The selected trip.
- `routeChoice`: The route chosen by the user.

## See Also

### Handling Navigation Events

- [mapTemplate(\_:startedTrip:using:)](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation(\_:)](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata(\_:)](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

# mapTemplate:selectedPreviewForTrip:usingRouteChoice: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected a trip and route choice to preview.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate selectedPreviewForTrip:(CPTrip *) trip usingRouteChoice:(CPRouteChoice *) routeChoice;
```

## Parameters

- `mapTemplate`: The current map template.
- `trip`: The selected trip.
- `routeChoice`: The route chosen by the user.

## See Also

### Handling Navigation Events

- [mapTemplate:startedTrip:usingRouteChoice:](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation:](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata:](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

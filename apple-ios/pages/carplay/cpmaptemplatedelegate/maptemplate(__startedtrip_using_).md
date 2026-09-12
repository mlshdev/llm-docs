> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:startedtrip:using:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:startedtrip:using:))

# mapTemplate(\_:startedTrip:using:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected a trip and route choice to navigate.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, startedTrip trip: CPTrip, using routeChoice: CPRouteChoice)
```

## Parameters

- `mapTemplate`: The current map template.
- `trip`: The selected trip.
- `routeChoice`: The selected route choice.

## See Also

### Handling Navigation Events

- [mapTemplate(\_:selectedPreviewFor:using:)](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplateDidCancelNavigation(\_:)](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata(\_:)](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

# mapTemplate:startedTrip:usingRouteChoice: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the user selected a trip and route choice to navigate.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate startedTrip:(CPTrip *) trip usingRouteChoice:(CPRouteChoice *) routeChoice;
```

## Parameters

- `mapTemplate`: The current map template.
- `trip`: The selected trip.
- `routeChoice`: The selected route choice.

## See Also

### Handling Navigation Events

- [mapTemplate:selectedPreviewForTrip:usingRouteChoice:](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplateDidCancelNavigation:](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.
- [mapTemplateShouldProvideNavigationMetadata:](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

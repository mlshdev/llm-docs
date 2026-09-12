> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplatedidcancelnavigation(_:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplatedidcancelnavigation(_:))

# mapTemplateDidCancelNavigation(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system canceled the navigation.

## Declaration

```swift
optional func mapTemplateDidCancelNavigation(_ mapTemplate: CPMapTemplate)
```

## Parameters

- `mapTemplate`: The current map template.

## See Also

### Handling Navigation Events

- [mapTemplate(\_:selectedPreviewFor:using:)](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate(\_:startedTrip:using:)](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateShouldProvideNavigationMetadata(\_:)](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

# mapTemplateDidCancelNavigation: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the delegate that the system canceled the navigation.

## Declaration

```objectivec
- (void) mapTemplateDidCancelNavigation:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The current map template.

## See Also

### Handling Navigation Events

- [mapTemplate:selectedPreviewForTrip:usingRouteChoice:](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate:startedTrip:usingRouteChoice:](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateShouldProvideNavigationMetadata:](maptemplateshouldprovidenavigationmetadata%28__%29.md): Asks the delegate whether the template should provide navigation metadata

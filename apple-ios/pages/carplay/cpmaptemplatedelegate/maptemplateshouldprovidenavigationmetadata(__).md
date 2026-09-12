> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovidenavigationmetadata(_:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplateshouldprovidenavigationmetadata(_:))

# mapTemplateShouldProvideNavigationMetadata(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Asks the delegate whether the template should provide navigation metadata

## Declaration

```swift
optional func mapTemplateShouldProvideNavigationMetadata(_ mapTemplate: CPMapTemplate) -> Bool
```

## Parameters

- `mapTemplate`: The current map template.

<a id="discussion"></a>

## Discussion

- Returns `true` if the template needs to provide navigation metadata, otherwise `false`.

## See Also

### Handling Navigation Events

- [mapTemplate(\_:selectedPreviewFor:using:)](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate(\_:startedTrip:using:)](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation(\_:)](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.

# mapTemplateShouldProvideNavigationMetadata: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Asks the delegate whether the template should provide navigation metadata

## Declaration

```objectivec
- (BOOL) mapTemplateShouldProvideNavigationMetadata:(CPMapTemplate *) mapTemplate;
```

## Parameters

- `mapTemplate`: The current map template.

<a id="discussion"></a>

## Discussion

- Returns `true` if the template needs to provide navigation metadata, otherwise `false`.

## See Also

### Handling Navigation Events

- [mapTemplate:selectedPreviewForTrip:usingRouteChoice:](maptemplate%28__selectedpreviewfor_using_%29.md): Tells the delegate that the user selected a trip and route choice to preview.
- [mapTemplate:startedTrip:usingRouteChoice:](maptemplate%28__startedtrip_using_%29.md): Tells the delegate that the user selected a trip and route choice to navigate.
- [mapTemplateDidCancelNavigation:](maptemplatedidcancelnavigation%28__%29.md): Tells the delegate that the system canceled the navigation.

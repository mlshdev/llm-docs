> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/showroutechoicespreview(for:textconfiguration:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/showroutechoicespreview(for:textconfiguration:))

# showRouteChoicesPreview(for:textConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays the route choices for a single trip.

## Declaration

```swift
func showRouteChoicesPreview(for tripPreview: CPTrip, textConfiguration: CPTripPreviewTextConfiguration?)
```

## Parameters

- `tripPreview`: The trip to preview.
- `textConfiguration`: A text configuration object containing the titles to display on trip preview buttons.

<a id="Discussion"></a>

## Discussion

The trip preview can appear over an active navigation session.

## See Also

### Displaying Trip Previews

- [showTripPreviews(\_:textConfiguration:)](showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews(\_:selectedTrip:textConfiguration:)](showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews()](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

# showRouteChoicesPreviewForTrip:textConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays the route choices for a single trip.

## Declaration

```objectivec
- (void) showRouteChoicesPreviewForTrip:(CPTrip *) tripPreview textConfiguration:(CPTripPreviewTextConfiguration *) textConfiguration;
```

## Parameters

- `tripPreview`: The trip to preview.
- `textConfiguration`: A text configuration object containing the titles to display on trip preview buttons.

<a id="Discussion"></a>

## Discussion

The trip preview can appear over an active navigation session.

## See Also

### Displaying Trip Previews

- [showTripPreviews:textConfiguration:](showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [showTripPreviews:selectedTrip:textConfiguration:](showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

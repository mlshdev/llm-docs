> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/showtrippreviews(_:textconfiguration:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/showtrippreviews(_:textconfiguration:))

# showTripPreviews(\_:textConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays the preview for one or more trips, and allows route selection.

## Declaration

```swift
func showTripPreviews(_ tripPreviews: [CPTrip], textConfiguration: CPTripPreviewTextConfiguration?)
```

## Parameters

- `tripPreviews`: A list of trips to preview, limited to 12 trips.
- `textConfiguration`: A text configuration object containing the titles to display on trip preview buttons.

<a id="Discussion"></a>

## Discussion

Use this method to display upcoming trips or multiple trip options, such as for search results. Trip previews can appear over the active navigation session.

## See Also

### Displaying Trip Previews

- [showTripPreviews(\_:selectedTrip:textConfiguration:)](showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews()](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreview(for:textConfiguration:)](showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

# showTripPreviews:textConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Displays the preview for one or more trips, and allows route selection.

## Declaration

```objectivec
- (void) showTripPreviews:(NSArray<CPTrip *> *) tripPreviews textConfiguration:(CPTripPreviewTextConfiguration *) textConfiguration;
```

## Parameters

- `tripPreviews`: A list of trips to preview, limited to 12 trips.
- `textConfiguration`: A text configuration object containing the titles to display on trip preview buttons.

<a id="Discussion"></a>

## Discussion

Use this method to display upcoming trips or multiple trip options, such as for search results. Trip previews can appear over the active navigation session.

## See Also

### Displaying Trip Previews

- [showTripPreviews:selectedTrip:textConfiguration:](showtrippreviews%28__selectedtrip_textconfiguration_%29.md): Displays the previews for a collection of trips, with a single selected trip.
- [hideTripPreviews](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreviewForTrip:textConfiguration:](showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/showtrippreviews(_:selectedtrip:textconfiguration:)](https://developer.apple.com/documentation/carplay/cpmaptemplate/showtrippreviews(_:selectedtrip:textconfiguration:))

# showTripPreviews(\_:selectedTrip:textConfiguration:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Displays the previews for a collection of trips, with a single selected trip.

## Declaration

```swift
func showTripPreviews(_ tripPreviews: [CPTrip], selectedTrip: CPTrip?, textConfiguration: CPTripPreviewTextConfiguration?)
```

## Parameters

- `tripPreviews`: An array of trips to preview.
- `selectedTrip`: The trip to select when CarPlay presents the list of trip previews.
- `textConfiguration`: A configuration object that contains the various titles a trip preview button can display.

<a id="Discussion"></a>

## Discussion

Use this method to display upcoming trips or multiple trip options, such as search results. Trip previews can appear over an active navigation session. Provide an array of up to twelve [CPTrip](../cptrip.md) objects to preview. If the array contains more objects, CarPlay displays only the first twelve.

The trip you want to select must be a member of the `tripPreviews` array.

## See Also

### Displaying Trip Previews

- [showTripPreviews(\_:textConfiguration:)](showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [hideTripPreviews()](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreview(for:textConfiguration:)](showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

# showTripPreviews:selectedTrip:textConfiguration: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Displays the previews for a collection of trips, with a single selected trip.

## Declaration

```objectivec
- (void) showTripPreviews:(NSArray<CPTrip *> *) tripPreviews selectedTrip:(CPTrip *) selectedTrip textConfiguration:(CPTripPreviewTextConfiguration *) textConfiguration;
```

## Parameters

- `tripPreviews`: An array of trips to preview.
- `selectedTrip`: The trip to select when CarPlay presents the list of trip previews.
- `textConfiguration`: A configuration object that contains the various titles a trip preview button can display.

<a id="Discussion"></a>

## Discussion

Use this method to display upcoming trips or multiple trip options, such as search results. Trip previews can appear over an active navigation session. Provide an array of up to twelve [CPTrip](../cptrip.md) objects to preview. If the array contains more objects, CarPlay displays only the first twelve.

The trip you want to select must be a member of the `tripPreviews` array.

## See Also

### Displaying Trip Previews

- [showTripPreviews:textConfiguration:](showtrippreviews%28__textconfiguration_%29.md): Displays the preview for one or more trips, and allows route selection.
- [hideTripPreviews](hidetrippreviews%28%29.md): Hides the display of trip previews.
- [showRouteChoicesPreviewForTrip:textConfiguration:](showroutechoicespreview%28for_textconfiguration_%29.md): Displays the route choices for a single trip.
- [CPTripPreviewTextConfiguration](../cptrippreviewtextconfiguration.md): A configuration object for changing the button titles on a trip preview.

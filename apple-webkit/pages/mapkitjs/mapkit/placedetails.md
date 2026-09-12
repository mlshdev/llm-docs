> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapkit/placedetails](https://developer.apple.com/documentation/mapkitjs/mapkit/placedetails)

# placeDetails

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.78.1+

A list of all place detail objects that are currently active on a page.

## Declaration

```
get placeDetails(): PlaceDetail[];
```

<a id="Discussion"></a>

## Discussion

You must load the appropriate library first before accessing the property, otherwise, the property throws an `Error`.

## See Also

### Places

- [Place](../place.md): A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
- [PlaceLookup](../placelookup.md): An object that provides the ability to look up place information for a specified Place ID.
- [PlaceSelectionAccessoryOptions](../placeselectionaccessoryoptions.md): The options for selection accessories.
- [PlaceAnnotation](../placeannotation.md): An annotation for a place.
- [PlaceDetail](../placedetail.md): An interactive view that displays information about a place.
- [PlaceSelectionAccessory](../placeselectionaccessory.md): The accessory that conveys information about a place associated with an annotation.

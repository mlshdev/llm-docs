> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/placeannotation](https://developer.apple.com/documentation/mapkitjs/placeannotation)

# PlaceAnnotation

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.78.1+

An annotation for a place.

## Declaration

```
class PlaceAnnotation extends MarkerAnnotation
```

## Mentioned In

- [MapKit JS 5](mapkit-js-5.md)

<a id="overview"></a>

## Overview

For information on creating annotations and adding them to a map, see [Annotations](annotations.md).

## Topics

### Creating the annotation

- [PlaceAnnotation()](placeannotation/placeannotationconstructor.md): Creates a new place annotation.

### Instance Properties

- [anchorOffset](placeannotation/anchoroffset.md): An offset that changes the annotation’s default anchor point.
- [appearanceAnimation](placeannotation/appearanceanimation.md): A CSS animation that runs when the annotation appears on the map.
- [color](placeannotation/color.md): The color of the place.
- [coordinate](placeannotation/coordinate.md): The annotation’s coordinate.
- [draggable](placeannotation/draggable.md): A Boolean value that indicates whether the place annotation is draggable.
- [element](placeannotation/element.md): The annotation’s element in the DOM.
- [glyphColor](placeannotation/glyphcolor.md): The selected glyph color for the place.
- [glyphImage](placeannotation/glyphimage.md): The glyph image for the place.
- [glyphText](placeannotation/glyphtext.md): The glyph text for the place.
- [padding](placeannotation/padding.md): The amount of spacing to add around the annotation when showing items.
- [selectedGlyphImage](placeannotation/selectedglyphimage.md): The selected glyph image for the place.
- [size](placeannotation/size.md): The dimensions of the annotation, in CSS pixels.

## Relationships

### Inherits From

- [MarkerAnnotation](markerannotation.md)

### Inherited By

- [MapFeatureAnnotation](mapfeatureannotation.md)

## See Also

### Places

- [Place](place.md): A place object that returns from a geocoder lookup, a reverse lookup, or a fetch request for points of interest.
- [PlaceLookup](placelookup.md): An object that provides the ability to look up place information for a specified Place ID.
- [placeDetails](mapkit/placedetails.md): A list of all place detail objects that are currently active on a page.
- [PlaceSelectionAccessoryOptions](placeselectionaccessoryoptions.md): The options for selection accessories.
- [PlaceDetail](placedetail.md): An interactive view that displays information about a place.
- [PlaceSelectionAccessory](placeselectionaccessory.md): The accessory that conveys information about a place associated with an annotation.

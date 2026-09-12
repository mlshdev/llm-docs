> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/mapfeatureannotationglyphimage](https://developer.apple.com/documentation/mapkitjs/mapfeatureannotationglyphimage)

# MapFeatureAnnotationGlyphImage

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.74.1+

An object that describes map feature annotation images.

## Declaration

```
class MapFeatureAnnotationGlyphImage implements ImageDelegate
```

<a id="overview"></a>

## Overview

`MapFeatureAnnotationGlyphImage` is a concrete implementation of [ImageDelegate](imagedelegate.md) for returning the glyph image of the map feature.

## Topics

### Getting image URLs

- [getImageUrl()](mapfeatureannotationglyphimage/getimageurl.md): Returns the image URL of the map feature.

## Relationships

### Conforms To

- [ImageDelegate](imagedelegate.md)

## See Also

### Points of interest

- [filterExcludingAllCategories](mapkit/filterexcludingallcategories.md): A value that excludes all point-of-interest categories.
- [filterIncludingAllCategories](mapkit/filterincludingallcategories.md): A value that includes all point-of-interest categories.
- [PointOfInterestFilter](pointofinterestfilter.md): A filter for determining the points of interest to include or exclude on a map or in a local search.
- [PointsOfInterestSearch](pointsofinterestsearch.md): An object that fetches points of interest within a specified region.
- [MapFeatureAnnotation](mapfeatureannotation.md): An object that represents a map feature that the user selects.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointofinterestfilter](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter)

# PointOfInterestFilter

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Class  
**Availability:** MapKit JS 5.33.1+

A filter for determining the points of interest to include or exclude on a map or in a local search.

## Declaration

```
class PointOfInterestFilter
```

<a id="overview"></a>

## Overview

You can apply a point-of-interest filter when you create a map ([MapConstructorOptions](mapconstructoroptions.md)), when you update an existing map ([Map](map.md)), or when you fetch points of interest ([SearchConstructorOptions](searchconstructoroptions.md)).

## Topics

### Creating filters

- [excluding()](pointofinterestfilter/excluding.md): Creates a point-of-interest filter that excludes categories from a list that you provide.
- [including()](pointofinterestfilter/including.md): Creates a point-of-interest filter that includes categories from a list that you provide.
- [excludingAllCategories](pointofinterestfilter/excludingallcategories.md): A filter that excludes all point-of-interest categories.
- [includingAllCategories](pointofinterestfilter/includingallcategories.md): A filter that includes all point-of-interest categories.

### Querying filter behavior

- [excludesCategory()](pointofinterestfilter/excludescategory.md): Returns a Boolean value that indicates whether the filter excludes the provided point-of-interest category.
- [includesCategory()](pointofinterestfilter/includescategory.md): Returns a Boolean value that indicates whether the filter includes the provided point-of-interest category.

## See Also

### Points of interest

- [filterExcludingAllCategories](mapkit/filterexcludingallcategories.md): A value that excludes all point-of-interest categories.
- [filterIncludingAllCategories](mapkit/filterincludingallcategories.md): A value that includes all point-of-interest categories.
- [PointsOfInterestSearch](pointsofinterestsearch.md): An object that fetches points of interest within a specified region.
- [MapFeatureAnnotation](mapfeatureannotation.md): An object that represents a map feature that the user selects.
- [MapFeatureAnnotationGlyphImage](mapfeatureannotationglyphimage.md): An object that describes map feature annotation images.

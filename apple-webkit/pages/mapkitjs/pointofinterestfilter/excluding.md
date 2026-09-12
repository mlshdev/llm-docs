> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/pointofinterestfilter/excluding](https://developer.apple.com/documentation/mapkitjs/pointofinterestfilter/excluding)

# excluding(categories)

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Static Method  
**Availability:** MapKit JS 5.33.1+

Creates a point-of-interest filter that excludes categories from a list that you provide.

## Declaration

```
static excluding(
    categories: PointOfInterestCategory[],
): PointOfInterestFilter;
```

## See Also

### Creating filters

- [including()](including.md): Creates a point-of-interest filter that includes categories from a list that you provide.
- [excludingAllCategories](excludingallcategories.md): A filter that excludes all point-of-interest categories.
- [includingAllCategories](includingallcategories.md): A filter that includes all point-of-interest categories.

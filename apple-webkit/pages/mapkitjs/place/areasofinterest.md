> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/mapkitjs/place/areasofinterest](https://developer.apple.com/documentation/mapkitjs/place/areasofinterest)

# areasOfInterest

**Interface language:** Data

**Framework:** MapKit JS  
**Kind:** Instance Property  
**Availability:** MapKit JS 5.41.1+

Common names of the area in which the place resides.

## Declaration

```
areasOfInterest: string[] | null;
```

<a id="Discussion"></a>

## Discussion

For example, the [areasOfInterest](areasofinterest.md) for a specific location in Golden Gate Park in San Francisco, California, are `["Lindley Meadow", "Golden Gate Park"]`.

## See Also

### Place name and category

- [name](name.md): The name of the place.
- [formattedAddress](formattedaddress.md): The address of the place, formatted using its conventions of its country or region.
- [pointOfInterestCategory](pointofinterestcategory.md): The category of the place.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/geoentitytype](https://developer.apple.com/documentation/apple-ads-platform-api/geoentitytype)

# GeoEntityType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The geographic granularity (dimension) of a geo entity, from country down to postal code.

## Declaration

```
string GeoEntityType
```

## Possible Values

- `Country`: A country-level geo entity.
- `AdminArea`: A state, province, or other administrative-area-level geo entity.
- `Locality`: A city or locality-level geo entity.
- `PostalCode`: A postal-code-level geo entity.

## See Also

- [SearchSupplySourceType](searchsupplysourcetype.md): The supply source context (App Store or Apple Maps) used to scope a geo location search.

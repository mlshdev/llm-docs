> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/attributes-data.dictionary/place-data.dictionary/displaypoint-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary/attributes-data.dictionary/place-data.dictionary/displaypoint-data.dictionary)

# AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.DisplayPoint

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A point-based representation of a place in Apple Maps.

## Declaration

```
object AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.DisplayPoint
```

## Properties

- `coordinates` — `AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.DisplayPoint.Coordinates`: The GPS coordinates of a place in Apple Maps you associate with the Advanced App Clip experience.
- `source` — `string`: A string that describes the means by which you captured the data for a display point.
  **Allowed values:** `CALCULATED`, `MANUALLY_PLACED`

## Topics

### Objects

- [AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.DisplayPoint.Coordinates](displaypoint-data.dictionary/coordinates-data.dictionary.md): The coordinates for a point of interest or business in Apple Maps.

## See Also

### Objects

- [AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.MainAddress](mainaddress-data.dictionary.md): The main address for a point of interest or business in Apple Maps.
- [AppClipAdvancedExperienceCreateRequest.Data.Attributes.Place.PhoneNumber](phonenumber-data.dictionary.md): The phone number of a point of interest or business in Apple Maps.

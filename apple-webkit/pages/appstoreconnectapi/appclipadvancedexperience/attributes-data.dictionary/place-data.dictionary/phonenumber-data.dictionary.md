> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperience/attributes-data.dictionary/place-data.dictionary/phonenumber-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperience/attributes-data.dictionary/place-data.dictionary/phonenumber-data.dictionary)

# AppClipAdvancedExperience.Attributes.Place.PhoneNumber

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The phone number of a point of interest or business in Apple Maps.

## Declaration

```
object AppClipAdvancedExperience.Attributes.Place.PhoneNumber
```

## Properties

- `intent` — `string`: A string that describes the operational purpose of the phone number; for example `Customer Service` or `Help Desk`
- `number` — `string`: The phone number as a string.
- `type` — `string`: The resource type.
  **Allowed values:** `FAX`, `LANDLINE`, `MOBILE`, `TOLLFREE`

## See Also

### Objects

- [AppClipAdvancedExperience.Attributes.Place.DisplayPoint](displaypoint-data.dictionary.md): A point-based representation of a place in Apple Maps.
- [AppClipAdvancedExperience.Attributes.Place.MainAddress](mainaddress-data.dictionary.md): The main address for a point of interest or business in Apple Maps.

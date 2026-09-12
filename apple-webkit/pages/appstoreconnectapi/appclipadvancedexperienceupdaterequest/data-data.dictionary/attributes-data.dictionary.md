> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperienceupdaterequest/data-data.dictionary/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperienceupdaterequest/data-data.dictionary/attributes-data.dictionary)

# AppClipAdvancedExperienceUpdateRequest.Data.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The attributes you set that describe the Advanced App Clip Experiences resource.

## Declaration

```
object AppClipAdvancedExperienceUpdateRequest.Data.Attributes
```

## Properties

- `action` — `AppClipAction`: The call-to-action verb that appears on the App Clip card.
- `businessCategory` — `string`: The business category of an advanced App Clip experience; for example, `PARKING`
  **Allowed values:** `AUTOMOTIVE`, `BEAUTY`, `BIKES`, `BOOKS`, `CASINO`, `EDUCATION`, `EDUCATION_JAPAN`, `ENTERTAINMENT`, `EV_CHARGER`, `FINANCIAL_USD`, `FINANCIAL_CNY`, `FINANCIAL_GBP`, `FINANCIAL_JPY`, `FINANCIAL_EUR`, `FITNESS`, `FOOD_AND_DRINK`, `GAS`, `GROCERY`, `HEALTH_AND_MEDICAL`, `HOTEL_AND_TRAVEL`, `MUSIC`, `PARKING`, `PET_SERVICES`, `PROFESSIONAL_SERVICES`, `SHOPPING`, `TICKETING`, `TRANSIT`
- `defaultLanguage` — `AppClipAdvancedExperienceLanguage`: The default language for the advanced App Clip experience.
- `isPoweredBy` — `boolean`: A Boolean value that indicates whether the advanced App Clip experience was submitted by a platform provider that serves multiple businesses.
- `place` — `AppClipAdvancedExperienceUpdateRequest.Data.Attributes.Place`: The physical location you associate with the advanced App Clip experience. If you associate an advanced App Clip experience with a place, users can launch your App Clip from location-based suggestions from Siri Suggestions and the Maps app.
- `removed` — `boolean`: A Boolean value that indicates whether you want to delete an advanced App Clip experience. To delete the advanced App Clip experience, set it to `true`.

## Topics

### Objects

- [AppClipAdvancedExperienceUpdateRequest.Data.Attributes.Place](attributes-data.dictionary/place-data.dictionary.md): The place information of an advanced App Clip experience you create with this request.

## See Also

### Objects

- [AppClipAdvancedExperienceUpdateRequest.Data.Relationships](relationships-data.dictionary.md): The relationships to other resources that you can set with this request.

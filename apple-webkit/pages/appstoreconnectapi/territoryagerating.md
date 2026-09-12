> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territoryagerating](https://developer.apple.com/documentation/appstoreconnectapi/territoryagerating)

# TerritoryAgeRating

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.1+

The data structure that represent a territory age-rating resource.

## Declaration

```
object TerritoryAgeRating
```

## Properties

- `attributes` — `TerritoryAgeRating.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `TerritoryAgeRating.Relationships`:
- `type` — `string` (required): **Allowed values:** `territoryAgeRatings`

## Topics

### Dictionaries

- [TerritoryAgeRating.Attributes](territoryagerating/attributes-data.dictionary.md): Attributes that describe a territory age rating resource.
- [TerritoryAgeRating.Relationships](territoryagerating/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and data types

- [AgeRatingDeclaration](ageratingdeclaration.md): A set of content descriptors for your app that App Store Connect uses to assign an age rating.
- [AgeRatingDeclarationResponse](ageratingdeclarationresponse.md): A response containing a single age rating declaration with your app’s content descriptors.
- [AgeRatingDeclarationUpdateRequest](ageratingdeclarationupdaterequest.md): The request body you use to update an Age Rating Declaration.
- [AppInfoAgeRatingDeclarationLinkageResponse](appinfoageratingdeclarationlinkageresponse.md)
- [AppInfoTerritoryAgeRatingsLinkagesResponse](appinfoterritoryageratingslinkagesresponse.md): A response containing the resource identifiers of territory-specific age ratings for an app info record.
- [AppStoreAgeRating](appstoreagerating.md): A string that represents the app’s age rating as it appears on the App Store for all platforms.
- [BrazilAgeRating](brazilagerating.md): String that represents the app’s age rating as it appears on the App Store in Brazil for all platforms.
- [KidsAgeBand](kidsageband.md): String that represents the age band for a Made for Kids app.
- [TerritoryAgeRatingsResponse](territoryageratingsresponse.md): A response containing a list of age ratings assigned to an app across App Store territories.

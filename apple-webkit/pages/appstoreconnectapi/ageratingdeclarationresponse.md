> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/ageratingdeclarationresponse](https://developer.apple.com/documentation/appstoreconnectapi/ageratingdeclarationresponse)

# AgeRatingDeclarationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A response containing a single age rating declaration with your app’s content descriptors.

## Declaration

```
object AgeRatingDeclarationResponse
```

## Properties

- `data` — `AgeRatingDeclaration` (required): The data structure that represents the Age Rating Declarations resource.
- `links` — `DocumentLinks` (required): Navigational links including the self-link and links to the related data.

## See Also

### Objects and data types

- [AgeRatingDeclaration](ageratingdeclaration.md): A set of content descriptors for your app that App Store Connect uses to assign an age rating.
- [AgeRatingDeclarationUpdateRequest](ageratingdeclarationupdaterequest.md): The request body you use to update an Age Rating Declaration.
- [AppInfoAgeRatingDeclarationLinkageResponse](appinfoageratingdeclarationlinkageresponse.md)
- [AppInfoTerritoryAgeRatingsLinkagesResponse](appinfoterritoryageratingslinkagesresponse.md): A response containing the resource identifiers of territory-specific age ratings for an app info record.
- [AppStoreAgeRating](appstoreagerating.md): A string that represents the app’s age rating as it appears on the App Store for all platforms.
- [BrazilAgeRating](brazilagerating.md): String that represents the app’s age rating as it appears on the App Store in Brazil for all platforms.
- [KidsAgeBand](kidsageband.md): String that represents the age band for a Made for Kids app.
- [TerritoryAgeRating](territoryagerating.md): The data structure that represent a territory age-rating resource.
- [TerritoryAgeRatingsResponse](territoryageratingsresponse.md): A response containing a list of age ratings assigned to an app across App Store territories.

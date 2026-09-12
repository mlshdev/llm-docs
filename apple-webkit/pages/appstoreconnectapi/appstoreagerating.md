> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstoreagerating](https://developer.apple.com/documentation/appstoreconnectapi/appstoreagerating)

# AppStoreAgeRating

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 1.2+

A string that represents the app’s age rating as it appears on the App Store for all platforms.

## Declaration

```
string AppStoreAgeRating
```

## Possible Values

- `L`: A literal that represents the app rating Livre, or suitable for all ages, for Brazil.
- `ALL`: A literal that represents the app rating ALL, or suitable for everyone, for the Republic of Korea.
- `ZERO_ZERO`: A literal that represents the app rating 00+, or all ages, for Vietnam.
- `ONE_PLUS`: A literal that represents the app rating 1+.
- `TWO_PLUS`: A literal that represents the app rating 2+.
- `THREE_PLUS`: A literal that represents the app rating 3+.
- `FOUR_PLUS`: A literal that represents the app rating 4+.
- `FIVE_PLUS`: A literal that represents the app rating 5+.
- `SIX_PLUS`: A literal that represents the app rating 6+.
- `SEVEN_PLUS`: A literal that represents the app rating 7+.
- `EIGHT_PLUS`: A literal that represents the app rating 8+.
- `NINE_PLUS`: A literal that represents the app rating 9+.
- `TEN_PLUS`: A literal that represents the app rating 10+.
- `ELEVEN_PLUS`: A literal that represents the app rating 11+.
- `TWELVE_PLUS`: A literal that represents the app rating 12+.
- `THIRTEEN_PLUS`: A literal that represents the app rating 13+.
- `FOURTEEN_PLUS`: A literal that represents the app rating 14+.
- `FIFTEEN_PLUS`: A literal that represents the app rating 15+.
- `SIXTEEN_PLUS`: A literal that represents the app rating 16+.
- `SEVENTEEN_PLUS`: A literal that represents the app rating 17+.
- `EIGHTEEN_PLUS`: A literal that represents the app rating 18+.
- `NINETEEN_PLUS`: A literal that represents the app rating 19+.
- `TWENTY_PLUS`: A literal that represents the app rating 20+.
- `TWENTY_ONE_PLUS`: A literal that represents the app rating 21+.
- `UNRATED`: A literal that represents the app rating unrated.

## Mentioned In

- [App Store Connect API 3.3 release notes](app-store-connect-api-3-3-release-notes.md)
- [App Store Connect API 4.4 release notes](app-store-connect-api-4-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

For more information about app ratings, see [Age ratings](https://developer.apple.com/help/app-store-connect/reference/age-ratings/).

## See Also

### Objects and data types

- [AgeRatingDeclaration](ageratingdeclaration.md): A set of content descriptors for your app that App Store Connect uses to assign an age rating.
- [AgeRatingDeclarationResponse](ageratingdeclarationresponse.md): A response containing a single age rating declaration with your app’s content descriptors.
- [AgeRatingDeclarationUpdateRequest](ageratingdeclarationupdaterequest.md): The request body you use to update an Age Rating Declaration.
- [AppInfoAgeRatingDeclarationLinkageResponse](appinfoageratingdeclarationlinkageresponse.md)
- [AppInfoTerritoryAgeRatingsLinkagesResponse](appinfoterritoryageratingslinkagesresponse.md): A response containing the resource identifiers of territory-specific age ratings for an app info record.
- [BrazilAgeRating](brazilagerating.md): String that represents the app’s age rating as it appears on the App Store in Brazil for all platforms.
- [KidsAgeBand](kidsageband.md): String that represents the age band for a Made for Kids app.
- [TerritoryAgeRating](territoryagerating.md): The data structure that represent a territory age-rating resource.
- [TerritoryAgeRatingsResponse](territoryageratingsresponse.md): A response containing a list of age ratings assigned to an app across App Store territories.

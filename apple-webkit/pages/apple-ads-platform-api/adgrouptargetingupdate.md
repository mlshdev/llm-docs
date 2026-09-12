> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adgrouptargetingupdate](https://developer.apple.com/documentation/apple-ads-platform-api/adgrouptargetingupdate)

# AdGroupTargetingUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The targeting configuration for updating an existing ad group, specifying audience dimensions to include or exclude.

## Declaration

```
object AdGroupTargetingUpdate
```

## Properties

- `country` — `AdGroupTargetingUpdate.Country`: Country-level geographic targeting. Include a country ID returned by the Geo Search API. See [TargetingDataUpdate](targetingdataupdate.md).
- `adminArea` — `AdGroupTargetingUpdate.AdminArea`: Administrative area (state or province) targeting. Include admin area IDs returned by the Geo API. See [TargetingDataUpdate](targetingdataupdate.md).
- `locality` — `AdGroupTargetingUpdate.Locality`: City or locality targeting. Include locality IDs returned by the Geo API. See [TargetingDataUpdate](targetingdataupdate.md).
- `postalCode` — `AdGroupTargetingUpdate.PostalCode`: Postal code geographic targeting. Include postal code IDs returned by the Geo API. See [TargetingDataUpdate](targetingdataupdate.md).
- `radius` — `AdGroupTargetingUpdate.Radius`: Radius targeting for Apple Maps campaigns. Valid values: `CLOSE`, `MEDIUM`, `FAR`. In practice, radius targeting applies only to `MAPS_SEARCH_RESULTS` campaigns. Avoid combining it with geo location targeting, though the API doesn’t enforce this constraint at the schema level. See [TargetingDataUpdate](targetingdataupdate.md).
- `deviceClass` — `AdGroupTargetingUpdate.DeviceClass`: Device class targeting (for example, `IPHONE`, `IPAD`). See [TargetingDataUpdate](targetingdataupdate.md).
- `minAge` — `AdGroupTargetingUpdate.MinAge`: Minimum age targeting for the audience. Minimum value is 18, maximum value is 64. See [TargetingDataUpdate](targetingdataupdate.md).
- `maxAge` — `AdGroupTargetingUpdate.MaxAge`: Maximum age targeting for the audience. Minimum value is 18, maximum value is 64. To target users 65 and older, omit `maxAge` or send `include` as `null`. See [TargetingDataUpdate](targetingdataupdate.md).
- `gender` — `AdGroupTargetingUpdate.Gender`: Gender targeting for the audience. Valid values: `M`, `F`. See [TargetingDataUpdate](targetingdataupdate.md).
- `appCategory` — `AdGroupTargetingUpdate.AppCategory`: App category targeting based on App Store categories. Category ID `100` is a special value representing the same category as the promoted app. A value of `100` in `include` means you’re targeting apps in the same category as your app, and a value of `100` in `exclude` means you aren’t. See [TargetingDataUpdate](targetingdataupdate.md).
- `appDownloader` — `AdGroupTargetingUpdate.AppDownloader`: Reach or suppress users based on whether they’ve downloaded specific apps. Use `include` to reach users who have downloaded those apps. Use `exclude` to suppress users who already have your app (acquisition targeting). Use the `adamId` of the app you’re promoting in your campaign as an included or excluded value; API users can only pass in their own apps. To target all users, don’t include this dimension in the request payload. See [TargetingDataUpdate](targetingdataupdate.md).
- `daypart` — `AdGroupTargetingUpdate.Daypart`: Time-of-day targeting (dayparting). Include-only. The API doesn’t support the `exclude` array for this dimension. Values are slot integers (0–167). For the full slot reference, see [AdGroupTargeting](adgrouptargeting.md). See [TargetingDataUpdate](targetingdataupdate.md).
- `locationGroup` — `AdGroupTargetingUpdate.LocationGroup`: Location group targeting for Apple Maps campaigns. See [TargetingDataUpdate](targetingdataupdate.md).

<a id="overview"></a>

## Overview

For valid location identifier values and geographic lookup, see [Geo Targeting Endpoints](geo-targeting-endpoints.md).

## Topics

### Dictionaries

- [AdGroupTargetingUpdate.AdminArea](adgrouptargetingupdate/adminarea-data.dictionary.md): State or province (administrative area) targeting.
- [AdGroupTargetingUpdate.AppCategory](adgrouptargetingupdate/appcategory-data.dictionary.md): App category targeting based on App Store categories, with include and exclude support.
- [AdGroupTargetingUpdate.AppDownloader](adgrouptargetingupdate/appdownloader-data.dictionary.md): The defined targeted audience according to app downloads.
- [AdGroupTargetingUpdate.Country](adgrouptargetingupdate/country-data.dictionary.md): Country-level geographic targeting.
- [AdGroupTargetingUpdate.Daypart](adgrouptargetingupdate/daypart-data.dictionary.md): Hour-of-day targeting, restricting delivery to specific one-hour slots in a 7-day week grid.
- [AdGroupTargetingUpdate.DeviceClass](adgrouptargetingupdate/deviceclass-data.dictionary.md): Device class targeting (for example, `IPHONE` or `IPAD`).
- [AdGroupTargetingUpdate.Gender](adgrouptargetingupdate/gender-data.dictionary.md): Gender targeting for the audience.
- [AdGroupTargetingUpdate.Locality](adgrouptargetingupdate/locality-data.dictionary.md): City or locality targeting.
- [AdGroupTargetingUpdate.LocationGroup](adgrouptargetingupdate/locationgroup-data.dictionary.md): Location group targeting, restricting delivery to the business locations in specified groups.
- [AdGroupTargetingUpdate.MaxAge](adgrouptargetingupdate/maxage-data.dictionary.md): Maximum age targeting, setting the upper bound of the target age range.
- [AdGroupTargetingUpdate.MinAge](adgrouptargetingupdate/minage-data.dictionary.md): Minimum age targeting, setting the lower bound of the target age range.
- [AdGroupTargetingUpdate.PostalCode](adgrouptargetingupdate/postalcode-data.dictionary.md): Postal code geographic targeting.
- [AdGroupTargetingUpdate.Radius](adgrouptargetingupdate/radius-data.dictionary.md): Radius targeting used with Apple Maps campaigns to restrict delivery to users within a given proximity of the brand’s locations.

## See Also

- [AdGroup](adgroup.md): Primary unit governing targeting, bid strategy, pricing model, and scheduling within a campaign.
- [AdGroupCreate](adgroupcreate.md): The request body for creating a new ad group.
- [AdGroupUpdate](adgroupupdate.md): The request body for updating an existing ad group.
- [AdGroupResponse](adgroupresponse.md): The response object for an ad group operation.
- [AdGroupQueryResponse](adgroupqueryresponse.md): The response object for an ad group query, containing matched results and pagination metadata.
- [AdGroupTargeting](adgrouptargeting.md): The comprehensive audience and placement configuration for an ad group.
- [AdGroupTargetingCreate](adgrouptargetingcreate.md): The targeting configuration for creating a new ad group, specifying audience dimensions to include or exclude.
- [BidStrategy](bidstrategy.md): Defines how an ad group or campaign competes in auctions, including bid type, optimization goal, and bid amount.
- [BidStrategyCreate](bidstrategycreate.md): The creation payload for configuring a bid strategy on an ad group or campaign.
- [BidStrategyUpdate](bidstrategyupdate.md): The request body for updating a bid strategy on an ad group or campaign.
- [CPAGoal](cpagoal.md): A deprecated cost-per-acquisition goal value. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalCreate](cpagoalcreate.md): The deprecated request payload for setting a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [CPAGoalUpdate](cpagoalupdate.md): The deprecated request payload for updating a cost-per-acquisition goal. Use `bidStrategy` with `MAX_CONVERSIONS` instead.
- [TargetingData](targetingdata.md): The shared include and exclude pattern for all ad group and campaign targeting dimensions.
- [TargetingDataCreate](targetingdatacreate.md): A targeting dimension value set for creating ad group or campaign targeting, specifying values to include or exclude.

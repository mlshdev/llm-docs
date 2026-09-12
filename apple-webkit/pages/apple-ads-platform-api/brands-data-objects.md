> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brands-data-objects](https://developer.apple.com/documentation/apple-ads-platform-api/brands-data-objects)

# Brands Data Objects

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** API Collection  
**Availability:** Apple Ads Platform API 1.0+

Reference the request and response objects for brand, location, and location group endpoints.

## Topics

- [Brand](brand.md): A brand eligible for promotion through Apple Maps ads.
- [BrandResponse](brandresponse.md): The Get Brand by ID endpoint returns this response object.
- [BrandQueryResponse](brandqueryresponse.md): The Query Brands endpoint returns this response object.
- [BrandRejectionReasonResponse](brandrejectionreasonresponse.md): A single policy assignment with rejection reason details for a brand entity.
- [BusinessCategory](businesscategory.md): A category in the Apple Maps business taxonomy used to classify brands and locations.
- [BusinessCategoryResponse](businesscategoryresponse.md): The Get Business Category endpoint returns this response object.
- [BusinessCategoryQueryResponse](businesscategoryqueryresponse.md): The Query Business Categories endpoint returns this response object.
- [Location](location.md): The brand location object.
- [LocationResponse](locationresponse.md): The response object returned by the Get a Location endpoint.
- [LocationGroup](locationgroup.md): A collection of business locations associated with a brand, used to target geos in Apple Maps campaigns.
- [LocationGroupCreate](locationgroupcreate.md): The request body object for creating a new location group.
- [LocationGroupUpdate](locationgroupupdate.md): The request body object for updating an existing location group.
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.
- [ConstraintGroup](constraintgroup.md): A constraint group defining the supply placements and countries or regions where a location is blocked or allowed to serve ads.
- [Rule](rule.md): A single filter rule for a dynamic location group.
- [IncludeExclude](includeexclude.md): Targeting criteria object specifying values to include or exclude in ad delivery.
- [PromotedObject](promotedobject.md): Promoted object details.
- [PolicyAssignmentQueryRequest](policyassignmentqueryrequest.md): The request body for querying policy assignment with rejection reason details.
- [PolicyAssignmentQueryResponse](policyassignmentqueryresponse.md): The response returned by the Query Rejection Reasons endpoint.

## See Also

### Ads on Apple Maps

- [Ads on Apple Maps Endpoints](brands-endpoints.md): Query and retrieve brands, business categories, and creative rejection reasons.
- [Managing Location Groups](location-groups-overview.md): Organize business locations into named groups that define which locations an ad group’s targeting applies to in Apple Maps campaigns.
- [Understanding Locations](locations-overview.md): Query and inspect the business locations associated with your brand for use in Apple Maps campaigns.
- [Brands Data Types](brands-data-types.md): Look up the enumerations and metric types used in Apple Maps campaigns.

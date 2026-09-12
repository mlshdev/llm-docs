> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/locationgroupresponse](https://developer.apple.com/documentation/apple-ads-platform-api/locationgroupresponse)

# LocationGroupResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object returned by the Get Location Group endpoint.

## Declaration

```
object LocationGroupResponse
```

## Properties

- `result` — `LocationGroup`: The retrieved [LocationGroup](locationgroup.md) object. Omitted from the response entirely if no location group was found (see the 404 case above), rather than being present as `null`. Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `LocationGroupResponse` object is the top-level envelope returned by [Get Location Group](get-location-group-by-id.md). On success, `result` contains a single [LocationGroup](locationgroup.md). On failure (for example, 404 Not Found), the response contains only the `error` object. The response omits the `result` key entirely rather than setting it to `null`.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": "5764607523034238976",
    "name": "AwayFinder West Coast Stores",
    "brandId": "9151314442816847872",
    "adAccountId": "293897290",
    "groupType": "DYNAMIC",
    "systemStatus": "VALID",
    "rules": [
      {
        "field": "adminArea",
        "operator": "IN",
        "value": [
          "California",
          "Oregon",
          "Washington"
        ]
      }
    ],
    "groupTotal": 42,
    "isAllLocationsGroup": false,
    "description": "All AwayFinder locations on the West Coast",
    "creationTime": "2026-02-01T09:00:00Z",
    "modificationTime": "2026-03-25T16:00:00Z",
    "eligibility": {
      "status": "ELIGIBLE"
    }
  }
}
```

## See Also

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
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.

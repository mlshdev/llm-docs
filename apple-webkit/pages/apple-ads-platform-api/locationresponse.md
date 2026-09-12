> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/locationresponse](https://developer.apple.com/documentation/apple-ads-platform-api/locationresponse)

# LocationResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The response object returned by the Get a Location endpoint.

## Declaration

```
object LocationResponse
```

## Properties

- `result` — `Location`: The retrieved [Location](location.md) object. Omitted from the response entirely if no location was found (see the 404 case above), rather than being present as `null`. Read-only.
- `error` — `Error`: Error details if the request failed. Absent on success. See [Error](error.md). Read-only.

<a id="Discussion"></a>

## Discussion

The `LocationResponse` object is the top-level envelope returned by [Get a Location](get-location-by-id.md). On success, `result` contains a single [Location](location.md) object representing a physical brand location sourced from Apple Maps. On failure (for example, 404 Not Found), the response contains only the `error` object. The response omits the `result` key entirely rather than setting it to `null`.

<a id="Example"></a>

### Example

```json
{
  "result": {
    "id": "7205759403792794",
    "name": "AwayFinder - Downtown SF",
    "brandId": "9151314442816847872",
    "status": "OPEN",
    "countryOrRegion": "US",
    "categories": [
      "travel",
      "tourism"
    ],
    "address": {
      "subThoroughfare": "123",
      "thoroughfare": "Market Street",
      "locality": "San Francisco",
      "adminArea": "California",
      "postalCode": "94105",
      "countryOrRegion": "US",
      "fullThoroughfare": "123 Market Street",
      "fullAddress": "123 Market Street, San Francisco, California 94105, US"
    },
    "displayPoint": {
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "creationTime": "2025-01-15T10:00:00.000",
    "modificationTime": "2026-03-20T14:45:00.000",
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
- [LocationGroup](locationgroup.md): A collection of business locations associated with a brand, used to target geos in Apple Maps campaigns.
- [LocationGroupCreate](locationgroupcreate.md): The request body object for creating a new location group.
- [LocationGroupUpdate](locationgroupupdate.md): The request body object for updating an existing location group.
- [LocationGroupResponse](locationgroupresponse.md): The response object returned by the Get Location Group endpoint.
- [LocationGroupQueryResponse](locationgroupqueryresponse.md): The response object returned by the Query Location Groups endpoint.
- [LocationQueryResponse](locationqueryresponse.md): The paginated response envelope returned by the Query Locations endpoint.
- [Eligibility](eligibility.md): Eligibility status and constraint details for a Business domain entity.

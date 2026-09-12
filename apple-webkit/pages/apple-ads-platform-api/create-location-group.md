> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/create-location-group](https://developer.apple.com/documentation/apple-ads-platform-api/create-location-group)

# Create Location Group

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Create a named group of locations for geographic targeting.

## URL

```http
POST https://api.ads.apple.com/v1/location-groups
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `LocationGroupCreate`

## Response Codes

- `200` OK — `LocationGroupResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `Error`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

Location groups define which physical locations are in scope for an ad group. All other settings, including schedule, creatives, and bids, live on the ad group or ad itself. Each group belongs to a single brand and ad account. You set both at creation, and neither can change afterward. Once created, reference the group’s `id` in an ad group’s targeting configuration to restrict delivery to those locations.

<a id="Request-Body"></a>

## Request Body

See [LocationGroupCreate](locationgroupcreate.md).

<a id="Payload-Examples"></a>

## Payload Examples

**Static Group**

<a id="Request"></a>

### Request

Creates a static group with an explicit list of location IDs.

```json
{
 "name": "AwayFinder Downtown Stores",
 "brandId": "9151314442816847872",
 "adAccountId": "293897290",
 "groupType": "STATIC",
 "locationIds": [
   "7205759403792794",
   "7205759403792795"
 ]
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "5764607523034238976",
   "name": "AwayFinder Downtown Stores",
   "brandId": "9151314442816847872",
   "adAccountId": "293897290",
   "groupType": "STATIC",
   "systemStatus": "VALID",
   "locationIds": [
     "7205759403792794",
     "7205759403792795"
   ],
   "groupTotal": 2,
   "isAllLocationsGroup": false,
   "creationTime": "2026-02-01T09:00:00Z",
   "modificationTime": "2026-02-01T09:00:00Z",
   "eligibility": {
     "status": "ELIGIBLE"
   }
 }
}
```

**Dynamic Group**

<a id="Request"></a>

### Request

Creates a dynamic group that automatically includes all locations in the specified states.

```json
{
 "name": "AwayFinder West Coast Stores",
 "brandId": "9151314442816847872",
 "adAccountId": "293897290",
 "groupType": "DYNAMIC",
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
 "description": "All AwayFinder locations on the West Coast"
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "5764607523034238977",
   "name": "AwayFinder West Coast Stores",
   "brandId": "9151314442816847872",
   "adAccountId": "293897290",
   "groupType": "DYNAMIC",
   "systemStatus": "PENDING",
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
   "groupTotal": 0,
   "isAllLocationsGroup": false,
   "description": "All AwayFinder locations on the West Coast",
   "creationTime": "2026-02-01T09:00:00Z",
   "modificationTime": "2026-02-01T09:00:00Z",
   "eligibility": {
     "status": "PENDING"
   }
 }
}
```

## See Also

- [Query Location Groups](query-location-groups.md): Retrieve a paginated list of location groups using filters and sorting.
- [Get Location Group](get-location-group-by-id.md): Retrieve a single location group by its unique identifier.
- [Update Location Group](update-location-group.md): Update an existing location group’s name, rules, or location membership.
- [Delete Location Group](delete-location-group.md): Delete a location group by its unique identifier.

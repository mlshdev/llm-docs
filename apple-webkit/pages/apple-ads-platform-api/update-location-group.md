> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/update-location-group](https://developer.apple.com/documentation/apple-ads-platform-api/update-location-group)

# Update Location Group

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Update an existing location group’s name, rules, or location membership.

## URL

```http
PUT https://api.ads.apple.com/v1/location-groups/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `LocationGroupUpdate`

## Response Codes

- `200` OK — `LocationGroupResponse`:
- `400` Bad Request — `LocationGroupResponse`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `LocationGroupResponse`:
- `404` Not Found — `LocationGroupResponse`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

The system modifies only the fields you include in the request body. Omitted fields retain their current values. See [LocationGroupUpdate](locationgroupupdate.md) for the request body’s accepted fields, including which ones are mutable.

The `brandId` and `adAccountId` fields can’t change after creation, and the update request body doesn’t accept them. To move a group to a different brand or transfer ownership to another ad account, delete the group and recreate it.

The `locationIds` and `rules` fields use full-replacement semantics: the value you send becomes the entire list, not a diff against the existing one, since the API doesn’t support partial updates within an array. To add a single location to a `STATIC` group, retrieve the current `locationIds` array, append the new ID, and send the complete list.

When you add or update rules on a `DYNAMIC` group, `systemStatus` transitions to `PENDING` while the system evaluates membership, and `groupTotal` keeps its last known value until evaluation completes. Updating only `name` or `description` leaves `systemStatus`, `groupTotal`, and membership unchanged. Because an ad group displays the place card for each location in its assigned location group, changing a group’s membership changes which place cards appear once evaluation (if triggered) completes.

<a id="Payload-Examples"></a>

## Payload Examples

**Update Rules**

<a id="Request"></a>

### Request

Replaces the rules on a dynamic group, triggering membership re-evaluation.

```json
PUT /v1/location-groups/{id}

{
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
 ]
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "5764607523034238976",
   "name": "AwayFinder West Coast Stores",
   "brandId": "9151314442816847872",
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
   "groupTotal": 42,
   "modificationTime": "2026-04-10T11:00:00Z",
   "eligibility": {
     "status": "PENDING"
   }
 }
}
```

**Rename Group**

<a id="Request"></a>

### Request

Updates only the display name without affecting membership.

```json
PUT /v1/location-groups/{id}

{
 "name": "AwayFinder Pacific Coast Stores"
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "5764607523034238976",
   "name": "AwayFinder Pacific Coast Stores",
   "brandId": "9151314442816847872",
   "groupType": "DYNAMIC",
   "systemStatus": "VALID",
   "groupTotal": 42,
   "modificationTime": "2026-04-10T12:00:00Z",
   "eligibility": {
     "status": "ELIGIBLE"
   }
 }
}
```

## See Also

- [Create Location Group](create-location-group.md): Create a named group of locations for geographic targeting.
- [Query Location Groups](query-location-groups.md): Retrieve a paginated list of location groups using filters and sorting.
- [Get Location Group](get-location-group-by-id.md): Retrieve a single location group by its unique identifier.
- [Delete Location Group](delete-location-group.md): Delete a location group by its unique identifier.

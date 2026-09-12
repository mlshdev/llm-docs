> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delete-location-group](https://developer.apple.com/documentation/apple-ads-platform-api/delete-location-group)

# Delete Location Group

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Delete a location group by its unique identifier.

## URL

```http
DELETE https://api.ads.apple.com/v1/location-groups/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `LocationGroupResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `Error`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `LocationGroupResponse`:
- `429` Too Many Requests — `Error`:
- `500` Internal Server Error — `Error`:

<a id="Discussion"></a>

## Discussion

This endpoint soft-deletes the location group. The system doesn’t physically remove the record. Instead, it marks the record with `systemStatus: DELETED` and excludes it from query results and ad group targeting lookups. Deletion is permanent. There is no restore operation.

<a id="Downstream-Effects"></a>

### Downstream Effects

Ad groups that reference the deleted location group lose that targeting constraint immediately and will only continue to serve if they are targeting other location groups.

Deletion carries a few important caveats:

| Constraint | Detail |
| --- | --- |
| Permanent | Deleted groups cannot be restored. Create a new group to replace a deleted one. |
| Still retrievable | A deleted group can still be fetched by ID and appears in queries that include a `deleted EQUALS true` filter. |
| Targeting impact | Ad groups referencing a deleted group lose the location constraint immediately upon deletion. |

<a id="Payload-Examples"></a>

## Payload Examples

**Delete Location Group**

<a id="Request"></a>

### Request

Deletes a location group by its unique identifier.

```
DELETE https://api.ads.apple.com/v1/location-groups/5764607523034238976
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": "5764607523034238976",
   "name": "AwayFinder West Coast Stores",
   "brandId": "9151314442816847872",
   "adAccountId": "293897290",
   "groupType": "DYNAMIC",
   "systemStatus": "DELETED",
   "isAllLocationsGroup": false,
   "creationTime": "2026-02-01T09:00:00Z",
   "modificationTime": "2026-04-15T10:00:00Z"
 }
}
```

## See Also

- [Create Location Group](create-location-group.md): Create a named group of locations for geographic targeting.
- [Query Location Groups](query-location-groups.md): Retrieve a paginated list of location groups using filters and sorting.
- [Get Location Group](get-location-group-by-id.md): Retrieve a single location group by its unique identifier.
- [Update Location Group](update-location-group.md): Update an existing location group’s name, rules, or location membership.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delete-creatives-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/delete-creatives-_id_)

# Delete an Ad Creative

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Remove an ad creative by its unique identifier.

## URL

```http
DELETE https://api.ads.apple.com/v1/creatives/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string` (required):

## Response Codes

- `200` OK — `Response`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` Too Many Requests — `ErrorResponse`:
- `500` Internal Server Error — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint soft-deletes an ad creative: the system retains the ad creative record with `deleted: true`, but you can no longer use it to create new ads. The system automatically sets existing ads that reference the ad creative to `systemStatus: NOT_RUNNING`.

Deleted ad creatives can’t be restored. To use a similar ad creative, create a new ad creative with the same properties.

<a id="Understand-the-Impact-on-Ads"></a>

### Understand the Impact on Ads

Deleting an ad creative affects all ads that reference it:

| Effect | Detail |
| --- | --- |
| Ads stop serving | All ads using this ad creative will have `systemStatus: NOT_RUNNING`. |
| Ads are not deleted | The ads themselves aren’t deleted; only their delivery stops. |
| Irreversible | Deleting an ad creative cannot be undone. Create a new ad creative to resume delivery. |

Keep these constraints in mind before issuing the delete request.

| Constraint | Detail |
| --- | --- |
| Soft delete | The system marks ad creative records deleted but retains them for audit and reporting purposes. |
| Associated ads paused | All ads linked to a deleted ad creative stop serving immediately. |
| Cannot delete already-deleted | Attempting to delete an already-deleted ad creative returns 404. |

<a id="Payload-Examples"></a>

## Payload Examples

**Delete Creative**

<a id="Request"></a>

### Request

Deletes an ad creative by its unique identifier. The system soft-deletes the ad creative and automatically sets existing ads that reference it to `systemStatus: NOT_RUNNING`.

```
DELETE https://api.ads.apple.com/v1/creatives/666777888
```

<a id="Response"></a>

### Response

```json
{}
```

## See Also

- [Create an Ad Creative](post-creatives.md): Add a new ad creative that defines the visual presentation and tap destination for an ad.
- [Query Ad Creatives](post-creatives-query.md): Retrieve ad creatives that match structured filter, sort, and pagination criteria.
- [Get an Ad Creative](get-creatives-_id_.md): Fetch a single ad creative by its unique identifier.
- [Update an Ad Creative](put-creatives-_id_.md): Change an ad creative’s name or creative spec by its unique identifier.

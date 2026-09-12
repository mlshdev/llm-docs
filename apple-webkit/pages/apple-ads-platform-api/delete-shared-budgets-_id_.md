> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delete-shared-budgets-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/delete-shared-budgets-_id_)

# Delete a Budget Order

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Soft-deletes a budget order by its unique identifier.

## URL

```http
DELETE https://api.ads.apple.com/v1/shared-budgets/{id}
```

## Path Parameters

- `id` — `string` (required):

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

This endpoint soft-deletes the specified budget order. The system marks the record `deleted: true`, and it’s no longer available for assignment to campaigns. You must remove all campaign assignments before you can delete a budget order.

<a id="Check-deletion-restrictions"></a>

### Check deletion restrictions

Deletion returns a `400 Bad Request` in the following cases:

- The budget order has been canceled (status reason `CANCELED`).
- The budget order has completed or expired (status reason `SCHEDULE_EXPIRED`).
- The budget order is exhausted (status reason `EXHAUSTED`).
- The budget order has already started (start time is in the past).
- The budget order has campaigns currently assigned to it. Remove all campaign assignments first.

Deleting an already-deleted budget order returns a `404 Not Found`.

Deletion has different implications depending on what you’re trying to do next:

| Scenario | Behavior |
| --- | --- |
| Campaign assignments | You must remove them before deletion is allowed. A budget order with active campaign assignments cannot be deleted. |
| Querying deleted budget orders | Include `deleted: EQUALS: true` in query filters to return deleted budget orders. |
| Restoration | The API cannot restore soft-deleted budget orders. |
| Re-creation | Create a new budget order with the same name and parameters if needed. |

<a id="Payload-Examples"></a>

## Payload Examples

**Delete a Budget Order**

<a id="Request"></a>

### Request

Deletes a budget order by its unique identifier. Remove all campaign assignments before issuing this request. A successful delete returns HTTP 200 with an empty response body.

```
DELETE https://api.ads.apple.com/v1/shared-budgets/777890001
```

<a id="Response"></a>

### Response

```json
{}
```

## See Also

- [Get a Budget Order by ID](get-shared-budgets-_id_.md): Retrieves a single budget order by its ID.
- [Create a Budget Order](post-shared-budgets.md): Creates a budget order that can be assigned to campaigns within an ad account.
- [Query Budget Orders](post-shared-budgets-query.md): Returns a filtered, sorted, and paginated list of budget orders.
- [Update a Budget Order](put-shared-budgets-_id_.md): Updates mutable fields of an existing budget order by its unique identifier.

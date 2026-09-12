> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/put-shared-budgets-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/put-shared-budgets-_id_)

# Update a Budget Order

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Updates mutable fields of an existing budget order by its unique identifier.

## URL

```http
PUT https://api.ads.apple.com/v1/shared-budgets/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SharedBudgetUpdate`

## Response Codes

- `200` OK — `SharedBudgetResponse`: Successful operation. Returns [SharedBudgetResponse](sharedbudgetresponse.md) (`result`: [SharedBudget](sharedbudget.md)).
- `400` Bad Request — `ErrorResponse`: Bad Request. Returns [ErrorResponse](errorresponse.md).
- `401` Unauthorized — `ErrorResponse`: Unauthorized.
- `403` Forbidden — `ErrorResponse`: Forbidden.
- `404` Not Found — `ErrorResponse`: Resource not found. Returns [ErrorResponse](errorresponse.md).
- `429` Too Many Requests — `ErrorResponse`: Rate Limit Exceeded. See [Applying Rate Limits](rate-limits.md).
- `500` Internal Server Error — `ErrorResponse`: Internal Server Error. Returns [ErrorResponse](errorresponse.md).

<a id="Discussion"></a>

## Discussion

This endpoint updates one or more mutable fields on an existing budget order. Only include the fields you want to change. Fields you don’t include remain unchanged. Pass the budget order `id` as a URL path parameter. You don’t need to include it in the request body. End date changes on active budget orders can only shorten the period, not extend it, except that you can set `endTime` to `null` to remove the expiration date entirely and make the budget open-ended.

<a id="Payload-Examples"></a>

## Payload Examples

**Increase Budget**

<a id="Request"></a>

### Request

Increase the total budget order amount on an active budget order.

```json
PUT /v1/shared-budgets/{id}

{
 "value": {
   "amount": "25000.00",
   "currency": "USD"
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777890001,
   "name": "AwayFinder Q3 2025 Budget",
   "startTime": "2025-07-01T00:00:00.000",
   "endTime": "2025-09-30T23:59:59.000",
   "value": {
     "amount": "25000.00",
     "currency": "USD"
   },
   "adAccountIds": [
     123456789
   ],
   "systemStatus": "ACTIVE",
   "systemStatusReasons": [],
   "deleted": false,
   "creationTime": "2025-06-01T10:00:00.000",
   "modificationTime": "2025-07-15T09:30:00.000"
 }
}
```

**Rename and Update Invoice**

<a id="Request"></a>

### Request

Rename the budget order and update the invoice order number.

```json
PUT /v1/shared-budgets/{id}

{
 "name": "AwayFinder Q3+Q4 2025 Budget",
 "invoiceDetail": {
   "orderNumber": "PO-2025-Q3Q4"
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777890001,
   "name": "AwayFinder Q3+Q4 2025 Budget",
   "startTime": "2025-07-01T00:00:00.000",
   "endTime": "2025-09-30T23:59:59.000",
   "value": {
     "amount": "25000.00",
     "currency": "USD"
   },
   "adAccountIds": [
     123456789
   ],
   "systemStatus": "ACTIVE",
   "systemStatusReasons": [],
   "deleted": false,
   "creationTime": "2025-06-01T10:00:00.000",
   "modificationTime": "2025-07-15T09:30:00.000"
 }
}
```

## See Also

- [Get a Budget Order by ID](get-shared-budgets-_id_.md): Retrieves a single budget order by its ID.
- [Create a Budget Order](post-shared-budgets.md): Creates a budget order that can be assigned to campaigns within an ad account.
- [Query Budget Orders](post-shared-budgets-query.md): Returns a filtered, sorted, and paginated list of budget orders.
- [Delete a Budget Order](delete-shared-budgets-_id_.md): Soft-deletes a budget order by its unique identifier.

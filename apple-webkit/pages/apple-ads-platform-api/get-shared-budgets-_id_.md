> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/get-shared-budgets-_id_](https://developer.apple.com/documentation/apple-ads-platform-api/get-shared-budgets-_id_)

# Get a Budget Order by ID

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Retrieves a single budget order by its ID.

## URL

```http
GET https://api.ads.apple.com/v1/shared-budgets/{id}
```

## Path Parameters

- `id` — `string` (required):

## Header Parameters

- `X-Ap-Context` — `string`:

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

This endpoint retrieves the full details of a specific budget order by its ID. The response includes the budget order’s value, active date range, assigned ad accounts, and invoice details.

<a id="Payload-Examples"></a>

## Payload Examples

**Get a Budget Order by ID**

<a id="Request"></a>

### Request

Retrieves the full details of a specific budget order by its ID.

```
GET https://api.ads.apple.com/v1/shared-budgets/777888999
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777888999,
   "orgId": 100456789,
   "name": "AwayFinder - Q1 2025 Budget",
   "startTime": "2025-01-01T00:00:00.000",
   "endTime": "2025-03-31T23:59:59.000",
   "value": {
     "amount": "10000.00",
     "currency": "USD"
   },
   "adAccountIds": [
     123456789
   ],
   "systemStatus": "ACTIVE",
   "systemStatusReasons": [],
   "invoiceDetail": {
     "primaryBuyerName": "Jane Smith",
     "primaryBuyerEmail": "jane.smith@awayfinder.com",
     "billingEmail": "billing@awayfinder.com"
   },
   "deleted": false,
   "creationTime": "2025-01-01T00:00:00.000",
   "modificationTime": "2025-01-01T00:00:00.000"
 }
}
```

## See Also

- [Create a Budget Order](post-shared-budgets.md): Creates a budget order that can be assigned to campaigns within an ad account.
- [Query Budget Orders](post-shared-budgets-query.md): Returns a filtered, sorted, and paginated list of budget orders.
- [Update a Budget Order](put-shared-budgets-_id_.md): Updates mutable fields of an existing budget order by its unique identifier.
- [Delete a Budget Order](delete-shared-budgets-_id_.md): Soft-deletes a budget order by its unique identifier.

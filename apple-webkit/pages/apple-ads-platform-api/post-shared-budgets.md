> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/post-shared-budgets](https://developer.apple.com/documentation/apple-ads-platform-api/post-shared-budgets)

# Create a Budget Order

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Creates a budget order that can be assigned to campaigns within an ad account.

## URL

```http
POST https://api.ads.apple.com/v1/shared-budgets
```

## HTTP Body

Content type: `application/json`

Type: `SharedBudgetCreate`

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

This endpoint creates a budget order that campaigns can draw from via `SharedBudgetAssignment`. With a budget order, total spend across all assigned campaigns can’t exceed the budget order’s `value`, providing centralized cost control across a campaign group.

<a id="Payload-Examples"></a>

## Payload Examples

**Create a Budget Order**

<a id="Request"></a>

### Request

Creates a $20,000 budget order for Q3 2026, active from July through September.

```json
{
 "name": "AwayFinder - Q3 2026 Budget",
 "startTime": "2026-07-01T00:00:00.000",
 "endTime": "2026-09-30T23:59:59.000",
 "value": {
   "amount": "20000.00",
   "currency": "USD"
 },
 "adAccountIds": [
   123456789
 ],
 "invoiceDetail": {
   "name": "AwayFinder Q3 2026 Invoice",
   "primaryBuyerName": "Jane Smith",
   "primaryBuyerEmail": "jane.smith@awayfinder.com",
   "billingEmail": "billing@awayfinder.com"
 }
}
```

<a id="Response"></a>

### Response

```json
{
 "result": {
   "id": 777890001,
   "name": "AwayFinder - Q3 2026 Budget",
   "startTime": "2026-07-01T00:00:00.000",
   "endTime": "2026-09-30T23:59:59.000",
   "value": {
     "amount": "20000.00",
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
   "creationTime": "2026-06-06T10:00:00.000",
   "modificationTime": "2026-06-06T10:00:00.000"
 }
}
```

## See Also

- [Get a Budget Order by ID](get-shared-budgets-_id_.md): Retrieves a single budget order by its ID.
- [Query Budget Orders](post-shared-budgets-query.md): Returns a filtered, sorted, and paginated list of budget orders.
- [Update a Budget Order](put-shared-budgets-_id_.md): Updates mutable fields of an existing budget order by its unique identifier.
- [Delete a Budget Order](delete-shared-budgets-_id_.md): Soft-deletes a budget order by its unique identifier.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/query-keyword-suggestions](https://developer.apple.com/documentation/apple-ads-platform-api/query-keyword-suggestions)

# Query Keyword Suggestions

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Query keyword suggestions based on search terms and App Store countries or regions using structured filters.

## URL

```http
POST https://api.ads.apple.com/v1/suggestions/keywords/query
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `RecommendationQueryRequest`

See [RecommendationQueryRequest](recommendationqueryrequest.md).

## Response Codes

- `200` OK — `RecommendationQueryKeywordSuggestionResponse`:
- `400` Bad Request — `RecommendationResponseBody`:
- `401` Unauthorized — `RecommendationResponseBody`:
- `403` Forbidden — `RecommendationResponseBody`:
- `404` Not Found — `RecommendationResponseBody`:
- `429` Too Many Requests — `RecommendationResponseBody`:
- `500` Internal Server Error — `RecommendationResponseBody`:

<a id="Discussion"></a>

## Discussion

Each [KeywordSuggestion](keywordsuggestion.md) result contains `text` (the suggested keyword string) and `popularity` (a relative score). Sort by `popularity DESC` and use `pagination` to page through results.

See [FilterOperator](recommendationfilteroperator.md) for the full set of supported comparison operators.

<a id="Filterable-Fields"></a>

### Filterable Fields

| Field | Type | Operators | Description |
| --- | --- | --- | --- |
| `promotedObjectId` | string | `EQUALS` | Required. The app Adam ID. Keyword suggestions are scoped to the promoted app. |
| `promotedObjectType` | string (enum) | `EQUALS` | Required. The type of promoted object. |
| `terms` | array of strings | `IN` | Optional. Specific search terms to get suggestions for. |
| `countriesOrRegions` | array of strings | `IN` | Optional. App Store country or region codes to scope results to. |

<a id="Payload-Examples"></a>

## Payload Examples

This example queries keyword suggestions for an app scoped to the US and GB App Store countries or regions, seeded by specific search terms. The response returns suggested keyword strings with their relative popularity scores.

**Query Keyword Suggestions**

<a id="Request"></a>

### Request

```json
POST /v1/suggestions/keywords/query

{
 "filters": [
   {
     "field": "promotedObjectId",
     "operator": "EQUALS",
     "value": [
       "123456"
     ]
   },
   {
     "field": "promotedObjectType",
     "operator": "EQUALS",
     "value": [
       "APPSTORE_APP"
     ]
   },
   {
     "field": "terms",
     "operator": "IN",
     "value": [
       "productivity",
       "task management"
     ]
   },
   {
     "field": "countriesOrRegions",
     "operator": "IN",
     "value": [
       "US",
       "GB"
     ]
   }
 ]
}
```

<a id="Response"></a>

### Response

```json
{
 "result": [
   {
     "text": "productivity app",
     "popularity": 85
   },
   {
     "text": "task manager",
     "popularity": 72
   },
   {
     "text": "to do list",
     "popularity": 68
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
   "totalCount": 3
 }
}
```

## See Also

- [Query Phrase Suggestions](query-phrase-suggestions.md): Query phrase suggestions using either a discovery or search route based on the query type.
- [Query Category Suggestions](query-category-suggestions.md): Query category suggestions for apps or brands using either a discovery or search route based on the query type.
- [Query Target CPA Suggestion](query-target-cpa-suggestion.md): Retrieve the recommended target CPA for a new Maximize Conversions campaign on the App Store.

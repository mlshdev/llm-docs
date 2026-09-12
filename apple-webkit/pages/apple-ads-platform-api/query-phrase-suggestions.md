> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/query-phrase-suggestions](https://developer.apple.com/documentation/apple-ads-platform-api/query-phrase-suggestions)

# Query Phrase Suggestions

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Ads Platform API 1.0+

Query phrase suggestions using either a discovery or search route based on the query type.

## URL

```http
POST https://api.ads.apple.com/v1/suggestions/phrases/query
```

## Header Parameters

- `X-Ap-Context` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `RecommendationQueryRequest`

See [RecommendationQueryRequest](recommendationqueryrequest.md). This endpoint supports two query routes selected by the `queryType` filter: `SUGGESTION` discovers phrases for an app or Apple Maps brand, and `SEARCH` looks up or searches specific phrases.

## Response Codes

- `200` OK — `RecommendationQueryPhraseSuggestionResponse`:
- `400` Bad Request — `RecommendationResponseBody`:
- `401` Unauthorized — `RecommendationResponseBody`:
- `403` Forbidden — `RecommendationResponseBody`:
- `404` Not Found — `RecommendationResponseBody`:
- `429` Too Many Requests — `RecommendationResponseBody`:
- `500` Internal Server Error — `RecommendationResponseBody`:

<a id="Discussion"></a>

## Discussion

Each result is a [PhraseSuggestion](phrasesuggestion.md) object. Sort by `popularity DESC` and use `pagination` to page through results.

Use `SUGGESTION` to discover new candidate phrases for an app or brand. It requires `promotedObjectId` and `promotedObjectType`, and works well when building a phrase list from scratch. Use `SEARCH` to look up or match specific phrases you already have in mind, using `phrase` with `IN` for an exact popularity lookup or `LIKE` for a partial match. The `SEARCH` route doesn’t require `promotedObjectId`.

See [FilterOperator](recommendationfilteroperator.md) for the full set of supported comparison operators.

<a id="Filterable-Fields"></a>

### Filterable Fields

| Field | Type | Operators | Description |
| --- | --- | --- | --- |
| `queryType` | string (enum) | `EQUALS` | Required. `SUGGESTION` discovers phrases for an app or brand, and `SEARCH` looks up or searches specific phrases. |
| `promotedObjectId` | string | `EQUALS` | Required for the `SUGGESTION` route. The App Store app ID or brand ID, depending on `promotedObjectType`. |
| `promotedObjectType` | string (enum) | `EQUALS` | Required for the `SUGGESTION` route. `APPSTORE_APP` or `BUSINESS_BRAND`. |
| `phrase` | string | `IN`, `LIKE` | Required for the `SEARCH` route. `IN` fetches popularity for specific phrases. `LIKE` performs a string match search. |

<a id="Payload-Examples"></a>

## Payload Examples

These examples discover relevant search phrases for an app or brand using the SUGGESTION route, and look up or search specific phrases using the SEARCH route.

**Discover Phrases for an App**

<a id="Request"></a>

### Request

```json
POST /v1/suggestions/phrases/query

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
     "field": "queryType",
     "operator": "EQUALS",
     "value": [
       "SUGGESTION"
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
     "phrase": "best productivity apps",
     "popularity": 82
   },
   {
     "phrase": "task management tools",
     "popularity": 75
   },
   {
     "phrase": "organize my day app",
     "popularity": 61
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
   "totalCount": 3
 }
}
```

**Discover Phrases for Maps**

<a id="Request"></a>

### Request

```json
POST /v1/suggestions/phrases/query

{
 "filters": [
   {
     "field": "promotedObjectId",
     "operator": "EQUALS",
     "value": [
       "9151314442816847872"
     ]
   },
   {
     "field": "promotedObjectType",
     "operator": "EQUALS",
     "value": [
       "BUSINESS_BRAND"
     ]
   },
   {
     "field": "queryType",
     "operator": "EQUALS",
     "value": [
       "SUGGESTION"
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
     "phrase": "coffee shop near me",
     "popularity": 88
   },
   {
     "phrase": "family friendly restaurant",
     "popularity": 70
   },
   {
     "phrase": "best brunch spot",
     "popularity": 64
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
   "totalCount": 3
 }
}
```

**Search by Phrase**

This example uses `IN` to fetch popularity for specific known phrases, using the SEARCH route.

<a id="Request"></a>

### Request

```json
POST /v1/suggestions/phrases/query

{
 "filters": [
   {
     "field": "queryType",
     "operator": "EQUALS",
     "value": [
       "SEARCH"
     ]
   },
   {
     "field": "phrase",
     "operator": "IN",
     "value": [
       "best productivity apps",
       "task management tools"
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
     "phrase": "best productivity apps",
     "popularity": 82
   },
   {
     "phrase": "task management tools",
     "popularity": 75
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
   "totalCount": 2
 }
}
```

**Search by Partial Match**

This example uses `LIKE` to perform a partial string match search across all available phrases, rather than looking up specific phrases with `IN`.

<a id="Request"></a>

### Request

```json
POST /v1/suggestions/phrases/query

{
 "filters": [
   {
     "field": "queryType",
     "operator": "EQUALS",
     "value": [
       "SEARCH"
     ]
   },
   {
     "field": "phrase",
     "operator": "LIKE",
     "value": [
       "productivity"
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
     "phrase": "best productivity apps",
     "popularity": 82
   },
   {
     "phrase": "productivity tools for teams",
     "popularity": 58
   }
 ],
 "pagination": {
   "offset": 0,
   "pageSize": 20,
   "totalCount": 2
 }
}
```

## See Also

- [Query Keyword Suggestions](query-keyword-suggestions.md): Query keyword suggestions based on search terms and App Store countries or regions using structured filters.
- [Query Category Suggestions](query-category-suggestions.md): Query category suggestions for apps or brands using either a discovery or search route based on the query type.
- [Query Target CPA Suggestion](query-target-cpa-suggestion.md): Retrieve the recommended target CPA for a new Maximize Conversions campaign on the App Store.

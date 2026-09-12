> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/selector](https://developer.apple.com/documentation/apple_ads/selector)

# Selector

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The selector objects available to filter returned data.

## Declaration

```
object Selector
```

## Properties

- `conditions` — `[Condition]`: A list of condition objects that allow users to filter a list of records.
- `fields` — `[string]`: A list of field names to return within each record.
- `orderBy` — `[Sorting]`: A list of field names and grouping to sort the records by `ASCENDING` or `DESCENDING`.
- `pagination` — `Pagination`: A defined range and limit of the number of returned records.

<a id="Discussion"></a>

## Discussion

[Selector](selector.md) objects define what data the API returns when fetching resources. You use [Selector](selector.md) objects with find calls and reporting endpoints.

| **Functionality** | **Description** |
| --- | --- |
| Filtering | Specifies the criteria to filter the resources that return. |
| Sorting | Specifies the criteria to order the resources that return. |
| Paginating | Specifies the page segment of resources that return. |

The following is an example of using selectors to filter returned records:

```console
POST https://api.searchads.apple.com/api/v5/campaigns/find

{  
  "fields": [
    "id",
    "name",
    "adamId",
    "dailyBudgetAmount",
    "status",
    "servingStatus"
  ],
  "conditions": [
    {
      "field": "servingStatus",
      "operator": "IN",
      "values": [
        "NOT_RUNNING"
      ]
    }
  ],
  "orderBy": [
    {
      "field": "id",
      "sortOrder": "DESCENDING"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 10
  }
}

```

You can also use [Selector](selector.md) objects to find archived or soft-deleted campaigns. By default, API fetch calls don’t return deleted resources, with the exception of GET by `a` resource `Id`. To retrieve deleted resources, you must explicitly request the call using the selector [Condition](condition.md).

The following example returns both deleted and undeleted resources:

```json
{
  "fields": null,
  "conditions": [
    {
      "field": "deleted",
      "operator": "IN",
      "values": [
        true,
        false
      ]
    }
  ],
  "orderBy": [
    {
      "field": "name",
      "sortOrder": "ASCENDING"
    }
  ],
  "pagination": {
    "offset": 0,
    "limit": 100
  }
}

```

## See Also

### API Usability

- [Condition](condition.md): The list of condition objects that allow users to filter a list of records.
- [PageDetail](pagedetail.md): The number of items that return in the page.
- [Pagination](pagination.md): The procedure to refine returned results using limit and offset parameters.
- [Sorting](sorting.md): The order of grouped results.

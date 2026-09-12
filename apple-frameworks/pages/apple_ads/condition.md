> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/condition](https://developer.apple.com/documentation/apple_ads/condition)

# Condition

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The list of condition objects that allow users to filter a list of records.

## Declaration

```
object Condition
```

## Properties

- `field` — `string`: The name of a field.
- `ignoreCase` — `boolean`:
- `operator` — `string`: The operator values compare attributes to a list of specified values.

  - **BETWEEN**: The attribute matches the values within a specified range. The values can be numbers, text, or dates.
  - **CONTAINS**: The attribute matches the value in the specified list.
  - **CONTAINS_ALL**: The attribute has all of the values in the specified list.

    The attribute must be a collection type.
  - **CONTAINS_ANY**: The attribute contains any of the values in the specified list.

    The attribute must be a collection type.
  - **ENDSWITH**: The attribute matches the suffix of a string.
  - **EQUALS**: The attribute contains exact values.
  - **GREATER_THAN**: The value is greater than the specified value.

    You can use this attribute with time parameters.
  - **IN**: The attribute matches any value in a list of specified values.
  - **LESS_THAN**: The value is less than the specified value.

    You can use this attribute with time parameters.
  - **STARTSWITH**: The attribute matches the prefix of a string.  
  **Allowed values:** `BETWEEN`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_ANY`, `ENDSWITH`, `EQUALS`, `GREATER_THAN`, `IN`, `LESS_THAN`, `LIKE`, `STARTSWITH`
- `values` — `[string]`: A list of matching values.

## Mentioned In

- [Apple Ads Campaign Management API 5](apple-search-ads-campaign-management-api-5.md)

<a id="Discussion"></a>

## Discussion

The `Condition` object functionality is similar to the `WHERE` clause in SQL.

## See Also

### API Usability

- [PageDetail](pagedetail.md): The number of items that return in the page.
- [Pagination](pagination.md): The procedure to refine returned results using limit and offset parameters.
- [Selector](selector.md): The selector objects available to filter returned data.
- [Sorting](sorting.md): The order of grouped results.

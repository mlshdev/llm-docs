> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/sovcondition](https://developer.apple.com/documentation/apple_ads/sovcondition)

# SovCondition

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.6+

The list of condition objects that allow users to filter a list of records.

## Declaration

```
object SovCondition
```

## Properties

- `field` — `string`: A list of field names to return within each record.
- `operator` — `string`: The operator values compare attributes to a list of specified values.

  The `IN` operator matches any value in a list of specified values.  
  **Allowed values:** `IN`
- `values` — `[string]`: A list of matching values.

<a id="Discussion"></a>

## Discussion

The `Condition` object functionality is similar to the `WHERE` clause in SQL.

## See Also

### Impression Share Report Request and Response Objects

- [CustomReportRequest](customreportrequest.md): The Impression Share report request body.
- [CustomReportResponse](customreportresponse.md): A container for Impression Share report metrics.
- [CustomReportResponseBody](customreportresponsebody.md): A container for the Impression Share report response body.

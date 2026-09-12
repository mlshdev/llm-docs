> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/filter/value-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/filter/value-data.dictionary)

# Filter.Value

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The comparison operand supplied for the filter condition.

## Declaration

```
object Filter.Value
```

<a id="Discussion"></a>

## Discussion

For single-value operators (`EQUALS`, `NOT_EQUALS`, `GREATER_THAN`, and similar), pass either a bare string or a single-element array. For multi-value operators (`IN`, `BETWEEN`, `CONTAINS_ANY`, `CONTAINS_ALL`), pass an array. The server enforces the operator-specific cardinality.

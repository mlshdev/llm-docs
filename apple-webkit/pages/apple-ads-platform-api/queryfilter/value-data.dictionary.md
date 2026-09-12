> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/queryfilter/value-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/queryfilter/value-data.dictionary)

# QueryFilter.Value

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The comparison value or values for a `QueryFilter` condition.

## Declaration

```
object QueryFilter.Value
```

<a id="Discussion"></a>

## Discussion

The `QueryFilter.value` field accepts a scalar, an array, or no value at all, depending on the `operator`. Pass an array for operators that accept multiple values (`IN`, `NOT_IN`, `CONTAINS_ANY`, `CONTAINS_ALL`, `NOT_CONTAINS_ANY`, `NOT_CONTAINS_ALL`, `BETWEEN`), a scalar for operators that accept a single value (`EQUALS`, `STARTS_WITH`), or omit it entirely for the null-check operators `IS_NULL` and `IS_NOT_NULL`. See [QueryFilterOperator](../queryfilteroperator.md) for the full operator reference.

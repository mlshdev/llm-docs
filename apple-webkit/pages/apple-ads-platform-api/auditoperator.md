> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/auditoperator](https://developer.apple.com/documentation/apple-ads-platform-api/auditoperator)

# AuditOperator

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of comparison operators supported in audit filter conditions for change history queries.

## Declaration

```
string AuditOperator
```

## Possible Values

- `EQUALS`: Exact match. The field value must equal the single provided filter value.
- `IN`: Set membership. The field value must be one of the provided values. Use this for categorical fields like `entityType`, `eventType`, and `userType`.
- `LESS_THAN`: The field value must be strictly less than the provided value.
- `LESS_THAN_OR_EQUAL_TO`: The field value must be less than or equal to the provided value.
- `GREATER_THAN`: The field value must be strictly greater than the provided value.
- `GREATER_THAN_OR_EQUAL_TO`: The field value must be greater than or equal to the provided value.
- `BETWEEN`: The field value must fall within the inclusive range defined by exactly two values. Required for `eventTime` filters.

<a id="Discussion"></a>

## Discussion

The `AuditOperator` determines how the system applies the filter `values` against the target field. Use `GREATER_THAN` or `LESS_THAN` with a single timestamp for an open-ended `eventTime` filter.

Every valid `AuditQuery` must include at least one filter on `eventTime` using `BETWEEN`, `GREATER_THAN`, or `LESS_THAN`. All other filters use `IN`.

The endpoint that accepts an `AuditFilter` is [Query Change History](query-audit-summary-_-grouped-by-transaction.md).

## See Also

- [AuditEventType](auditeventtype.md): Enumeration of change operation types in change history, used in audit summary objects, change detail objects, and query filters.
- [AuditSortOrder](auditsortorder.md): Sort direction for audit sorting entries in a change history query.
- [AuditUserType](auditusertype.md): Enumeration of actor categories in change history records.

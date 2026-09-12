> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/auditfilter/value-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/auditfilter/value-data.dictionary)

# AuditFilter.Value

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

One or more filter values, provided as a string or array of strings.

## Declaration

```
object AuditFilter.Value
```

<a id="Discussion"></a>

## Discussion

The `AuditFilter.value` field accepts a single value or an array of values, depending on the field and operator. For `eventTime`, pass two values with `BETWEEN` for an inclusive date range, or a single value with `GREATER_THAN` or `LESS_THAN`. For every other filterable field (`entityType`, `entityId`, `eventType`, `userType`, `userId`, `txnId`, `adAccountId`, `campaignId`, `adGroupId`), pass a single value with `EQUALS` or an array of values with `IN`. As the third key in an [AuditFilter](../auditfilter.md) entry, `value` pairs with `field` (the target field name) and `operator` (the comparison to apply against it).

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/auditusertype](https://developer.apple.com/documentation/apple-ads-platform-api/auditusertype)

# AuditUserType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of actor categories in change history records.

## Declaration

```
string AuditUserType
```

## Possible Values

- `CUSTOMER`: A human user acting through the Apple Ads UI.
- `CUSTOMER_API`: An automated process acting through the Apple Ads Platform API.
- `APPLE_SUPPORT`: An Apple support representative performing an account operation on behalf of an advertiser.

<a id="Discussion"></a>

## Discussion

The `AuditUserType` appears in the `userType` field of [AuditSummary](auditsummary.md) and [ChangeDetails](changedetails.md) records. Use it to distinguish manual advertiser-initiated changes from API-driven automation or Apple-initiated actions.

Filter by `userType` in an [AuditQuery](auditquery.md) to scope results to a specific actor category:

```json
{
  "field": "userType",
  "operator": "IN",
  "value": [
    "CUSTOMER_API"
  ]
}
```

This is especially useful when auditing API-driven changes independently of UI actions.

## See Also

- [AuditEventType](auditeventtype.md): Enumeration of change operation types in change history, used in audit summary objects, change detail objects, and query filters.
- [AuditOperator](auditoperator.md): Enumeration of comparison operators supported in audit filter conditions for change history queries.
- [AuditSortOrder](auditsortorder.md): Sort direction for audit sorting entries in a change history query.

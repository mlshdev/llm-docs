> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/auditeventtype](https://developer.apple.com/documentation/apple-ads-platform-api/auditeventtype)

# AuditEventType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of change operation types in change history, used in audit summary objects, change detail objects, and query filters.

## Declaration

```
string AuditEventType
```

## Possible Values

- `CREATE`: The system creates a new entity. `oldValues` is empty on all associated field change objects.
- `UPDATE`: The system modifies one or more fields on an existing entity. Both `oldValues` and `newValues` are populated.
- `DELETE`: The system soft-deletes the entity. Because it implements deletion as a record update, `newValues` is populated. Expect fields such as the deleted flag, status, and transaction ID to appear with their updated values. `oldValues` reflects the pre-deletion state of each changed field.

<a id="Discussion"></a>

## Discussion

Use `AuditEventType` values in the `eventType` filter of an [AuditQuery](auditquery.md) request to narrow results to specific change operations:

```json
{
  "field": "eventType",
  "operator": "IN",
  "value": [
    "CREATE",
    "DELETE"
  ]
}
```

## See Also

- [AuditOperator](auditoperator.md): Enumeration of comparison operators supported in audit filter conditions for change history queries.
- [AuditSortOrder](auditsortorder.md): Sort direction for audit sorting entries in a change history query.
- [AuditUserType](auditusertype.md): Enumeration of actor categories in change history records.

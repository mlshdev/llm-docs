> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/org/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/org/systemstatus-data.typealias)

# Org.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status of the organization.

## Declaration

```
string Org.SystemStatus
```

## Possible Values

- `ACTIVE`: The organization is active and operational.
- `INACTIVE`: The organization is inactive. Check `systemStatusReasons` for the specific cause.

<a id="Discussion"></a>

## Discussion

This status reflects the organization as a whole; individual ad accounts under it carry their own separate [AdAccount.SystemStatus](../adaccount/systemstatus-data.typealias.md).

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "ACTIVE"
}
```

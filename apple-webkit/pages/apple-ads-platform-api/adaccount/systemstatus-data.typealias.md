> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adaccount/systemstatus-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/adaccount/systemstatus-data.typealias)

# AdAccount.SystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The system status for an ad account.

## Declaration

```
string AdAccount.SystemStatus
```

## Possible Values

- `ACTIVE`: The ad account is active and capable of running campaigns.
- `INACTIVE`: The ad account is inactive. Check [AdAccount.SystemStatusReasons](systemstatusreasons-data.typealias.md) for the specific cause.

<a id="Discussion"></a>

## Discussion

This status reflects the ad account specifically, separate from the [Org.SystemStatus](../org/systemstatus-data.typealias.md) of its parent organization.

<a id="Example"></a>

### Example

```json
{
  "systemStatus": "ACTIVE"
}
```

See [AdAccountSystemStatus](../adaccountsystemstatus.md) for additional context.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/orgsystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/orgsystemstatus)

# OrgSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status of an organization.

## Declaration

```
string OrgSystemStatus
```

## Possible Values

- `ACTIVE`: The organization is active and operational.
- `INACTIVE`: The organization is inactive. Check `systemStatusReasons` for the specific cause.

## See Also

- [ProductFeatures](productfeatures.md): Product features are the advertising capabilities for an ad account.
- [OrgSystemStatusReason](orgsystemstatusreason.md): Reasons that can cause an organization’s system status to not be active.
- [AdAccountSystemStatus](adaccountsystemstatus.md): System-derived operational status of an ad account.
- [AdAccountSystemStatusReason](adaccountsystemstatusreason.md): Enumeration of reasons that can cause an ad account’s system status to be `INACTIVE`.
- [AdvertiserResourceListResponse](advertiserresourcelistresponse.md): Response envelope for advertiser resource list requests.
- [AdvertiserResourceType](advertiserresourcetype.md): The type of advertiser resource you delegate to an ad account.

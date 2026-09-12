> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adaccountsystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/adaccountsystemstatus)

# AdAccountSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-derived operational status of an ad account.

## Declaration

```
string AdAccountSystemStatus
```

## Possible Values

- `ACTIVE`: The ad account is active and capable of running campaigns.
- `INACTIVE`: The ad account is inactive. Check `systemStatusReasons` for the specific cause.

## See Also

- [ProductFeatures](productfeatures.md): Product features are the advertising capabilities for an ad account.
- [OrgSystemStatus](orgsystemstatus.md): System-derived operational status of an organization.
- [OrgSystemStatusReason](orgsystemstatusreason.md): Reasons that can cause an organization’s system status to not be active.
- [AdAccountSystemStatusReason](adaccountsystemstatusreason.md): Enumeration of reasons that can cause an ad account’s system status to be `INACTIVE`.
- [AdvertiserResourceListResponse](advertiserresourcelistresponse.md): Response envelope for advertiser resource list requests.
- [AdvertiserResourceType](advertiserresourcetype.md): The type of advertiser resource you delegate to an ad account.

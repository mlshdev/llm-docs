> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/advertiserresourcetype](https://developer.apple.com/documentation/apple-ads-platform-api/advertiserresourcetype)

# AdvertiserResourceType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The type of advertiser resource you delegate to an ad account.

## Declaration

```
string AdvertiserResourceType
```

## Possible Values

- `CONTENT_PROVIDER`: A content provider resource associated with the ad account. Its `resourceId` is the Content Provider ID (CPID).
- `BUSINESS_BRAND`: A Brand resource delegated from an organization. Its `resourceId` is the Brand ID.

## See Also

- [ProductFeatures](productfeatures.md): Product features are the advertising capabilities for an ad account.
- [OrgSystemStatus](orgsystemstatus.md): System-derived operational status of an organization.
- [OrgSystemStatusReason](orgsystemstatusreason.md): Reasons that can cause an organization’s system status to not be active.
- [AdAccountSystemStatus](adaccountsystemstatus.md): System-derived operational status of an ad account.
- [AdAccountSystemStatusReason](adaccountsystemstatusreason.md): Enumeration of reasons that can cause an ad account’s system status to be `INACTIVE`.
- [AdvertiserResourceListResponse](advertiserresourcelistresponse.md): Response envelope for advertiser resource list requests.

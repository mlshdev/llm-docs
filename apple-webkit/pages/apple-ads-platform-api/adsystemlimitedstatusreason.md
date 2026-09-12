> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adsystemlimitedstatusreason](https://developer.apple.com/documentation/apple-ads-platform-api/adsystemlimitedstatusreason)

# AdSystemLimitedStatusReason

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

A reason code indicating that an ad is running but at reduced delivery capacity due to a policy condition.

## Declaration

```
string AdSystemLimitedStatusReason
```

## Possible Values

- `CREATIVE_POLICY_ISSUES`: The ad creative associated with this ad has policy violations that limit but do not fully stop delivery.

## See Also

- [AdStatus](adstatus.md): Enumeration of advertiser-configurable serving states for an ad.
- [AdSystemStatus](adsystemstatus.md): Enumeration of system-evaluated delivery states for an ad.
- [AdDisplayStatus](addisplaystatus.md): Rolled-up delivery state for an ad, combining advertiser settings and system conditions into a single user-facing label.
- [AdSystemStatusReason](adsystemstatusreason.md): A reason code explaining why an ad is not currently running.

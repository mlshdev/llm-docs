> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adsystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/adsystemstatus)

# AdSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of system-evaluated delivery states for an ad.

## Declaration

```
string AdSystemStatus
```

## Possible Values

- `RUNNING`: The ad is active and eligible to serve.
- `NOT_RUNNING`: The system has identified a condition preventing the ad from delivering.

## See Also

- [AdStatus](adstatus.md): Enumeration of advertiser-configurable serving states for an ad.
- [AdDisplayStatus](addisplaystatus.md): Rolled-up delivery state for an ad, combining advertiser settings and system conditions into a single user-facing label.
- [AdSystemStatusReason](adsystemstatusreason.md): A reason code explaining why an ad is not currently running.
- [AdSystemLimitedStatusReason](adsystemlimitedstatusreason.md): A reason code indicating that an ad is running but at reduced delivery capacity due to a policy condition.

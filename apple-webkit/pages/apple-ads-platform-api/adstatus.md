> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adstatus](https://developer.apple.com/documentation/apple-ads-platform-api/adstatus)

# AdStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Enumeration of advertiser-configurable serving states for an ad.

## Declaration

```
string AdStatus
```

## Possible Values

- `ENABLED`: The advertiser has set the ad to run, so it can participate in auctions.
- `PAUSED`: The advertiser has paused the ad, so it does not participate in auctions.

## See Also

- [AdSystemStatus](adsystemstatus.md): Enumeration of system-evaluated delivery states for an ad.
- [AdDisplayStatus](addisplaystatus.md): Rolled-up delivery state for an ad, combining advertiser settings and system conditions into a single user-facing label.
- [AdSystemStatusReason](adsystemstatusreason.md): A reason code explaining why an ad is not currently running.
- [AdSystemLimitedStatusReason](adsystemlimitedstatusreason.md): A reason code indicating that an ad is running but at reduced delivery capacity due to a policy condition.

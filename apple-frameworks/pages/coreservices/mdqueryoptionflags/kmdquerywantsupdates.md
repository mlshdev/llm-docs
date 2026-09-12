> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mdqueryoptionflags/kmdquerywantsupdates](https://developer.apple.com/documentation/coreservices/mdqueryoptionflags/kmdquerywantsupdates)

# kMDQueryWantsUpdates

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
kMDQueryWantsUpdates = 4
```

<a id="discussion"></a>

## Discussion

Specifies that a query should provide live-updates to the result list after the initial gathering phase. Updates occur during the live-update phase if a change in a file occurs such that it no longer matches the query or if it begins to match the query. Files which begin to match the query are added to the result list, and files which no longer match the query expression are removed from the result list. Currently, this option is ignored if the `kMDQuerySynchronous` parameter is specified. This is subject to change, and you should always pass the value appropriate to the required behavior.

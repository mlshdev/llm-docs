> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/init(applications:categories:webdomains:threshold:includespastactivity:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/init(applications:categories:webdomains:threshold:includespastactivity:))

# init(applications:categories:webDomains:threshold:includesPastActivity:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Creates a new event.

## Declaration

```swift
init(applications: Set<ApplicationToken> = [], categories: Set<ActivityCategoryToken> = [], webDomains: Set<WebDomainToken> = [], threshold: DateComponents, includesPastActivity: Bool)
```

## Parameters

- `applications`: An optional list of applications to include in the event. A small subset of popular App Store apps have known associated web domains that get included implicitly. For example, an event that includes an app implicitly includes usage of the app’s web domain.
- `categories`: An optional list of categories to include in the event.
- `webDomains`: An optional list of web domains to include in the event. Some web domains have associated apps included implicitly.
- `threshold`: The amount of time that results in a callback to a [DeviceActivityMonitor](../deviceactivitymonitor.md).
- `includesPastActivity`: Whether the system takes into account the person’s device activity before your app starts monitoring the event. For example, if your app calls [startMonitoring(\_:during:events:)](../deviceactivitycenter/startmonitoring%28__during_events_%29.md) at 1:30pm with a schedule of 1:00pm to 2:00pm, then this boolean determines whether any activity between 1:00 PM and 1:30 PM will contribute to its threshold.

<a id="discussion"></a>

## Discussion

An application’s extension receives a callback once the combination of specified [applications](applications.md), [categories](categories.md), and [webDomains](webdomains.md) have been in use longer than the event’s threshold within the activity’s scheduled interval. If your app didn’t specify any `applications`, `categories`, or `webDomains`, the event includes all `applications`, `categories`, and `web domains`.

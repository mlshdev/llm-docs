> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityevent/init(applications:categories:webdomains:threshold:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityevent/init(applications:categories:webdomains:threshold:))

# init(applications:categories:webDomains:threshold:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a new event.

## Declaration

```swift
init(applications: Set<ApplicationToken> = [], categories: Set<ActivityCategoryToken> = [], webDomains: Set<WebDomainToken> = [], threshold: DateComponents)
```

## Parameters

- `applications`: An optional list of applications to include in the event. A small subset of popular App Store apps have known associated web domains that get included implicitly. For example, an event that includes an app implicitly includes usage of the app’s web domain.
- `categories`: An optional list of categories to include in the event.
- `webDomains`: An optional list of web domains to include in the event. Some web domains have associated apps included implicitly.
- `threshold`: The amount of time that results in a callback to a [DeviceActivityMonitor](../deviceactivitymonitor.md).

<a id="discussion"></a>

## Discussion

An application’s extension receives a callback once the combination of specified [applications](applications.md), [categories](categories.md), and [webDomains](webdomains.md) have been in use longer than the event’s threshold within the activity’s scheduled interval. If your app didn’t specify any `applications`, `categories`, or `webDomains`, the event includes all `applications`, `categories`, and `web domains`.

> **Important**

> When your app calls [startMonitoring(\_:during:events:)](../deviceactivitycenter/startmonitoring%28__during_events_%29.md) and the event’s schedule is active, the system will only consider the person’s device activity when it starts monitoring the event.

## See Also

### Creating an Event

- [DeviceActivityEvent.Name](name.md): The unique name of an event.
- [includesAllActivity](includesallactivity.md): A Boolean value that indicates whether the event includes all applications, categories, and web domains.

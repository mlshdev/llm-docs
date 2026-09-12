> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/init(segment:users:devices:applications:categories:webdomains:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/init(segment:users:devices:applications:categories:webdomains:))

# init(segment:users:devices:applications:categories:webDomains:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a new filter for the specified users and devices.

## Declaration

```swift
init(segment segmentInterval: DeviceActivityFilter.SegmentInterval = .hourly(), users: DeviceActivityFilter.Users, devices: DeviceActivityFilter.Devices, applications: Set<ApplicationToken> = [], categories: Set<ActivityCategoryToken> = [], webDomains: Set<WebDomainToken> = [])
```

<a id="discussion"></a>

## Discussion

If you specify `applications`, `categories` or `webDomains`, then the system provides activity data for the requested application, categories, and web domains only. Conversely, if you do not specify any `applications`, `categories`, or `webDomains`, then the system provides data for all types of device activity.

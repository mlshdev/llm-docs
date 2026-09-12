> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/init(segment:devices:applications:categories:webdomains:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/init(segment:devices:applications:categories:webdomains:))

# init(segment:devices:applications:categories:webDomains:)

**Framework:** Device Activity  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a new filter for the current user.

## Declaration

```swift
init(segment segmentInterval: DeviceActivityFilter.SegmentInterval = .hourly(), devices: DeviceActivityFilter.Devices? = nil, applications: Set<ApplicationToken> = [], categories: Set<ActivityCategoryToken> = [], webDomains: Set<WebDomainToken> = [])
```

<a id="discussion"></a>

## Discussion

If you specify `applications`, `categories` or `webDomains`, then the system provides activity data for the requested application, categories, and web domains only. Conversely, if you do not specify any `applications`, `categories`, or `webDomains`, then the system provides data for all types of device activity. If you do not specify any `devices`, then the filter only includes data for the current device.

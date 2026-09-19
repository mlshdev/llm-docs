> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/webdomainactivity

# DeviceActivityData.WebDomainActivity

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Activity data for a web domain.

## Declaration

```swift
struct WebDomainActivity
```

## Topics

### Identifying the web domain

- [webDomain](webdomainactivity/webdomain.md): Access the web domain that accumulated the activity.

### Measuring activity

- [totalActivityDuration](webdomainactivity/totalactivityduration.md): Access the total activity time for this web domain.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Organizing activity by type

- [DeviceActivityData.ApplicationActivity](applicationactivity.md): Activity data for an application.
- [DeviceActivityData.CategoryActivity](categoryactivity.md): Categorized representation of application and web domain activity.

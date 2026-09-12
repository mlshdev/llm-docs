> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivitydata/categoryactivity](https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/categoryactivity)

# DeviceActivityData.CategoryActivity

**Framework:** Device Activity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Categorized representation of application and web domain activity.

## Declaration

```swift
struct CategoryActivity
```

## Topics

### Identifying the category

- [category](categoryactivity/category.md): Access the category of the activity.

### Measuring activity

- [totalActivityDuration](categoryactivity/totalactivityduration.md): Access the total activity time for this category.

### Accessing contributing activities

- [applications](categoryactivity/applications.md): Access the application activity that contributed to this category’s total activity time.
- [webDomains](categoryactivity/webdomains.md): Access the web domain activity that contributed to this category’s total activity time.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Organizing activity by type

- [DeviceActivityData.ApplicationActivity](applicationactivity.md): Activity data for an application.
- [DeviceActivityData.WebDomainActivity](webdomainactivity.md): Activity data for a web domain.

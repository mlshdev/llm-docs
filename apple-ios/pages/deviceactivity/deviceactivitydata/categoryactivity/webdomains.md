> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/categoryactivity/webdomains

# webDomains

**Framework:** DeviceActivity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the web domain activity that contributed to this category’s total activity time.

## Declaration

```swift
var webDomains: DeviceActivityResults<DeviceActivityData.WebDomainActivity> { get }
```

## See Also

### Accessing contributing activities

- [applications](applications.md): Access the application activity that contributed to this category’s total activity time.

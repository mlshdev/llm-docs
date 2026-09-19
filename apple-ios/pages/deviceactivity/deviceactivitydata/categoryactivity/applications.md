> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/categoryactivity/applications

# applications

**Framework:** DeviceActivity  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Access the application activity that contributed to this category’s total activity time.

## Declaration

```swift
var applications: DeviceActivityResults<DeviceActivityData.ApplicationActivity> { get }
```

## See Also

### Accessing contributing activities

- [webDomains](webdomains.md): Access the web domain activity that contributed to this category’s total activity time.

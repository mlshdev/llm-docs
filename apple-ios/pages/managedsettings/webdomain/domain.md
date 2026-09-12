> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webdomain/domain](https://developer.apple.com/documentation/managedsettings/webdomain/domain)

# domain

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A string that identifies a specific web domain.

## Declaration

```swift
let domain: String?
```

<a id="discussion"></a>

## Discussion

In an extension that provides shield configurations, this property provides the web domain. When you access this property outside that extension, the value is `nil`. See [ShieldConfigurationDataSource](../../managedsettingsui/shieldconfigurationdatasource.md) for more information.

## See Also

### Identifying a web domain

- [token](token.md): An opaque representation of a specific web domain.

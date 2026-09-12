> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/application/bundleidentifier](https://developer.apple.com/documentation/managedsettings/application/bundleidentifier)

# bundleIdentifier

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The unique string that identifies this app.

## Declaration

```swift
let bundleIdentifier: String?
```

<a id="discussion"></a>

## Discussion

In an extension that provides shield configurations, this property provides the app’s bundle identifier. When you access this property outside that extension, the value is `nil`. See `ShieldConfigurationDataSource` in the `ManagedSettingsUI` framework for more information.

## See Also

### Accessing application information

- [token](token.md): An opaque representation of a specific web domain.
- [localizedDisplayName](localizeddisplayname.md): A localized display name for the application.

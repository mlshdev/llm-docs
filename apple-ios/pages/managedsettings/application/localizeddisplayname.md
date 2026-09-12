> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/application/localizeddisplayname](https://developer.apple.com/documentation/managedsettings/application/localizeddisplayname)

# localizedDisplayName

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A localized display name for the application.

## Declaration

```swift
let localizedDisplayName: String?
```

<a id="discussion"></a>

## Discussion

In an extension that provides shield configurations, this property provides the app’s name. When you access this property outside that extension, the value is `nil`. See `ShieldConfigurationDataSource` in the Managed Settings UI framework for more information.

## See Also

### Accessing application information

- [bundleIdentifier](bundleidentifier.md): The unique string that identifies this app.
- [token](token.md): An opaque representation of a specific web domain.

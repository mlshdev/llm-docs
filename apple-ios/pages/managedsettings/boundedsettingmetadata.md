> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/boundedsettingmetadata](https://developer.apple.com/documentation/managedsettings/boundedsettingmetadata)

# BoundedSettingMetadata

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Additional information about a bounded setting.

## Declaration

```swift
struct BoundedSettingMetadata<Value> where Value : Comparable
```

## Topics

### Getting metadata

- [bounds](boundedsettingmetadata/bounds.md): The range of values that a setting can accomodate.
- [defaultValue](boundedsettingmetadata/defaultvalue.md): The implicit value for a setting if your app doesn’t set a value.

## See Also

### Accessing metadata

- [SettingMetadata](settingmetadata.md): Additional information about a configurable setting.

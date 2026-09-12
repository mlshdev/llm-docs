> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/safarisettings/cookiepolicy-swift.type.property](https://developer.apple.com/documentation/managedsettings/safarisettings/cookiepolicy-swift.type.property)

# cookiePolicy

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting that configures Safari’s policy for cookies.

## Declaration

```swift
static let cookiePolicy: SettingMetadata<SafariSettings.CookiePolicy>
```

<a id="discussion"></a>

## Discussion

Use `cookiePolicy` to access the metadata for [cookiePolicy](cookiepolicy-swift.property.md). The default value is [SafariSettings.CookiePolicy.always](cookiepolicy-swift.enum/always.md).

## See Also

### Specifying a cookie policy

- [cookiePolicy](cookiepolicy-swift.property.md): Defines the conditions under which Safari accepts cookies.
- [SafariSettings.CookiePolicy](cookiepolicy-swift.enum.md): The conditions under which Safari accepts cookies.

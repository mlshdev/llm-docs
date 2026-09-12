> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/safarisettings/cookiepolicy-swift.property](https://developer.apple.com/documentation/managedsettings/safarisettings/cookiepolicy-swift.property)

# cookiePolicy

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Defines the conditions under which Safari accepts cookies.

## Declaration

```swift
var cookiePolicy: SafariSettings.CookiePolicy? { get set }
```

<a id="discussion"></a>

## Discussion

The value is `nil` if this setting has not been applied.

## See Also

### Specifying a cookie policy

- [cookiePolicy](cookiepolicy-swift.type.property.md): The metadata for the setting that configures Safari’s policy for cookies.
- [SafariSettings.CookiePolicy](cookiepolicy-swift.enum.md): The conditions under which Safari accepts cookies.

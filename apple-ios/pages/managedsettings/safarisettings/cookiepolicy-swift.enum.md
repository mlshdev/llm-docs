> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/safarisettings/cookiepolicy-swift.enum](https://developer.apple.com/documentation/managedsettings/safarisettings/cookiepolicy-swift.enum)

# SafariSettings.CookiePolicy

**Framework:** Managed Settings  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The conditions under which Safari accepts cookies.

## Declaration

```swift
enum CookiePolicy
```

## Topics

### Accepting cookies

- [SafariSettings.CookiePolicy.always](cookiepolicy-swift.enum/always.md): A policy that indicates the device accepts cookies from all websites.
- [SafariSettings.CookiePolicy.currentWebsite](cookiepolicy-swift.enum/currentwebsite.md): A policy that indicates the device only accepts cookies from the current website.
- [SafariSettings.CookiePolicy.never](cookiepolicy-swift.enum/never.md): A policy that indicates the device doesn’t accept cookies from any website.
- [SafariSettings.CookiePolicy.visitedWebsites](cookiepolicy-swift.enum/visitedwebsites.md): A policy that indicates the device only accepts cookies from websites in the user’s browsing history.

### Operators

- [\<(\_:\_:)](cookiepolicy-swift.enum/_%28____%29.md): Returns a Boolean value that indicates whether the value of the first argument is less than that of the second argument.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Specifying a cookie policy

- [cookiePolicy](cookiepolicy-swift.property.md): Defines the conditions under which Safari accepts cookies.
- [cookiePolicy](cookiepolicy-swift.type.property.md): The metadata for the setting that configures Safari’s policy for cookies.

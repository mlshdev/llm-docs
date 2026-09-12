> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/safarisettingsprivacyobject](https://developer.apple.com/documentation/devicemanagement/safarisettingsprivacyobject)

# SafariSettingsPrivacyObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The dictionary of website privacy settings.

## Declaration

```
object SafariSettingsPrivacyObject
```

## Properties

- `PermissionDefaults` — `SafariSettingsPrivacy_PermissionDefaultsObject`: The dictionary of website permission defaults. Each key in the dictionary represents a single website, or a website and its sub-domains. The dictionary values represent the permission defaults that Safari applies for each website that matches the key.

  Safari supports the following patterns for the website key:

  - A specific domain such as “example.com” or “www.example.com”. The permission defaults apply to that website only.
  - A wildcard domain that uses a single “\*” character as a prefix for the domain, such as “\*example.com”. The permission defaults apply to both the exact domain “example.com”, and any sub-domains such as “www.example.com”. It won’t match other domains with a similar string suffix such as “myexample.com”.

  When multiple patterns match a website, Safari uses the most precise pattern. For example, for the website “www.example.com”, if rules “www.example.com” and “\*example.com” match, Safari uses the former.

## Topics

### Objects

- [SafariSettingsPrivacy_PermissionDefaultsObject](safarisettingsprivacy_permissiondefaultsobject.md): The dictionary of website permission defaults. Each key in the dictionary represents a single website, or a website and its sub-domains. The dictionary values represent the permission defaults that Safari applies for each website that matches the key.

## See Also

### Objects

- [SafariSettingsNewTabStartPageObject](safarisettingsnewtabstartpageobject.md): Sets the start page for new tabs in Safari.

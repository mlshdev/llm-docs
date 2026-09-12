> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/safarisettings](https://developer.apple.com/documentation/managedsettings/safarisettings)

# SafariSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constraints on Safari’s AutoFill and cookie behaviors.

## Declaration

```swift
struct SafariSettings
```

<a id="overview"></a>

## Overview

Use `SafariSettings` to manage Safari settings for cookies and AutoFill. You can prevent AutoFill and specify the websites from which Safari accepts cookies.

## Topics

### Specifying a cookie policy

- [cookiePolicy](safarisettings/cookiepolicy-swift.property.md): Defines the conditions under which Safari accepts cookies.
- [cookiePolicy](safarisettings/cookiepolicy-swift.type.property.md): The metadata for the setting that configures Safari’s policy for cookies.
- [SafariSettings.CookiePolicy](safarisettings/cookiepolicy-swift.enum.md): The conditions under which Safari accepts cookies.

### Denying autofill

- [denyAutoFill](safarisettings/denyautofill-swift.property.md): A Boolean value that indicates whether Safari’s AutoFill feature is active.
- [denyAutoFill](safarisettings/denyautofill-swift.type.property.md): The metadata associated with the setting that deactivates Safari’s AutoFill feature.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Restricting web content

- [safari](managedsettingsstore/safari.md): Settings that affect Safari’s search results and cookie policies.
- [webContent](managedsettingsstore/webcontent.md): Settings that affect web content.
- [WebContentSettings](webcontentsettings.md): An object that configures which websites a user can access.

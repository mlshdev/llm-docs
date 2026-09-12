> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/webcontentsettings](https://developer.apple.com/documentation/managedsettings/webcontentsettings)

# WebContentSettings

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An object that configures which websites a user can access.

## Declaration

```swift
struct WebContentSettings
```

## Topics

### Filtering web domains

- [blockedByFilter](webcontentsettings/blockedbyfilter-swift.property.md): The current policy for filtering websites.
- [blockedByFilter](webcontentsettings/blockedbyfilter-swift.type.property.md): A description of the setting that controls which websites a user can access.
- [WebContentSettings.FilterPolicy](webcontentsettings/filterpolicy.md): The policies available for filtering web content based on specific web domains.

## Relationships

### Conforms To

- [ManagedSettingsGroup](managedsettingsgroup.md)

## See Also

### Restricting web content

- [safari](managedsettingsstore/safari.md): Settings that affect Safari’s search results and cookie policies.
- [SafariSettings](safarisettings.md): Constraints on Safari’s AutoFill and cookie behaviors.
- [webContent](managedsettingsstore/webcontent.md): Settings that affect web content.

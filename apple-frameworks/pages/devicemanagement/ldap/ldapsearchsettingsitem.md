> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/ldap/ldapsearchsettingsitem

# LDAP.LDAPSearchSettingsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.1+

An array of search settings dictionaries.

## Declaration

```
object LDAP.LDAPSearchSettingsItem
```

## Properties

- `LDAPSearchSettingDescription` — `string`: The description of this search setting.
- `LDAPSearchSettingScope` — `string`: The type of recursion to use in the search:

  - `LDAPSearchSettingScopeBase`: The search uses only the immediate node that the search base points to.
  - `LDAPSearchSettingScopeOneLevel`: The search uses the node plus its immediate children.
  - `LDAPSearchSettingScopeSubtree`: The search uses the node plus all children, regardless of depth.  
  **Default:** `LDAPSearchSettingScopeSubtree`  
  **Allowed values:** `LDAPSearchSettingScopeBase`, `LDAPSearchSettingScopeOneLevel`, `LDAPSearchSettingScopeSubtree`
- `LDAPSearchSettingSearchBase` — `string` (required): The path to the node where a search should start.

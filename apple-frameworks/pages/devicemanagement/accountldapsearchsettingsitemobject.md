> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accountldapsearchsettingsitemobject](https://developer.apple.com/documentation/devicemanagement/accountldapsearchsettingsitemobject)

# AccountLDAPSearchSettingsItemObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.1+

The array of nodes to start LDAP searches from. There must be at least one node for this account to be useful. macOS only searches one node and ignores other items in the array.

## Declaration

```
object AccountLDAPSearchSettingsItemObject
```

## Properties

- `Scope` — `string`: The type of recursion to use in the search:

  - `Base`: The search uses only the `SearchBase` node.
  - `OneLevel`: The search uses the `SearchBase` node and its immediate children.
  - `Subtree`: The search uses the `SearchBase` node and all its children, regardless of depth.  
  **Default:** `Subtree`  
  **Allowed values:** `Base`, `OneLevel`, `Subtree`
- `SearchBase` — `string` (required): The path to the node where a search starts. For example, `ou=people,o=example corp`.
- `VisibleDescription` — `string`: The description of this search setting in the Contacts and Settings apps. If not present, the apps display no name.

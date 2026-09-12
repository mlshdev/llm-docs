> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkusagerules/applicationrulesitem](https://developer.apple.com/documentation/devicemanagement/networkusagerules/applicationrulesitem)

# NetworkUsageRules.ApplicationRulesItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+

The application rules dictionary.

## Declaration

```
object NetworkUsageRules.ApplicationRulesItem
```

## Properties

- `AllowCellularData` — `boolean`: If `false`, disables cellular data for all matching managed apps.
  **Default:** `true`
- `AllowRoamingCellularData` — `boolean`: If `false`, disables cellular data while roaming for all matching managed apps.
  **Default:** `true`
- `AppIdentifierMatches` — `[string]`: A list of managed app identifiers, as strings, that must follow the associated rules. If this key is missing, the rules apply to all managed apps on the device.

  Each string in the `AppIdentifierMatches` array may either be an exact app identifier match (for example, `com.mycompany.myapp`) or it may specify a prefix match for the bundle ID by using the \* wildcard character. If used, this character must appear after a period (.) and may only appear once, at the end of the string; for example, `com.mycompany.\*`.

## See Also

### Objects

- [NetworkUsageRules.SIMRulesItem](simrulesitem.md): The policy for individual SIM cards.

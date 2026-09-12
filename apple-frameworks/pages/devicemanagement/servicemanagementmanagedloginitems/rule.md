> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/servicemanagementmanagedloginitems/rule](https://developer.apple.com/documentation/devicemanagement/servicemanagementmanagedloginitems/rule)

# ServiceManagementManagedLoginItems.Rule

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 13.0+

A dictionary that configures a service management rule.

## Declaration

```
object ServiceManagementManagedLoginItems.Rule
```

## Properties

- `Comment` — `string`: An optional description of the rule.
- `RuleType` — `string` (required): The type of comparison to make.
  **Allowed values:** `BundleIdentifier`, `BundleIdentifierPrefix`, `Label`, `LabelPrefix`, `TeamIdentifier`
- `RuleValue` — `string` (required): The value to compare with each login item’s value, to determine if this rule is a match.
- `TeamIdentifier` — `string`: An additional constraint to limit the scope of the rule that the system tests after matching the `RuleType` and `RuleValue`.

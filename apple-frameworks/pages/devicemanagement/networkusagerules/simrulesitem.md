> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkusagerules/simrulesitem](https://developer.apple.com/documentation/devicemanagement/networkusagerules/simrulesitem)

# NetworkUsageRules.SIMRulesItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

The policy for individual SIM cards.

## Declaration

```
object NetworkUsageRules.SIMRulesItem
```

## Properties

- `ICCIDs` — `[string]` (required): One or more ICCIDs of SIM cards for which the `WiFiAssistPolicy` applies. All ICCIDs in all installed Network Usage Rules payloads must be unique. An example ICCID is `89310410106543789301`.
- `WiFiAssistPolicy` — `integer` (required): The Wi-Fi Assist policy to apply to the SIM cards specified in the ICCIDs. Allowed values:

  - `2`: Use the default system policy for the specified SIM card(s).
  - `3`: Make Wi-Fi Assist switch more aggressively from a poor Wi-Fi connection to cellular data for the specified SIM card(s). This setting may increase cellular data use and may impact battery life.

  For more information, see [About Wi-Fi Assist](https://support.apple.com/en-us/HT205296).  
  **Allowed values:** `2`, `3`

## See Also

### Objects

- [NetworkUsageRules.ApplicationRulesItem](applicationrulesitem.md): The application rules dictionary.

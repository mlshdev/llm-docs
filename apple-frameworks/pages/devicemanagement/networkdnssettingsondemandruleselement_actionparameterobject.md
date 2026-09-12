> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkdnssettingsondemandruleselement_actionparameterobject](https://developer.apple.com/documentation/devicemanagement/networkdnssettingsondemandruleselement_actionparameterobject)

# NetworkDNSSettingsOnDemandRulesElement_ActionParameterObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A dictionary that provides per-connection rules.

## Declaration

```
object NetworkDNSSettingsOnDemandRulesElement_ActionParameterObject
```

## Properties

- `DomainAction` — `string` (required): The DNS settings behavior for the specified domains. Allowed values:

  - ‘NeverConnect’: Don’t use the DNS Settings for the specified domains.
  - ‘ConnectIfNeeded’: Allow using the DNS Settings for the specified domains.  
  **Allowed values:** `NeverConnect`, `ConnectIfNeeded`
- `Domains` — `[string]` (required): The domains for which this evaluation applies.

<a id="Discussion"></a>

## Discussion

The keys allowed in each dictionary are described below. Note: This array is only for dictionaries in which `EvaluateConnection` is the `Action` value.

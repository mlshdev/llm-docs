> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dnssettings/ondemandruleselement/actionparameter](https://developer.apple.com/documentation/devicemanagement/dnssettings/ondemandruleselement/actionparameter)

# DNSSettings.OnDemandRulesElement.ActionParameter

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A dictionary that provides per-connection rules.

> Use the declarative management `com.apple.configuration.network.dns-settings` configuration.

## Declaration

```
object DNSSettings.OnDemandRulesElement.ActionParameter
```

## Properties

- `DomainAction` — `string` (required): The DNS settings behavior for the specified domains. Allowed values:

  - ‘NeverConnect’: Don’t use the DNS Settings for the specified domains.
  - ‘ConnectIfNeeded’: Allow using the DNS Settings for the specified domains.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+  
  **Allowed values:** `NeverConnect`, `ConnectIfNeeded`
- `Domains` — `[string]` (required): The domains for which this evaluation applies.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+

<a id="Discussion"></a>

## Discussion

The keys allowed in each dictionary are described below. Note: This array is only for dictionaries in which `EvaluateConnection` is the `Action` value.

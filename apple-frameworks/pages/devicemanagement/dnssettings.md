> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dnssettings](https://developer.apple.com/documentation/devicemanagement/dnssettings)

# DNSSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The payload that configures encrypted DNS settings.

> Use the declarative management `com.apple.configuration.network.dns-settings` configuration.

## Declaration

```
object DNSSettings
```

## Properties

- `DNSSettings` — `DNSSettings.DNSSettings` (required): A dictionary that defines a configuration for an encrypted DNS server.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `OnDemandRules` — `[DNSSettings.OnDemandRulesElement]`: An array of rules that define the DNS settings. If not set, the system always applies the DNS settings. These rules are identical to the `OnDemandRules` array in VPN payloads.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `ProhibitDisablement` — `boolean`: If `true`, the system prohibits users from disabling DNS settings. This key is only available on supervised devices.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+  
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.dnsSettings.managed` as the payload type.

When installed from an MDM, the setting only applies to managed Wi-Fi networks.

When installed manually, this setting also applies to cellular networks.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, visionOS |
| User channel | N/A |
| Allow manual install | iOS, macOS, visionOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | iOS, macOS, Shared iPad, visionOS |

## Topics

### Objects

- [DNSSettings.DNSSettings](dnssettings/dnssettings-data.dictionary.md): Deprecated. A dictionary that defines a configuration for an encrypted DNS server.
- [DNSSettings.OnDemandRulesElement](dnssettings/ondemandruleselement.md): Deprecated. A list of domain strings that determine which DNS queries use the DNS server.

## See Also

### Networking

- [Cellular](cellular.md): The payload that configures cellular settings.
- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [Firewall](firewall.md): The payload that configures the firewall.
- [NetworkUsageRules](networkusagerules.md): The payload that configures network-usage rules.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.
- [WiFiManagedSettings](wifimanagedsettings.md): The payload that configures managed Wi-Fi settings.

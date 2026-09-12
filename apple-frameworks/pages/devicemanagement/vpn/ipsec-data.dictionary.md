> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/vpn/ipsec-data.dictionary](https://developer.apple.com/documentation/devicemanagement/vpn/ipsec-data.dictionary)

# VPN.IPSec

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 1.0+

The dictionary to use for an IPSec VPN type.

## Declaration

```
object VPN.IPSec
```

## Properties

- `AuthenticationMethod` — `string`: The authentication method for L2TP and Cisco IPSec.
  **Default:** `SharedSecret`  
  **Allowed values:** `SharedSecret`, `Certificate`
- `DisconnectOnIdle` — `integer`: If `1`, disconnect after an on-demand connection idles.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `DisconnectOnIdleTimer` — `integer`: The length of time to wait before disconnecting an on-demand connection.
- `LocalIdentifier` — `string`: The name of the group. For hybrid authentication, the string needs to end with “hybrid”.

  Present only for Cisco IPSec if `AuthenticationMethod` is `SharedSecret`.
- `LocalIdentifierType` — `string`: Present only if `AuthenticationMethod` is `SharedSecret`. The value is `KeyID`. The system uses this value for L2TP and Cisco IPSec VPNs.
  **Allowed values:** `KeyID`
- `OnDemandEnabled` — `integer`: If `1`, enables bringing the VPN connection up on demand.
  **Default:** `0`  
  **Allowed values:** `0`, `1`
- `OnDemandMatchDomainsAlways` — `[string]`: Deprecated. A list of domain names. In iOS 7 and later, if this key is present, the system treats associated domain names as though they’re associated with the `OnDemandMatchDomainsOnRetry` key. This behavior can be overridden by `OnDemandRules`.

  Deprecated: iOS 7+ | iPadOS 7+
- `OnDemandMatchDomainsNever` — `[string]`: Deprecated. A list of domain names. In iOS 7 and later, this key is deprecated (but still supported) in favor of `EvaluateConnection` actions in the `OnDemandRules` dictionaries.

  Deprecated: iOS 7+ | iPadOS 7+
- `OnDemandMatchDomainsOnRetry` — `[string]`: Deprecated. A list of domain names. In iOS 7 and later, this field is deprecated (but still supported) in favor of `EvaluateConnection` actions in the `OnDemandRules` dictionaries.

  Deprecated: iOS 7+ | iPadOS 7+
- `OnDemandRules` — `[VPN.VPN.OnDemandRulesElement]`: The on-demand rules dictionary.
- `PayloadCertificateUUID` — `string`: The UUID of the certificate payload within the same profile to use for the account credentials.

  Only use this with Cisco IPSec VPNs and if the `AuthenticationMethod` key is to `Certificate`.
- `PromptForVPNPIN` — `boolean`: If `true`, prompts for a PIN when connecting to Cisco IPSec VPNs.
  **Default:** `false`
- `RemoteAddress` — `string`: The IP address or host name of the VPN server.
- `SharedSecret` — `data`: The shared secret for this VPN account.

  Only use this with L2TP and Cisco IPSec VPNs and if the `AuthenticationMethod` key is to `SharedSecret`.
- `XAuthEnabled` — `integer`: If `1`, enables Xauth for Cisco IPSec VPNs.
  **Allowed values:** `0`, `1`
- `XAuthName` — `string`: The user name for the VPN account for Cisco IPSec.
- `XAuthPassword` — `string`: The VPN account password for Cisco IPSec.
- `XAuthPasswordEncryption` — `string`: A string that either has the value “Prompt” or isn’t present.
  **Allowed values:** `Prompt`

## See Also

### Objects

- [VPN.AlwaysOn](alwayson-data.dictionary.md): The dictionary that contains IPSec settings.
- [VPN.DNS](dns-data.dictionary.md): The dictionary to configure DNS settings for the VPN.
- [VPN.IKEv2](ikev2-data.dictionary.md): The dictionary to use for an IKEv2 VPN type.
- [VPN.IPv4](ipv4-data.dictionary.md): The dictionary that contains IPV4 settings.
- [VPN.PPP](ppp-data.dictionary.md): The dictionary that contains PPP settings.
- [VPN.Proxies](proxies-data.dictionary.md): The dictionary that contains the Proxies settings.
- [VPN.TransparentProxy](transparentproxy-data.dictionary.md): The dictionary to use for a transparent proxy VPN type.
- [VPN.VPN](vpn-data.dictionary.md): The dictionary that contains VPN, IPSec, and IKEv2 settings.
- [VPN.VendorConfig](vendorconfig-data.dictionary.md): The vendor-specific configuration dictionary.

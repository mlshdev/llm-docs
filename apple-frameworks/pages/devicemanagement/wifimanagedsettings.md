> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/wifimanagedsettings](https://developer.apple.com/documentation/devicemanagement/wifimanagedsettings)

# WiFiManagedSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.9+

The payload that configures managed Wi-Fi settings.

## Declaration

```
object WiFiManagedSettings
```

## Properties

- `RequireAdminForAirPortNetworkChange` — `boolean`: If `true`, requires administrator authorization for network changes.
  **Default:** `false`
- `RequireAdminForIBSS` — `boolean`: If `true`, requires administrator authorization to enable IBSS.
  **Default:** `false`
- `RequireAdminToTurnAirPortOnOff` — `boolean`: If `true`, requires administrator authorization to turn Wi-Fi on or off.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.MCX` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | macOS |

<a id="Profile-example"></a>

### Profile example

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>RequireAdminForAirPortNetworkChange</key>
            <true/>
            <key>RequireAdminForIBSS</key>
            <true/>
            <key>RequireAdminToTurnAirPortOnOff</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mymanagedwifipayload</string>
            <key>PayloadType</key>
            <string>com.apple.MCX</string>
            <key>PayloadUUID</key>
            <string>8d527efa-0768-49e4-b328-9b222d23c379</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Managed Wi-Fi</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>944429fb-2a8d-4d48-81ab-056428104593</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Networking

- [Cellular](cellular.md): The payload that configures cellular settings.
- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [DNSSettings](dnssettings.md): Deprecated. The payload that configures encrypted DNS settings.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [Firewall](firewall.md): The payload that configures the firewall.
- [NetworkUsageRules](networkusagerules.md): The payload that configures network-usage rules.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.

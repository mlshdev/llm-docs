> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkusagerules](https://developer.apple.com/documentation/devicemanagement/networkusagerules)

# NetworkUsageRules

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+

The payload that configures network-usage rules.

## Declaration

```
object NetworkUsageRules
```

## Properties

- `ApplicationRules` — `[NetworkUsageRules.ApplicationRulesItem]`: An array of application rules, that apply to only managed apps.
- `SIMRules` — `[NetworkUsageRules.SIMRulesItem]`: An array of SIM rules, that apply to all apps.

  Available: iOS 13+ | iPadOS 13+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.networkusagerules` as the payload type.

Network usage rules allow enterprises to specify how devices use networks, such as cellular data networks. iOS 9-12 require the application rules. In iOS 13, application rules, SIM rules, or both must be present.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
| User channel | N/A |
| Allow manual install | N/A |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | N/A |
| Allow multiple payloads | N/A |

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
            <key>ApplicationRules</key>
            <array>
                <dict>
                    <key>AllowCellularData</key>
                    <false/>
                    <key>AllowRoamingCellularData</key>
                    <false/>
                    <key>AppIdentifierMatches</key>
                    <array>
                        <string>com.apple.appname</string>
                    </array>
                </dict>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.mynetworkusagepayload</string>
            <key>PayloadType</key>
            <string>com.apple.networkusagerules</string>
            <key>PayloadUUID</key>
            <string>'ef0250de-bfd4-4095-9ad3-34cf1281d5da</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Network Usage</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>b724f950-5853-4b78-8f4a-9a37a0ccac1f</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [NetworkUsageRules.ApplicationRulesItem](networkusagerules/applicationrulesitem.md): The application rules dictionary.
- [NetworkUsageRules.SIMRulesItem](networkusagerules/simrulesitem.md): The policy for individual SIM cards.

## See Also

### Networking

- [Cellular](cellular.md): The payload that configures cellular settings.
- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [DNSSettings](dnssettings.md): Deprecated. The payload that configures encrypted DNS settings.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [Firewall](firewall.md): The payload that configures the firewall.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.
- [WiFiManagedSettings](wifimanagedsettings.md): The payload that configures managed Wi-Fi settings.

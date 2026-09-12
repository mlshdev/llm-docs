> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cellular](https://developer.apple.com/documentation/devicemanagement/cellular)

# Cellular

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · watchOS 3.2+

The payload that configures cellular settings.

## Declaration

```
object Cellular
```

## Properties

- `APNs` — `[Cellular.APNsItem]`: An array of access point name (APN) dictionaries.
- `AttachAPN` — `Cellular.AttachAPN`: A configuration dictionary.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.cellular` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad, watchOS |
| User channel | N/A |
| Allow manual install | iOS, watchOS |
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
            <key>AttachAPN</key>
            <dict>
                <key>Name</key>
                <string>example.com</string>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.mycellularnetworkpayload</string>
            <key>PayloadType</key>
            <string>com.apple.cellular</string>
            <key>PayloadUUID</key>
            <string>5a024a67-119f-4b38-8648-4c28a054ec5f</string>
            <key>PayloadVersion</key>
            <real>1</real>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Cellular</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>07eeff13-902a-408b-9bec-2228b86f944f</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [Cellular.APNsItem](cellular/apnsitem.md): A dictionary that contains details about an access point name (APN) configuration.
- [Cellular.AttachAPN](cellular/attachapn-data.dictionary.md): A dictionary that contains details about an attach access point name (APN) configuration.

## See Also

### Networking

- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [DNSSettings](dnssettings.md): Deprecated. The payload that configures encrypted DNS settings.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [Firewall](firewall.md): The payload that configures the firewall.
- [NetworkUsageRules](networkusagerules.md): The payload that configures network-usage rules.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.
- [WiFiManagedSettings](wifimanagedsettings.md): The payload that configures managed Wi-Fi settings.

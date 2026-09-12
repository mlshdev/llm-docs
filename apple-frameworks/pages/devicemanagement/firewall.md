> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/firewall](https://developer.apple.com/documentation/devicemanagement/firewall)

# Firewall

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12+

The payload that configures the firewall.

## Declaration

```
object Firewall
```

## Properties

- `AllowSigned` — `boolean`: If `true`, the system allows built-in software to receive incoming connections.

  > **Note**

  >  The system ensures that `AllowSigned` always has a value. If missing from the payload, the system sets it to `true`.

  Available: macOS 12.3+  
  **Default:** `true`
- `AllowSignedApp` — `boolean`: If `true`, the system allows downloaded signed software to receive incoming connections.

  > **Note**

  >  The system ensures that `AllowSignedApp` always has a value. If missing from the payload, the system sets it to `true`.

  Available: macOS 12.3+  
  **Default:** `true`
- `Applications` — `[Firewall.ApplicationsItem]`: The list of apps with connections that the firewall controls.
- `BlockAllIncoming` — `boolean`: If `true`, the system enables blocking all incoming connections.
- `EnableFirewall` — `boolean` (required): If `true`, the system enables the firewall.
- `EnableStealthMode` — `boolean`: If `true`, the system enables stealth mode.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.security.firewall` as the payload type.

The payload needs to exist in a system-scoped profile.

If more than one profile contains this payload, the system uses the most restrictive union of settings.

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
            <key>EnableFirewall</key>
            <true/>
            <key>Applications</key>
            <array>
                <dict>
                    <key>BundleID</key>
                    <string>com.example.myapp</string>
                    <key>Allowed</key>
                    <false/>
                </dict>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.myfirewallpayload</string>
            <key>PayloadType</key>
            <string>com.apple.security.firewall</string>
            <key>PayloadUUID</key>
            <string>28b1fef7-ddb6-4d56-9a6a-6bb4e56e7f0b</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Firewall</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>8f2fa915-f2da-4034-9424-2218355a6f3c</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [Firewall.ApplicationsItem](firewall/applicationsitem.md): A dictionary of details for apps.

## See Also

### Networking

- [Cellular](cellular.md): The payload that configures cellular settings.
- [CellularPrivateNetwork](cellularprivatenetwork.md): The payload that provides device info on private network deployments, including geographical location, preference over Wi-Fi, and network deployment type.
- [ContentCachingService](contentcachingservice.md): Deprecated. The payload that configures the Content Caching service.
- [DNSSettings](dnssettings.md): Deprecated. The payload that configures encrypted DNS settings.
- [Domains](domains.md): The payload that configures the domains under an organization’s management.
- [NetworkUsageRules](networkusagerules.md): The payload that configures network-usage rules.
- [Relay](relay.md): Deprecated. The payload that configures relay settings.
- [WiFi](wifi.md): The payload that configures Wi-Fi settings.
- [WiFiManagedSettings](wifimanagedsettings.md): The payload that configures managed Wi-Fi settings.

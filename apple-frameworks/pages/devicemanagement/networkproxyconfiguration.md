> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/networkproxyconfiguration](https://developer.apple.com/documentation/devicemanagement/networkproxyconfiguration)

# NetworkProxyConfiguration

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures network proxies for a device.

## Declaration

```
object NetworkProxyConfiguration
```

## Properties

- `Proxies` — `NetworkProxyConfiguration.Proxies` (required): The dictionary containing all the proxies for this device.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.SystemConfiguration` as the payload type.

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
            <key>Proxies</key>
            <dict>
                <key>Exceptions</key>
                <array>
                    <string>*.local, 169.254/16</string>
                </array>
                <key>HTTPEnable</key>
                <integer>1</integer>
                <key>HTTPProxy</key>
                <string>proxy.example.com</string>
                <key>HTTPPort</key>
                <integer>8080</integer>
                <key>FTPPassive</key>
                <integer>1</integer>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.myproxypayload</string>
            <key>PayloadType</key>
            <string>com.apple.SystemConfiguration</string>
            <key>PayloadUUID</key>
            <string>db29e77a-58ee-404b-8579-935a202cf16c</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Network Proxy Configuration</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>b2b00925-6565-4e56-85ab-e012ee0ce4e9</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [NetworkProxyConfiguration.Proxies](networkproxyconfiguration/proxies-data.dictionary.md): The payload for configuring network proxies.

## See Also

### Proxies

- [DNSProxy](dnsproxy.md): Deprecated. The payload that configures DNS proxies.
- [GlobalHTTPProxy](globalhttpproxy.md): The payload that configures a global HTTP proxy.

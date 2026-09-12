> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dnsproxy](https://developer.apple.com/documentation/devicemanagement/dnsproxy)

# DNSProxy

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 11.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.1+ (deprecated in 27.0)

The payload that configures DNS proxies.

> Use the declarative management `com.apple.configuration.network.dns-proxy` configuration.

## Declaration

```
object DNSProxy
```

## Properties

- `AppBundleIdentifier` — `string` (required): The bundle identifier of the app containing the DNS proxy network extension.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `DNSProxyUUID` — `string`: A globally unique identifier for this DNS proxy configuration. The proxy processes DNS lookups traffic for managed apps with the same `DNSProxyUUID` in their app attributes. This key is required for user enrollment.

  Available: iOS 16+ | iPadOS 16+ | visionOS 1.1+
  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `ProviderBundleIdentifier` — `string`: The bundle identifier of the DNS proxy network extension to use. Declaring the bundle identifier is useful for apps that contain more than one DNS proxy extension.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `ProviderConfiguration` — `DNSProxy.ProviderConfiguration`: The dictionary of vendor-specific configuration items.

  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+
- `ProviderDesignatedRequirement` — `string`: The designated requirement string that the system embeds in the code signature of the DNS proxy network extension. Use this to correctly identify the DNS proxy extension when `ProviderBundleIdentifier` is present.

  Available: macOS 10.15+
  Deprecated: iOS 27+ | iPadOS 27+ | macOS 27+ | visionOS 27+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.dnsProxy.managed` as the payload type.

Beginning with iOS 15, this profile is unsupervised and needs to be installed through MDM.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad, visionOS |
| User channel | N/A |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | iOS, visionOS |
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
            <key>AppBundleIdentifier</key>
            <string>com.example.mydnsproxyapp</string>
            <key>ProviderBundleIdentifier</key>
            <string>com.example.mydnsproxyapp.mydnsproxyprovider</string>
            <key>ProviderConfiguration</key>
            <dict>
                <key>resolver</key>
                <dict>
                    <key>ipaddress</key>
                    <string>9.9.9.9</string>
                </dict>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.mydnsproxypayload</string>
            <key>PayloadType</key>
            <string>com.apple.dnsProxy.managed</string>
            <key>PayloadUUID</key>
            <string>D6B3F3E4-A72E-49F1-AE2E-742A3A11BE1D</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>DNS Proxy</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>6a60bbe0-242c-493d-b338-c5885107f2af</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [DNSProxy.ProviderConfiguration](dnsproxy/providerconfiguration-data.dictionary.md): Deprecated. The dictionary of vendor-specific configuration items.

## See Also

### Proxies

- [GlobalHTTPProxy](globalhttpproxy.md): The payload that configures a global HTTP proxy.
- [NetworkProxyConfiguration](networkproxyconfiguration.md): The payload that configures network proxies for a device.

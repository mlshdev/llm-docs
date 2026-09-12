> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/8021xfirstactiveethernet](https://developer.apple.com/documentation/devicemanagement/8021xfirstactiveethernet)

# 8021XFirstActiveEthernet

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures the first wired, active Ethernet interface.

## Declaration

```
WiFi.EAPClientConfiguration 8021XFirstActiveEthernet
```

<a id="Discussion"></a>

## Discussion

Specify `com.apple.firstactiveethernet.managed` as the payload type.

This payload’s contents contain these profile-specific keys:

- Interface (String): This payload uses the value `FirstActiveEthernet`.
- EAPClientConfiguration ([WiFi.EAPClientConfiguration](wifi/eapclientconfiguration-data.dictionary.md)): The dictionary that defines the enterprise profile for the network.
- SetupModes (String): The type of connection mode, which is either “System” or “Loginwindow.” “System” is the default.

Payloads with `active` in their name apply to Ethernet interfaces that are working at the time of profile installation. If there’s no active Ethernet interface working, this payload configures the interface with the highest service-order priority.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | macOS |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | macOS |
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
            <key>AuthenticationMethod</key>
            <string></string>
            <key>AutoJoin</key>
            <true/>
            <key>CaptiveBypass</key>
            <false/>
            <key>EAPClientConfiguration</key>
            <dict>
                <key>AcceptEAPTypes</key>
                <array>
                    <integer>25</integer>
                </array>
                <key>UserName</key>
                <string>user</string>
                <key>UserPassword</key>
                <string>password</string>
            </dict>
            <key>EncryptionType</key>
            <string>WPA2</string>
            <key>HIDDEN_NETWORK</key>
            <false/>
            <key>Interface</key>
            <string>FirstEthernet</string>
            <key>Password</key>
            <string>password</string>
            <key>ProxyType</key>
            <string>None</string>
            <key>SetupModes</key>
            <array>
                <string>System</string>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.my8021xfaepayload</string>
            <key>PayloadType</key>
            <string>com.apple.firstactiveethernet.managed</string>
            <key>PayloadUUID</key>
            <string>9a7d074f-5822-4507-8e8c-80e479d95001</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>802.1x First Active Ethernet</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>fea1c6f3-5d95-4db9-be46-c130fb475409</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Ethernet

- [8021XGlobalEthernet](8021xglobalethernet.md): The payload that configures the default fallback global Ethernet interface.
- [8021XFirstEthernet](8021xfirstethernet.md): The payload that configures the first wired Ethernet interface.
- [8021XSecondActiveEthernet](8021xsecondactiveethernet.md): The payload that configures the second wired, active Ethernet interface.
- [8021XSecondEthernet](8021xsecondethernet.md): The payload that configures the second wired Ethernet interface.
- [8021XThirdActiveEthernet](8021xthirdactiveethernet.md): The payload that configures the third wired, active Ethernet interface.
- [8021XThirdEthernet](8021xthirdethernet.md): The payload that configures the third wired Ethernet interface.

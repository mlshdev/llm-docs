> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/associateddomains](https://developer.apple.com/documentation/devicemanagement/associateddomains)

# AssociatedDomains

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15+

The payload that configures associated domains.

## Declaration

```
object AssociatedDomains
```

## Properties

- `Configuration` — `[AssociatedDomains.ConfigurationItem]` (required): A dictionary that maps apps to their associated domains.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.associated-domains` as the payload type.

You can use associated domains with features such as Extensible AppSSO, universal links, and Password AutoFill.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | macOS |
| Allow manual install | N/A |
| Requires supervision | N/A |
| Requires user-approved MDM | macOS |
| Allowed in user enrollment | macOS |
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
            <key>Configuration</key>
            <array>
                <dict>
                    <key>ApplicationIdentifier</key>
                    <string>com.apple.mobilesafari</string>
                    <key>AssociatedDomains</key>
                    <array>
                        <string>www.example.com</string>
                    </array>
                </dict>
            </array>
            <key>PayloadIdentifier</key>
            <string>com.example.myassociateddomainpayload</string>
            <key>PayloadType</key>
            <string>com.apple.associated-domains</string>
            <key>PayloadUUID</key>
            <string>7f6e26da-c381-4666-9dc6-50b4cd418652</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Associated Domains</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>2c8c95c4-fde5-4e90-9dea-f8e9ab633562</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [AssociatedDomains.ConfigurationItem](associateddomains/configurationitem.md): A dictionary that maps apps to their associated domains.

## See Also

### App management

- [AppLock](applock.md): The payload that configures a device to run a single app.
- [AutonomousSingleAppMode](autonomoussingleappmode.md): The payload that configures Autonomous Single App mode.
- [NSExtensionManagement](nsextensionmanagement.md): The payload that configures the extensions that the system allows or disallows to run on the device.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedpreferences](https://developer.apple.com/documentation/devicemanagement/managedpreferences)

# ManagedPreferences

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures managed preferences.

## Declaration

```
object ManagedPreferences
```

## Properties

- `PayloadContent` — `ManagedPreferences.PayloadContent` (required): The dictionary containing app preference domains. The key names are application preference domain identifiers (for example, `com.example.my-app`), or the string `.GlobalPreferences` for the global domain. The values are the corresponding forced and set-once preferences.

## Mentioned In

- [Implementing Platform SSO during Automated Device Enrollment](implementing-platform-sso-during-automated-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.ManagedClient.preferences` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | macOS |
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
            <key>PayloadContent</key>
            <dict>
                <key>com.example.myapp</key>
                <dict>
                    <key>Forced</key>
                    <array>
                        <dict>
                            <key>mcx_preference_settings</key>
                            <dict>
                                <key>MySetting</key>
                                <false/>
                            </dict>
                        </dict>
                    </array>
                </dict>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.mymanprefpayload</string>
            <key>PayloadType</key>
            <string>com.apple.ManagedClient.preferences</string>
            <key>PayloadUUID</key>
            <string>83c9f6e8-ef4b-4974-b83b-b2e7fe79b75c</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Managed Preference</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>54e23577-3424-4092-a9b4-a5e5af88fd52</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [ManagedPreferences.PayloadContent](managedpreferences/payloadcontent-data.dictionary.md): The dictionary containing app preference domains. The key names are application preference domain identifiers (for example, `com.example.my-app`), or the string `.GlobalPreferences` for the global domain. The values are the corresponding forced and set-once preferences.

## See Also

### Managed devices

- [EducationConfiguration](educationconfiguration.md): The payload that configures the users, groups, and departments within an educational organization.
- [LightsOutManagementLOM](lightsoutmanagementlom.md): The payload that configures lights-out management (LOM) settings.
- [MDM](mdm.md): The payload that configures mobile device management (MDM) settings.
- [ProfileRemovalPassword](profileremovalpassword.md): The payload that configures profile removal.

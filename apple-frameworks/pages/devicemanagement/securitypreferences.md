> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securitypreferences](https://developer.apple.com/documentation/devicemanagement/securitypreferences)

# SecurityPreferences

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.10+

The payload that configures security preferences.

## Declaration

```
object SecurityPreferences
```

## Properties

- `dontAllowFireWallUI` — `boolean`: If `true`, disables user changes to the firewall settings.
  **Default:** `false`
- `dontAllowLockMessageUI` — `boolean`: If `true`, disables user changes to the lock message.
  **Default:** `false`
- `dontAllowPasswordResetUI` — `boolean`: If `true`, disables user changes to the password.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.preference.security` as the payload type.

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
            <key>dontAllowFireWallUI</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mysecuritypreferencespayload</string>
            <key>PayloadType</key>
            <string>com.apple.preference.security</string>
            <key>PayloadUUID</key>
            <string>d99bb019-a61d-447f-8fed-8f223cc56be3</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Security Preferences</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>b44b6a04-6527-4333-87e5-46422e8a5844</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Security

- [Passcode](passcode.md): Deprecated. The payload that configures a passcode policy.
- [SmartCard](smartcard.md): The payload that configures a smart card.

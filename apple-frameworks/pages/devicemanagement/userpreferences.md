> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/userpreferences](https://developer.apple.com/documentation/devicemanagement/userpreferences)

# UserPreferences

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12+

The payload that configures iCloud password preferences.

## Declaration

```
object UserPreferences
```

## Properties

- `DisableUsingiCloudPassword` — `boolean`: If `true`, disables the iCloud password for local accounts.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.preference.users` as the payload type.

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
            <key>DisableUsingiCloudPassword</key>
            <false/>
            <key>PayloadIdentifier</key>
            <string>com.example.myuserpayload</string>
            <key>PayloadType</key>
            <string>com.apple.preferences.users</string>
            <key>PayloadUUID</key>
            <string>733ec67c-853c-45b2-9510-198e055e0723</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>User</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>1a5fe077-6146-44ae-82db-5cb938dddad4</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Preferences

- [GlobalPreferences](globalpreferences.md): The payload to configure global preferences.

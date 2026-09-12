> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/globalpreferences](https://developer.apple.com/documentation/devicemanagement/globalpreferences)

# GlobalPreferences

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload to configure global preferences.

## Declaration

```
object GlobalPreferences
```

## Properties

- `com.apple.autologout.AutoLogOutDelay` — `number`: The `autologout` delay, in seconds. A value of `0` means `autologout` is off. In some cases, this delay may be restricted to values between 5 minutes and 24 hours.
- `MultipleSessionEnabled` — `boolean`: If `false`, disables fast user switching.
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

Specify `.GlobalPreferences` as the payload type.

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
            <key>MultipleSessionEnabled</key>
            <false/>
            <key>com.example.autologout.AutoLogOutDelay</key>
            <real>1800</real>
            <key>LULookupDisabled</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myglobalpayload</string>
            <key>PayloadType</key>
            <string>.GlobalPreferences</string>
            <key>PayloadUUID</key>
            <string>b5033127-c0ef-4055-8fc5-7db5a8216bc8</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Global Preferences</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>52e0e1b6-067f-407a-a36c-7e7b917b2982</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Preferences

- [UserPreferences](userpreferences.md): The payload that configures iCloud password preferences.

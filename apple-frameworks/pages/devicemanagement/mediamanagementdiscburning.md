> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/mediamanagementdiscburning](https://developer.apple.com/documentation/devicemanagement/mediamanagementdiscburning)

# MediaManagementDiscBurning

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures disc-burning settings.

## Declaration

```
object MediaManagementDiscBurning
```

## Properties

- `BurnSupport` — `string` (required): Configure disc-burn. Allowed values:

  - `off`: The system disables disc burning.
  - `on`: The system allows normal default operation. Setting this key to `on` doesn’t enable disc burn support if other mechanisms or preferences disabled it. Needs to be enabled with the [Finder](finder.md) profile.
  - `authenticate`: The system requires authentication.  
  **Allowed values:** `off`, `authenticate`, `on`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.DiscRecording` as the payload type.

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
            <key>BurnSupport</key>
            <string>authenticate</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mymediamanagementpayload</string>
            <key>PayloadType</key>
            <string>com.apple.DiscRecording</string>
            <key>PayloadUUID</key>
            <string>c7d88693-77a2-4f4d-a782-6569a1c2d92c</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Media Management</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>8996588b-f785-4720-b68f-fa9c61d74bd4</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

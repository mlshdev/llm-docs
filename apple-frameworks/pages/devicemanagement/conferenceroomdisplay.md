> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/conferenceroomdisplay](https://developer.apple.com/documentation/devicemanagement/conferenceroomdisplay)

# ConferenceRoomDisplay

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** tvOS 10.2+

The payload that configures Conference Room Display mode for Apple TV.

## Declaration

```
object ConferenceRoomDisplay
```

## Properties

- `Message` — `string`: The custom message displayed on the screen in Conference Room Display mode.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.conferenceroomdisplay` as the payload type.

Conference Room Display mode locks Apple TV into that mode, to prevent other types of usage.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | tvOS |
| User channel | N/A |
| Allow manual install | tvOS |
| Requires supervision | tvOS |
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
            <key>Message</key>
            <string>Display Message</string>
            <key>PayloadIdentifier</key>
            <string>com.example.myconferenceroompayload</string>
            <key>PayloadType</key>
            <string>com.apple.conferenceroomdisplay</string>
            <key>PayloadUUID</key>
            <string>2aff0bfa-62f4-4597-9714-3750f5e3d422</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Conference Room Display</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>c98885c9-12fe-43d2-8476-fb98bc959dd3</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### Apple TV

- [TVRemote](tvremote.md): The payload that configures the Apple TV remote.

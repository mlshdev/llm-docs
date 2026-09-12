> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/tvremote](https://developer.apple.com/documentation/devicemanagement/tvremote)

# TVRemote

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · tvOS 11.3+

The payload that configures the Apple TV remote.

## Declaration

```
object TVRemote
```

## Properties

- `AllowedRemotes` — `[TVRemote.AllowedRemotesItem]`: The array of valid devices that Apple TV can connect to.

  Available: tvOS 11.3+
- `AllowedTVs` — `[TVRemote.AllowedTVsItem]`: The array of valid Apple TV identifiers that the remote can connect to.

  Available: iOS 11.3+ | iPadOS 11.3+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.tvremote` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad, tvOS |
| User channel | Shared iPad |
| Allow manual install | iOS, tvOS |
| Requires supervision | iOS, tvOS |
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
            <key>AllowedRemotes</key>
            <array>
                <dict>
                    <key>RemoteDeviceID</key>
                    <string>10:10:10:10:10:10</string>
                </dict>
            </array>
            <key>AllowedTVs</key>
            <array/>
            <key>PayloadIdentifier</key>
            <string>com.example.mytvremotepayload</string>
            <key>PayloadType</key>
            <string>com.apple.tvremote</string>
            <key>PayloadUUID</key>
            <string>696eb2c4-df9d-463f-b74a-685dae845fac</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>TV Remote</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>3de47695-ad92-44f5-9bc9-f1b2f2c7727b</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [TVRemote.AllowedRemotesItem](tvremote/allowedremotesitem.md): The array of valid devices that Apple TV can connect to.
- [TVRemote.AllowedTVsItem](tvremote/allowedtvsitem.md): The array of valid Apple TV identifiers that the remote can connect to.

## See Also

### Apple TV

- [ConferenceRoomDisplay](conferenceroomdisplay.md): The payload that configures Conference Room Display mode for Apple TV.

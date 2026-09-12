> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/timeserver](https://developer.apple.com/documentation/devicemanagement/timeserver)

# TimeServer

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12.4+

The payload that configures the time server.

## Declaration

```
object TimeServer
```

## Properties

- `timeServer` — `string`: The NTP server to connect to. In macOS 10.13 and later, only one time server is supported.
- `timeZone` — `string`: The time zone path location string in `/usr/share/zoneinfo/`; for example, `America/Denver` or `Zulu`.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.MCX` as the payload type.

If multiple profiles with this payload are sent, the system sets the device’s time server to the value in the last payload installed. Removing the payload won’t change the settings back to the prior settings.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | N/A |
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
            <key>timeServer</key>
            <string>ntp.example.com</string>
            <key>timeZone</key>
            <string>America/Denver</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mytimeserverpayload</string>
            <key>PayloadType</key>
            <string>com.apple.MCX</string>
            <key>PayloadUUID</key>
            <string>7bc24f5a-5ad8-4ad0-b05e-8f5f4418ff05</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Time Server</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>a18b9fa3-dbdc-4e60-89e0-d785c7c6a1a0</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### System configuration

- [Declarations](declarations.md): The payload that applies a set of declarations to the device through the Settings app.
- [EnergySaver](energysaver.md): The payload that configures Energy Saver settings.
- [FileProvider](fileprovider.md): The payload that configures file provider settings.
- [Font](font.md): The payload that configures fonts.
- [LockScreenMessage](lockscreenmessage.md): The payload that configures a Lock Screen message.
- [Screensaver](screensaver.md): The payload that configures the screen saver.
- [SystemExtensions](systemextensions.md): The payload that configures system extensions.
- [SystemLogging](systemlogging.md): The payload that configures system logging.

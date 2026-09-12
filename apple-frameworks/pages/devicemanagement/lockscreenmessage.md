> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lockscreenmessage](https://developer.apple.com/documentation/devicemanagement/lockscreenmessage)

# LockScreenMessage

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The payload that configures a Lock Screen message.

## Declaration

```
object LockScreenMessage
```

## Properties

- `AssetTagInformation` — `string`: The asset tag information for the device, displayed in the Login Window and Lock Screen.
- `IfLostReturnToMessage` — `string`: Deprecated. Use `LockScreenFootnote` instead.

  Deprecated: iOS 9.3.1+ | iPadOS 9.3.1+
- `LockScreenFootnote` — `string`: The footnote displayed in the Login Window and Lock Screen.

  Available: iOS 9.3.1+ | iPadOS 9.3.1+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.shareddeviceconfiguration` as the payload type.

This payload allows administrators to specify optional text displayed in the Login Window and Lock Screen (for example, an “If Lost, Return To” message and asset tag information). There can only be one Lock Screen payload.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad |
| User channel | N/A |
| Allow manual install | iOS |
| Requires supervision | iOS |
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
            <key>AssetTagInformation</key>
            <string>1234</string>
            <key>IfLostReturnToMessage</key>
            <string>Example message</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mylockscreenpayload</string>
            <key>PayloadType</key>
            <string>com.apple.shareddeviceconfiguration</string>
            <key>PayloadUUID</key>
            <string>b10c0436-a51b-4119-b604-bd580f396723</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Lock Screen Message</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>588f1406-47be-47fc-9907-4e7955fb6d4a</string>
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
- [Screensaver](screensaver.md): The payload that configures the screen saver.
- [SystemExtensions](systemextensions.md): The payload that configures system extensions.
- [SystemLogging](systemlogging.md): The payload that configures system logging.
- [TimeServer](timeserver.md): The payload that configures the time server.

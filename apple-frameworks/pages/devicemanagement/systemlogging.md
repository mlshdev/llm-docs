> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/systemlogging](https://developer.apple.com/documentation/devicemanagement/systemlogging)

# SystemLogging

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12+

The payload that configures system logging.

## Declaration

```
object SystemLogging
```

## Properties

- `Subsystems` — `SystemLogging.Subsystems`: A dictionary enabling the logging level for subsystems. See `Customizing Logging Behavior While Debugging` for more details about the format of the dictionary.
- `System` — `SystemLogging.System`: This dictionary has one key, `Enable-Private-Data`. Setting that value to `true` enables private data logging for the entire system.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.system.logging` as the payload type.

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
            <key>Subsystems</key>
            <dict>
                <key>com.example.app</key>
                <dict>
                    <key>DEFAULT-OPTIONS</key>
                    <dict>
                        <key>Level</key>
                        <dict>
                            <key>Enable</key>
                            <string>Info</string>
                        </dict>
                        <key>Default-Privacy-Setting</key>
                        <string>Public</string>
                    </dict>
                </dict>
            </dict>
            <key>PayloadIdentifier</key>
            <string>com.example.mysystemloggingpayload</string>
            <key>PayloadType</key>
            <string>com.apple.system.logging</string>
            <key>PayloadUUID</key>
            <string>0ff59613-35e9-495c-88c8-01963de4ac80</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>System Logging</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>0fbfa83e-c8ec-49d0-b50c-3acc3c05749c</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [SystemLogging.Subsystems](systemlogging/subsystems-data.dictionary.md): A dictionary enabling the logging level for subsystems. See `Customizing Logging Behavior While Debugging` for more details about the format of the dictionary.
- [SystemLogging.System](systemlogging/system-data.dictionary.md): This dictionary has one key, `Enable-Private-Data`. Setting that value to `true` enables private data logging for the entire system.

## See Also

### System configuration

- [Declarations](declarations.md): The payload that applies a set of declarations to the device through the Settings app.
- [EnergySaver](energysaver.md): The payload that configures Energy Saver settings.
- [FileProvider](fileprovider.md): The payload that configures file provider settings.
- [Font](font.md): The payload that configures fonts.
- [LockScreenMessage](lockscreenmessage.md): The payload that configures a Lock Screen message.
- [Screensaver](screensaver.md): The payload that configures the screen saver.
- [SystemExtensions](systemextensions.md): The payload that configures system extensions.
- [TimeServer](timeserver.md): The payload that configures the time server.

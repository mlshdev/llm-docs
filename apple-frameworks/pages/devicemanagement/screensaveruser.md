> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/screensaveruser](https://developer.apple.com/documentation/devicemanagement/screensaveruser)

# ScreensaverUser

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.11+

The payload that configures a user’s screen saver settings.

## Declaration

```
object ScreensaverUser
```

## Properties

- `idleTime` — `integer`: The number of seconds of inactivity before the screen saver activates (`0` = Never activate).
- `moduleName` — `string` (required): The name of the screen saver module.
- `modulePath` — `string`: A full path to the screen saver module to use.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.screensaver.user` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | N/A |
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
            <key>idleTime</key>
            <integer>60</integer>
            <key>modulePath</key>
            <string>/System/Library/Screen Savers/Name.saver</string>
            <key>PayloadIdentifier</key>
            <string>com.example.myscreensaverpayload</string>
            <key>PayloadType</key>
            <string>com.apple.screensaver.user</string>
            <key>PayloadUUID</key>
            <string>c5dceece-f633-44e6-b899-9d46631fd6e5</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Screen Saver User</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>59332e00-d3c5-4d2a-a23a-ba36e45034e9</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### User experience

- [Accessibility](accessibility.md): The payload that configures the accessibility features of the device.
- [Desktop](desktop.md): The payload that configures the desktop wallpaper.
- [Dock](dock.md): The payload that configures the Dock.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

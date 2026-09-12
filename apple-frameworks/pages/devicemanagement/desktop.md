> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/desktop](https://developer.apple.com/documentation/devicemanagement/desktop)

# Desktop

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.10+

The payload that configures the desktop wallpaper.

## Declaration

```
object Desktop
```

## Properties

- `locked` — `boolean`: If `true`, locks the desktop picture. Replaced with allowWallpaperModification in macOS 10.13.

  Deprecated: macOS 10.13+  
  **Default:** `false`
- `override-picture-path` — `string`: The path to the desktop picture. If set, this picture is always locked.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.desktop` as the payload type.

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
            <key>locked</key>
            <true/>
            <key>override-picture-path</key>
            <string>~/Desktop/background.png</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mydesktoppayload</string>
            <key>PayloadType</key>
            <string>com.apple.desktop</string>
            <key>PayloadUUID</key>
            <string>77a7ad50-9e32-4afb-8aee-79ae0c392848</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Desktop</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>2e00699a-8e37-417d-94b2-97b85ff722a2</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### User experience

- [Accessibility](accessibility.md): The payload that configures the accessibility features of the device.
- [Dock](dock.md): The payload that configures the Dock.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

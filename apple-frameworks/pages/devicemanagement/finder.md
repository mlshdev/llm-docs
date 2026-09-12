> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/finder](https://developer.apple.com/documentation/devicemanagement/finder)

# Finder

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures Finder settings.

## Declaration

```
object Finder
```

## Properties

- `ProhibitBurn` — `boolean`: If `true`, the system disables the Finder’s burn support.
  **Default:** `false`
- `ProhibitConnectTo` — `boolean`: If `true`, the system disables Connect to Server.
  **Default:** `false`
- `ProhibitEject` — `boolean`: If `true`, the system disables Eject.
  **Default:** `false`
- `ProhibitGoToFolder` — `boolean`: If `true`, the system disables Go to Folder.
  **Default:** `false`
- `ShowExternalHardDrivesOnDesktop` — `boolean`: If `false`, the system doesn’t show external hard drives on the Desktop.
  **Default:** `true`
- `ShowHardDrivesOnDesktop` — `boolean`: If `false`, the system doesn’t show internal hard drives on the Desktop.
  **Default:** `false`
- `ShowMountedServersOnDesktop` — `boolean`: If `false`, the system doesn’t show mounted file servers on the Desktop.
  **Default:** `false`
- `ShowRemovableMediaOnDesktop` — `boolean`: If `false`, the system doesn’t show removable media items on the Desktop.
  **Default:** `true`
- `WarnOnEmptyTrash` — `boolean`: If `false`, the system doesn’t warn the user before emptying the trash.
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.finder` as the payload type.

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
            <key>InterfaceLevel</key>
            <string>Full</string>
            <key>ShowHardDrivesOnDesktop</key>
            <true/>
            <key>ShowExternalHardDrivesOnDesktop</key>
            <false/>
            <key>ShowRemovableMediaOnDesktop</key>
            <false/>
            <key>ShowMountedServersOnDesktop</key>
            <true/>
            <key>WarnOnEmptyTrash</key>
            <true/>
            <key>ProhibitConnectTo</key>
            <true/>
            <key>ProhibitEject</key>
            <true/>
            <key>ProhibitBurn</key>
            <true/>
            <key>ProhibitGoToFolder</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myfinderpayload</string>
            <key>PayloadType</key>
            <string>com.apple.finder</string>
            <key>PayloadUUID</key>
            <string>feea617a-c8f2-4dce-afae-20b2fe5f9c9b</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Finder</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>2527bd12-fbc4-4957-a9e7-4afeb64e0246</string>
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
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

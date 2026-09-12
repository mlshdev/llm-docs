> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/notifications](https://developer.apple.com/documentation/devicemanagement/notifications)

# Notifications

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.15+

The payload that configures notifications.

## Declaration

```
object Notifications
```

## Properties

- `NotificationSettings` — `[Notifications.NotificationSettingsItem]` (required): An array of notification settings dictionaries.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.notificationsettings` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad |
| User channel | macOS, Shared iPad |
| Allow manual install | iOS, macOS |
| Requires supervision | iOS |
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
            <key>NotificationSettings</key>
            <array>
                <dict>
                    <key>AlertType</key>
                    <integer>0</integer>
                    <key>BundleIdentifier</key>
                    <string>com.apple.mobilemail</string>
                    <key>NotificationsEnabled</key>
                    <false/>
                </dict>
            </array>
            <key>ShowInLockScreen</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mynotificationspayload</string>
            <key>PayloadType</key>
            <string>com.apple.notificationsettings</string>
            <key>PayloadUUID</key>
            <string>d1cc23d9-f482-40c5-b7b1-332149659986</string>
            <key>PayloadVersion</key>
            <real>1</real>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Notification</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>2bb0ab2e-1e0a-4c03-a662-b4ee2ffe224a</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [Notifications.NotificationSettingsItem](notifications/notificationsettingsitem.md): The notification settings dictionary.

## See Also

### User experience

- [Accessibility](accessibility.md): The payload that configures the accessibility features of the device.
- [Desktop](desktop.md): The payload that configures the desktop wallpaper.
- [Dock](dock.md): The payload that configures the Dock.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

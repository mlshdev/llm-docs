> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setupassistant](https://developer.apple.com/documentation/devicemanagement/setupassistant)

# SetupAssistant

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.12+

The payload that configures Setup Assistant settings.

## Declaration

```
object SetupAssistant
```

## Properties

- `SkipAccessibility` — `boolean`: If `true`, the system skips the Accessibility pane.

  Available: macOS 11+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipAppearance` — `boolean`: If `true`, the system skips the Choose Your Look pane.

  Available: macOS 10.14+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipCloudSetup` — `boolean`: If `true`, the system skips the Apple Account setup pane.

  Available: macOS 10.12+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipiCloudStorageSetup` — `boolean`: If `true`, the system skips the iCloud Storage pane.

  Available: macOS 10.13.4+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipPrivacySetup` — `boolean`: If `true`, the system skips the Privacy consent pane.

  Available: macOS 10.13.4+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipScreenTime` — `boolean`: If `true`, the system skips the Screen Time pane.

  Available: macOS 10.15+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipSetupItems` — `[string]`: An array of strings that describe the setup items to skip. [SkipKeys](skipkeys.md) provides a list of valid strings and their meanings.

  Available: iOS 14+ | iPadOS 14+ | macOS 15+
- `SkipSiriSetup` — `boolean`: If `true`, the system skips the Siri setup pane.

  Available: macOS 10.12+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipTouchIDSetup` — `boolean`: If `true`, the system skips the Touch ID setup pane.

  Available: macOS 10.15+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipTrueTone` — `boolean`: If `true`, the system skips the True Tone Display pane.

  Available: macOS 10.13.6+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipUnlockWithWatch` — `boolean`: If `true`, the system skips the Unlock With Apple Watch pane.

  Available: macOS 12+
  Deprecated: macOS 15+  
  **Default:** `false`
- `SkipWallpaper` — `boolean`: If ‘true’, the system skips the Wallpaper selection window.

  Available: macOS 14.1+
  Deprecated: macOS 15+  
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.SetupAssistant.managed` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, Shared iPad |
| User channel | macOS |
| Allow manual install | iOS, macOS |
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
            <key>SkipCloudSetup</key>
            <true/>
            <key>SkipSiriSetup</key>
            <true/>
            <key>SkipPrivacySetup</key>
            <true/>
            <key>SkipiCloudStorageSetup</key>
            <true/>
            <key>SkipTrueTone</key>
            <true/>
            <key>SkipAppearance</key>
            <true/>
            <key>SkipTouchIDSetup</key>
            <true/>
            <key>SkipScreenTime</key>
            <true/>
            <key>SkipAccessibility</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mysetupassistantpayload</string>
            <key>PayloadType</key>
            <string>com.apple.SetupAssistant.managed</string>
            <key>PayloadUUID</key>
            <string>0dfccedc-e28f-4df5-bca7-a0807deab543</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Setup Assistant</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>4a66b685-604a-4558-92c7-ae3e082cf0ae</string>
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
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

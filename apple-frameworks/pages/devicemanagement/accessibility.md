> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accessibility](https://developer.apple.com/documentation/devicemanagement/accessibility)

# Accessibility

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.9+

The payload that configures the accessibility features of the device.

## Declaration

```
object Accessibility
```

## Properties

- `closeViewFarPoint` — `integer`: The minimum zoom level in the Zoom options.
- `closeViewHotkeysEnabled` — `boolean`: If `true`, enables “Use keyboard shortcuts” in the Zoom options.
  **Default:** `false`
- `closeViewNearPoint` — `integer`: The maximum zoom level in the Zoom options.
- `closeViewScrollWheelToggle` — `boolean`: If `true`, enables “Use scroll gesture” in the Zoom options.
  **Default:** `false`
- `closeViewShowPreview` — `boolean`: If `true`, enables “Show preview rectangle” in the Zoom options. Only available in macOS 10.15 and earlier.

  Deprecated: macOS 10.15+  
  **Default:** `false`
- `closeViewSmoothImages` — `boolean`: If `true`, enables “Smooth images” in the Zoom options.
  **Default:** `false`
- `contrast` — `number`: The contrast value in the Display options.
  **Minimum:** `0`  
  **Maximum:** `1`
- `flashScreen` — `boolean`: If `true`, enables “Flash the screen” in the Audio options.
  **Default:** `false`
- `grayscale` — `boolean`: If `true`, enables “Use grayscale” in the Display options.

  This option is deprecated in macOS 11.

  Deprecated: macOS 11+  
  **Default:** `false`
- `mouseDriver` — `boolean`: If `true`, enables Mouse Keys in the Mouse & Trackpad options.
  **Default:** `false`
- `mouseDriverCursorSize` — `integer`: The size of the cursor.
- `mouseDriverIgnoreTrackpad` — `boolean`: If `true`, ignores the built-in trackpad.
  **Default:** `false`
- `mouseDriverInitialDelay` — `integer`: The initial delay before moving the mouse with Mouse Keys.
- `mouseDriverMaxSpeed` — `integer`: The maximum speed for the cursor when using Mouse Keys.
- `slowKey` — `boolean`: If `true`, enables “Slow Keys” in the Keyboard options.
  **Default:** `false`
- `slowKeyBeepOn` — `boolean`: If `true`, enables “click key sounds” for Slow Keys.
  **Default:** `false`
- `slowKeyDelay` — `integer`: The acceptance delay, in milliseconds, for Slow Keys.
- `stereoAsMono` — `boolean`: If `true`, plays stereo audio as mono.
  **Default:** `false`
- `stickyKey` — `boolean`: If `true`, enables Sticky Keys in the Keyboard options.
  **Default:** `false`
- `stickyKeyBeepOnModifier` — `boolean`: If `true`, enables the beep when a modifier key is set for Sticky Keys.
  **Default:** `false`
- `stickyKeyShowWindow` — `boolean`: If `true`, enables “Display pressed keys on screen” for Sticky Keys.
  **Default:** `false`
- `voiceOverOnOffKey` — `boolean`: If `true`, enables Voice Over.
  **Default:** `false`
- `whiteOnBlack` — `boolean`: If `true`, enables Invert Colors in Display Accommodations.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.universalaccess` as the payload type.

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
            <key>stickyKey</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.myaccessibilitypayload</string>
            <key>PayloadType</key>
            <string>com.apple.universalaccess</string>
            <key>PayloadUUID</key>
            <string>bff2939d-cb4c-4f6d-8521-e26bc7c03e96</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Accessibility</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>e7b55cc7-0d94-4045-8868-dcc1b1c58159</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## See Also

### User experience

- [Desktop](desktop.md): The payload that configures the desktop wallpaper.
- [Dock](dock.md): The payload that configures the Dock.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

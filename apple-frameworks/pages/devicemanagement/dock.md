> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dock](https://developer.apple.com/documentation/devicemanagement/dock)

# Dock

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures the Dock.

## Declaration

```
object Dock
```

## Properties

- `AllowDockFixupOverride` — `boolean`: If `true`, use the file in `/Library/Preferences/com.apple.dockfixup.plist` when a new user or migrated user logs in. This option has no effect for existing users. Only available on the device channel.

  Available: macOS 10.12+  
  **Default:** `false`
- `autohide` — `boolean`: If `true`, enables “Automatically hide and show the Dock.”
  **Default:** `false`
- `autohide-immutable` — `boolean`: If `true`, locks “Automatically hide.”
  **Default:** `false`
- `contents-immutable` — `boolean`: If `true`, disables changes to the Dock.
  **Default:** `false`
- `dblclickbehavior` — `string`: The behavior when the window’s title bar is double-clicked.

  Available: macOS 10.15+  
  **Allowed values:** `minimize`, `maximize`, `none`
- `dblclickbehavior-immutable` — `boolean`: If `true`, locks “Double-click a window’s title bar.”

  Available: macOS 10.14+  
  **Default:** `false`
- `largesize` — `integer`: The size of the largest magnification.
  **Minimum:** `16`  
  **Maximum:** `128`
- `launchanim` — `boolean`: If `true`, enables “Animate opening applications.”
  **Default:** `false`
- `launchanim-immutable` — `boolean`: If `true`, locks “Animate opening applications.”
  **Default:** `false`
- `magnification` — `boolean`: If `true`, enables magnification.
  **Default:** `false`
- `magnify-immutable` — `boolean`: If `true`, locks magnification.
  **Default:** `false`
- `magsize-immutable` — `boolean`: If `true`, locks the magnification slider.
  **Default:** `false`
- `MCXDockSpecialFolders` — `[string]`: One or more special folders that the device may create at user login time and place in the Dock.

  The “My Applications” item is only used for Simple Finder environments. The “Original Network Home” item is only used for mobile account users.  
  **Allowed values:** `AddDockMCXMyApplicationsFolder`, `AddDockMCXDocumentsFolder`, `AddDockMCXSharedFolder`, `AddDockMCXOriginalNetworkHomeFolder`
- `mineffect` — `string`: The minimize effect.
  **Allowed values:** `genie`, `scale`
- `mineffect-immutable` — `boolean`: If `true`, locks “Minimize windows using.”
  **Default:** `false`
- `minimize-to-application` — `boolean`: If `true`, enables “Minimize windows into application icon.”
  **Default:** `false`
- `minintoapp-immutable` — `boolean`: If `true`, disables the “Minimize windows into application icon” checkbox.

  Available: macOS 10.14+  
  **Default:** `false`
- `orientation` — `string`: The orientation of the Dock.
  **Allowed values:** `bottom`, `left`, `right`
- `persistent-apps` — `[Dock.StaticItem]`: An array of items located on the Applications side of the Dock that users can remove from the Dock.
- `persistent-others` — `[Dock.StaticItem]`: An array of items located on the Documents side of the Dock that users can remove from the Dock.
- `position-immutable` — `boolean`: If `true`, locks the position.
  **Default:** `false`
- `show-process-indicators` — `boolean`: If true, shows the process indicator.
  **Default:** `false`
- `show-recents` — `boolean`: If `true`, enables “Show recent items.”

  Available: macOS 10.14+  
  **Default:** `false`
- `showindicators-immutable` — `boolean`: If `true`, locks “Show indicators.”
  **Default:** `false`
- `showrecents-immutable` — `boolean`: If `true`, disables “Show recent applications” checkbox.

  Available: macOS 10.15+  
  **Default:** `false`
- `size-immutable` — `boolean`: If `true`, locks the size slider.
  **Default:** `false`
- `static-apps` — `[Dock.StaticItem]`: An array of items located on the Applications side of the Dock that users can’t remove from that location.
- `static-only` — `boolean`: If `true`, uses the `static-apps` and `static-others` dictionaries for the Dock and ignores any items in the `persistent-apps` and `persistent-others` dictionaries. If `false`, the contents are merged with the static items listed first.
  **Default:** `false`
- `static-others` — `[Dock.StaticItem]`: An array of items located on the Documents side of the Dock that users can’t remove from that location.
- `tilesize` — `integer`: The tile size. Values must be in the range from 16 to 128.
  **Minimum:** `16`  
  **Maximum:** `128`
- `windowtabbing` — `string`: Set the “Prefer tabs when opening documents” to the provided value.

  Available: macOS 10.15+  
  **Allowed values:** `manual`, `always`, `fullscreen`
- `windowtabbing-immutable` — `boolean`: If `true`, disables “Prefer tabs when opening documents” checkbox.

  Available: macOS 10.12+  
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.dock` as the payload type.

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
            <key>tilesize</key>
            <integer>40</integer>
            <key>size-immutable</key>
            <true/>
            <key>magnification</key>
            <true/>
            <key>magnify-immutable</key>
            <true/>
            <key>largesize</key>
            <integer>100</integer>
            <key>magsize-immutable</key>
            <true/>
            <key>orientation</key>
            <string>left</string>
            <key>position-immutable</key>
            <true/>
            <key>mineffect</key>
            <string>genie</string>
            <key>mineffect-immutable</key>
            <true/>
            <key>windowtabbing</key>
            <string>manual</string>
            <key>windowtabbing-immutable</key>
            <true/>
            <key>dblclickbehavior</key>
            <string>maximize</string>
            <key>dblclickbehavior-immutable</key>
            <true/>
            <key>minimize-to-application</key>
            <true/>
            <key>minintoapp-immutable</key>
            <true/>
            <key>launchanim</key>
            <true/>
            <key>launchanim-immutable</key>
            <true/>
            <key>autohide</key>
            <false/>
            <key>autohide-immutable</key>
            <true/>
            <key>show-process-indicators</key>
            <false/>
            <key>showindicators-immutable</key>
            <true/>
            <key>show-recents</key>
            <false/>
            <key>showrecents-immutable</key>
            <true/>
            <key>PayloadIdentifier</key>
            <string>com.example.mydockpayload</string>
            <key>PayloadType</key>
            <string>com.apple.dock</string>
            <key>PayloadUUID</key>
            <string>8d443602-52f2-48ff-aaa9-35b16c7c54c9</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Dock</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>c139d3e0-5468-43b0-90bf-5e05b2e8cd6f</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [Dock.StaticItem](dock/staticitem.md): Items that are located on the Documents side of the Dock and cannot be removed from that location.

## See Also

### User experience

- [Accessibility](accessibility.md): The payload that configures the accessibility features of the device.
- [Desktop](desktop.md): The payload that configures the desktop wallpaper.
- [Finder](finder.md): The payload that configures Finder settings.
- [HomeScreenLayout](homescreenlayout.md): The payload that configures the Home Screen layout.
- [ManagedMenuExtras](managedmenuextras.md): The payload that configures menu extras.
- [Notifications](notifications.md): The payload that configures notifications.
- [ScreensaverUser](screensaveruser.md): The payload that configures a user’s screen saver settings.
- [SetupAssistant](setupassistant.md): The payload that configures Setup Assistant settings.
- [TimeMachine](timemachine.md): The payload that configures Time Machine.

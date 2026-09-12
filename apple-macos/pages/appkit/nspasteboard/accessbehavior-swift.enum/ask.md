> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/accessbehavior-swift.enum/ask](https://developer.apple.com/documentation/appkit/nspasteboard/accessbehavior-swift.enum/ask)

# NSPasteboard.AccessBehavior.ask (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 15.4+

The system will notify the user and ask for permission before granting pasteboard access. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.

## Declaration

```swift
case ask
```

## See Also

### Working with defined behaviors

- [NSPasteboard.AccessBehavior.alwaysAllow](alwaysallow.md): The system will automatically allow all pasteboard access, without notifying the user. The app is listed in the corresponding System Settings pane.
- [NSPasteboard.AccessBehavior.alwaysDeny](alwaysdeny.md): The system will automatically deny all pasteboard access, without notifying the user. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboard.AccessBehavior.default](default.md): The default behavior for the General pasteboard is to ask upon programmatic access. All other pasteboards default to always allow access. If an app has never triggered a pasteboard access alert, its General pasteboard will report `.default` behavior. Such an app is not shown in the corresponding System Settings pane. Once programmatic pasteboard access triggers the first pasteboard access alert, the state automatically changes to `.ask`. At this point the app starts being shown in System Settings, where the user can toggle the behavior between `.ask`, `.alwaysAllow`, and `.alwaysDeny`.

# NSPasteboardAccessBehaviorAsk (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

The system will notify the user and ask for permission before granting pasteboard access. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.

## Declaration

```objectivec
NSPasteboardAccessBehaviorAsk
```

## See Also

### Working with defined behaviors

- [NSPasteboardAccessBehaviorAlwaysAllow](alwaysallow.md): The system will automatically allow all pasteboard access, without notifying the user. The app is listed in the corresponding System Settings pane.
- [NSPasteboardAccessBehaviorAlwaysDeny](alwaysdeny.md): The system will automatically deny all pasteboard access, without notifying the user. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboardAccessBehaviorDefault](default.md): The default behavior for the General pasteboard is to ask upon programmatic access. All other pasteboards default to always allow access. If an app has never triggered a pasteboard access alert, its General pasteboard will report `.default` behavior. Such an app is not shown in the corresponding System Settings pane. Once programmatic pasteboard access triggers the first pasteboard access alert, the state automatically changes to `.ask`. At this point the app starts being shown in System Settings, where the user can toggle the behavior between `.ask`, `.alwaysAllow`, and `.alwaysDeny`.

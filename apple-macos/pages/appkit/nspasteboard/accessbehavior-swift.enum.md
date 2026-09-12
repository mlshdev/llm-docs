> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/accessbehavior-swift.enum](https://developer.apple.com/documentation/appkit/nspasteboard/accessbehavior-swift.enum)

# NSPasteboard.AccessBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A value indicating pasteboard access behavior.

## Declaration

```swift
enum AccessBehavior
```

## Topics

### Working with defined behaviors

- [NSPasteboard.AccessBehavior.alwaysAllow](accessbehavior-swift.enum/alwaysallow.md): The system will automatically allow all pasteboard access, without notifying the user. The app is listed in the corresponding System Settings pane.
- [NSPasteboard.AccessBehavior.alwaysDeny](accessbehavior-swift.enum/alwaysdeny.md): The system will automatically deny all pasteboard access, without notifying the user. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboard.AccessBehavior.ask](accessbehavior-swift.enum/ask.md): The system will notify the user and ask for permission before granting pasteboard access. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboard.AccessBehavior.default](accessbehavior-swift.enum/default.md): The default behavior for the General pasteboard is to ask upon programmatic access. All other pasteboards default to always allow access. If an app has never triggered a pasteboard access alert, its General pasteboard will report `.default` behavior. Such an app is not shown in the corresponding System Settings pane. Once programmatic pasteboard access triggers the first pasteboard access alert, the state automatically changes to `.ask`. At this point the app starts being shown in System Settings, where the user can toggle the behavior between `.ask`, `.alwaysAllow`, and `.alwaysDeny`.

### Initializers

- [init(rawValue:)](accessbehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining pasteboard access

- [accessBehavior](accessbehavior-9k4t4.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [accessBehavior](accessbehavior-86972.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.

# NSPasteboardAccessBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

A value indicating pasteboard access behavior.

## Declaration

```objectivec
enum NSPasteboardAccessBehavior : NSInteger;
```

## Topics

### Working with defined behaviors

- [NSPasteboardAccessBehaviorAlwaysAllow](accessbehavior-swift.enum/alwaysallow.md): The system will automatically allow all pasteboard access, without notifying the user. The app is listed in the corresponding System Settings pane.
- [NSPasteboardAccessBehaviorAlwaysDeny](accessbehavior-swift.enum/alwaysdeny.md): The system will automatically deny all pasteboard access, without notifying the user. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboardAccessBehaviorAsk](accessbehavior-swift.enum/ask.md): The system will notify the user and ask for permission before granting pasteboard access. However, access that is both user originated and paste related will always be allowed, and will not result in a notification. The app is listed in the corresponding System Settings pane.
- [NSPasteboardAccessBehaviorDefault](accessbehavior-swift.enum/default.md): The default behavior for the General pasteboard is to ask upon programmatic access. All other pasteboards default to always allow access. If an app has never triggered a pasteboard access alert, its General pasteboard will report `.default` behavior. Such an app is not shown in the corresponding System Settings pane. Once programmatic pasteboard access triggers the first pasteboard access alert, the state automatically changes to `.ask`. At this point the app starts being shown in System Settings, where the user can toggle the behavior between `.ask`, `.alwaysAllow`, and `.alwaysDeny`.

## See Also

### Determining pasteboard access

- [accessBehavior](accessbehavior-86972.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.

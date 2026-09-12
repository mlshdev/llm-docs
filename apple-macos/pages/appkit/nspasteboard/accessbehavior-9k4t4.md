> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/accessbehavior-9k4t4](https://developer.apple.com/documentation/appkit/nspasteboard/accessbehavior-9k4t4)

# accessBehavior

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.

## Declaration

```swift
@objc dynamic var accessBehavior: NSPasteboard.AccessBehavior { get }
```

## See Also

### Determining pasteboard access

- [accessBehavior](accessbehavior-86972.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [NSPasteboard.AccessBehavior](accessbehavior-swift.enum.md): A value indicating pasteboard access behavior.

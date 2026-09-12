> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/accessbehavior-86972](https://developer.apple.com/documentation/appkit/nspasteboard/accessbehavior-86972)

# accessBehavior (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.

## Declaration

```swift
var accessBehavior: NSPasteboard.AccessBehavior { get }
```

## See Also

### Determining pasteboard access

- [accessBehavior](accessbehavior-9k4t4.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [NSPasteboard.AccessBehavior](accessbehavior-swift.enum.md): A value indicating pasteboard access behavior.

# accessBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.

## Declaration

```objectivec
@property (assign, readonly) NSPasteboardAccessBehavior accessBehavior;
```

## See Also

### Determining pasteboard access

- [NSPasteboardAccessBehavior](accessbehavior-swift.enum.md): A value indicating pasteboard access behavior.

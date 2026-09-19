> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nspasteboard/accessbehavior-9k4t4

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

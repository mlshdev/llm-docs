> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/hasactivewindowsharingsession](https://developer.apple.com/documentation/appkit/nswindow/hasactivewindowsharingsession)

# hasActiveWindowSharingSession (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

Indicates whether the receiver is the subject of an active SharePlay sharing session.

## Declaration

```swift
var hasActiveWindowSharingSession: Bool { get }
```

## See Also

### Managing Window Sharing

- [transferWindowSharing(to:completionHandler:)](transferwindowsharing%28to_completionhandler_%29.md): Attempts to move window sharing (within a SharePlay session) from this window to another window.

# hasActiveWindowSharingSession (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 13.3+

Indicates whether the receiver is the subject of an active SharePlay sharing session.

## Declaration

```objectivec
@property (readonly) BOOL hasActiveWindowSharingSession;
```

## See Also

### Managing Window Sharing

- [transferWindowSharingToWindow:completionHandler:](transferwindowsharing%28to_completionhandler_%29.md): Attempts to move window sharing (within a SharePlay session) from this window to another window.

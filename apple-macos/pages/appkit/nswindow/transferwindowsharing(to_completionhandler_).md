> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/transferwindowsharing(to:completionhandler:)](https://developer.apple.com/documentation/appkit/nswindow/transferwindowsharing(to:completionhandler:))

# transferWindowSharing(to:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.3+

Attempts to move window sharing (within a SharePlay session) from this window to another window.

## Declaration

```swift
func transferWindowSharing(to window: NSWindow, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func transferWindowSharing(to window: NSWindow) async throws
```

## Parameters

- `window`: Another window to replace this window in representing the user’s current activity.
- `completionHandler`: A completion block that is called after the request finishes.

<a id="Discussion"></a>

## Discussion

In response to this request, the user may choose to transfer sharing to the new window, or simply stop sharing the content.

## See Also

### Managing Window Sharing

- [hasActiveWindowSharingSession](hasactivewindowsharingsession.md): Indicates whether the receiver is the subject of an active SharePlay sharing session.

# transferWindowSharingToWindow:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 13.3+

Attempts to move window sharing (within a SharePlay session) from this window to another window.

## Declaration

```objectivec
- (void) transferWindowSharingToWindow:(NSWindow *) window completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `window`: Another window to replace this window in representing the user’s current activity.
- `completionHandler`: A completion block that is called after the request finishes.

<a id="Discussion"></a>

## Discussion

In response to this request, the user may choose to transfer sharing to the new window, or simply stop sharing the content.

## See Also

### Managing Window Sharing

- [hasActiveWindowSharingSession](hasactivewindowsharingsession.md): Indicates whether the receiver is the subject of an active SharePlay sharing session.

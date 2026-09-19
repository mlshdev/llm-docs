> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidchangeocclusionstate(_:)

# windowDidChangeOcclusionState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Tells the delegate that the window changed its occlusion state.

## Declaration

```swift
@MainActor optional func windowDidChangeOcclusionState(_ notification: Notification)
```

## Parameters

- `notification`: An [didChangeOcclusionStateNotification](../nswindow/didchangeocclusionstatenotification.md) notification.

# windowDidChangeOcclusionState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Tells the delegate that the window changed its occlusion state.

## Declaration

```objectivec
- (void) windowDidChangeOcclusionState:(NSNotification *) notification;
```

## Parameters

- `notification`: An [NSWindowDidChangeOcclusionStateNotification](../nswindow/didchangeocclusionstatenotification.md) notification.

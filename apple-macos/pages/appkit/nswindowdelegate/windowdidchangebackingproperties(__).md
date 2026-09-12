> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindowdelegate/windowdidchangebackingproperties(_:)](https://developer.apple.com/documentation/appkit/nswindowdelegate/windowdidchangebackingproperties(_:))

# windowDidChangeBackingProperties(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the window backing properties changed.

## Declaration

```swift
@MainActor optional func windowDidChangeBackingProperties(_ notification: Notification)
```

## Parameters

- `notification`: A notification named `NSWindowDidChangeBackingPropertiesNotification`.

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

The notification `NSWindowDidChangeBackingPropertiesNotification` is posted in macOS 10.7.3 or later when a window’s backing scale factor or its color space changes. You should watch for this notification instead of `NSWindowDidChangeScreenProfileNotification` if your app runs on a system version on which the backing properties notification is available.

Many apps won’t have the need to watch for this notification, but those that perform sophisticated color handling or manually manage their own cache of window-resolution or color-space-appropriate bitmapped images will find this notification useful as a prompt to invalidate caches or schedule other reassessment for the new resolution or color space. The notification’s `userInfo` dictionary specifies the window’s previous backing scale factor (retrieved with the key`NSBackingPropertyOldScaleFactorKey`) and color space (retrieved with the key `NSBackingPropertyOldColorSpaceKey`). You can compare these with the window’s new previous backing scale factor and color space at the time of the notification to determine which properties changed.

## See Also

### Moving Windows

- [windowWillMove(\_:)](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove(\_:)](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen(\_:)](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile(\_:)](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.

# windowDidChangeBackingProperties: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate that the window backing properties changed.

## Declaration

```objectivec
- (void) windowDidChangeBackingProperties:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named `NSWindowDidChangeBackingPropertiesNotification`.

<a id="Discussion"></a>

## Discussion

You can retrieve the `NSWindow` object in question by sending [object](https://developer.apple.com/documentation/foundation/nsnotification/object) to `notification`.

The notification `NSWindowDidChangeBackingPropertiesNotification` is posted in macOS 10.7.3 or later when a window’s backing scale factor or its color space changes. You should watch for this notification instead of `NSWindowDidChangeScreenProfileNotification` if your app runs on a system version on which the backing properties notification is available.

Many apps won’t have the need to watch for this notification, but those that perform sophisticated color handling or manually manage their own cache of window-resolution or color-space-appropriate bitmapped images will find this notification useful as a prompt to invalidate caches or schedule other reassessment for the new resolution or color space. The notification’s `userInfo` dictionary specifies the window’s previous backing scale factor (retrieved with the key`NSBackingPropertyOldScaleFactorKey`) and color space (retrieved with the key `NSBackingPropertyOldColorSpaceKey`). You can compare these with the window’s new previous backing scale factor and color space at the time of the notification to determine which properties changed.

## See Also

### Moving Windows

- [windowWillMove:](windowwillmove%28__%29.md): Tells the delegate that the window is about to move.
- [windowDidMove:](windowdidmove%28__%29.md): Tells the delegate that the window has moved.
- [windowDidChangeScreen:](windowdidchangescreen%28__%29.md): Tells the delegate that the window has changed screens.
- [windowDidChangeScreenProfile:](windowdidchangescreenprofile%28__%29.md): Tells the delegate that the window has changed screen display profiles.

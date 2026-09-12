> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/resignkey()](https://developer.apple.com/documentation/uikit/uiwindow/resignkey())

# resignKey() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the window that it’s no longer the key window.

## Declaration

```swift
func resignKey()
```

<a id="Discussion"></a>

## Discussion

Never call this method directly. The system calls this method and posts [didResignKeyNotification](didresignkeynotification.md) to let the window know when it’s no longer the key window. The default implementation of this method does nothing, but subclasses can override it and use it to perform tasks related to resigning the key window status.

In iOS 15 and later, the system calls this method when the window is no longer the key window in its scene. In iOS 14 and earlier, the system calls this method when the window is no longer the key window in the app.

## See Also

### Making windows key

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible()](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [becomeKey()](becomekey%28%29.md): Tells the window that it’s the key window.

# resignKeyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the window that it’s no longer the key window.

## Declaration

```objectivec
- (void) resignKeyWindow;
```

<a id="Discussion"></a>

## Discussion

Never call this method directly. The system calls this method and posts [UIWindowDidResignKeyNotification](didresignkeynotification.md) to let the window know when it’s no longer the key window. The default implementation of this method does nothing, but subclasses can override it and use it to perform tasks related to resigning the key window status.

In iOS 15 and later, the system calls this method when the window is no longer the key window in its scene. In iOS 14 and earlier, the system calls this method when the window is no longer the key window in the app.

## See Also

### Making windows key

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [becomeKeyWindow](becomekey%28%29.md): Tells the window that it’s the key window.

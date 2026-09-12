> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/becomekey()](https://developer.apple.com/documentation/uikit/uiwindow/becomekey())

# becomeKey() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the window that it’s the key window.

## Declaration

```swift
func becomeKey()
```

<a id="Discussion"></a>

## Discussion

Never call this method directly. The system calls this method and posts [didBecomeKeyNotification](didbecomekeynotification.md) to let the window know that it’s the key window. The default implementation of this method does nothing, but subclasses can override it and use it to perform tasks related to becoming the key window.

In iOS 15 and later, the system calls this method when the window becomes the key window in its scene. In iOS 14 and earlier, the system calls this method when the window becomes the key window in the app.

## See Also

### Making windows key

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible()](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [resignKey()](resignkey%28%29.md): Tells the window that it’s no longer the key window.

# becomeKeyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the window that it’s the key window.

## Declaration

```objectivec
- (void) becomeKeyWindow;
```

<a id="Discussion"></a>

## Discussion

Never call this method directly. The system calls this method and posts [UIWindowDidBecomeKeyNotification](didbecomekeynotification.md) to let the window know that it’s the key window. The default implementation of this method does nothing, but subclasses can override it and use it to perform tasks related to becoming the key window.

In iOS 15 and later, the system calls this method when the window becomes the key window in its scene. In iOS 14 and earlier, the system calls this method when the window becomes the key window in the app.

## See Also

### Making windows key

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [resignKeyWindow](resignkey%28%29.md): Tells the window that it’s no longer the key window.

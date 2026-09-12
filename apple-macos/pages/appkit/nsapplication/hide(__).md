> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/hide(_:)](https://developer.apple.com/documentation/appkit/nsapplication/hide(_:))

# hide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Hides all the receiver’s windows, and the next app in line is activated.

## Declaration

```swift
func hide(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

This method is usually invoked when the user chooses Hide in the app’s main menu. When this method begins, it posts an [willHideNotification](willhidenotification.md) to the default notification center. When it completes successfully, it posts an [didHideNotification](didhidenotification.md).

## See Also

### Related Documentation

- [miniaturizeAll(\_:)](miniaturizeall%28__%29.md): Miniaturizes all the receiver’s windows.
- [applicationDidHide(\_:)](../nsapplicationdelegate/applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillHide(\_:)](../nsapplicationdelegate/applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.

### Hiding Windows

- [isHidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [unhide(\_:)](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation()](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

# hide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Hides all the receiver’s windows, and the next app in line is activated.

## Declaration

```objectivec
- (void) hide:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

This method is usually invoked when the user chooses Hide in the app’s main menu. When this method begins, it posts an [NSApplicationWillHideNotification](willhidenotification.md) to the default notification center. When it completes successfully, it posts an [NSApplicationDidHideNotification](didhidenotification.md).

## See Also

### Related Documentation

- [miniaturizeAll:](miniaturizeall%28__%29.md): Miniaturizes all the receiver’s windows.
- [applicationDidHide:](../nsapplicationdelegate/applicationdidhide%28__%29.md): Tells the delegate that the app is now hidden.
- [applicationWillHide:](../nsapplicationdelegate/applicationwillhide%28__%29.md): Tells the delegate that the app is about to be hidden.

### Hiding Windows

- [hidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [unhide:](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.
- [unhideWithoutActivation](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

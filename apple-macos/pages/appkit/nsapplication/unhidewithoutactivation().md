> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/unhidewithoutactivation()](https://developer.apple.com/documentation/appkit/nsapplication/unhidewithoutactivation())

# unhideWithoutActivation() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Restores hidden windows without activating their owner (the receiver).

## Declaration

```swift
func unhideWithoutActivation()
```

<a id="Discussion"></a>

## Discussion

When this method begins, it posts an [willUnhideNotification](willunhidenotification.md) to the default notification center. If it completes successfully, it posts an [didUnhideNotification](didunhidenotification.md).

## See Also

### Related Documentation

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [applicationDidUnhide(\_:)](../nsapplicationdelegate/applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.
- [applicationWillUnhide(\_:)](../nsapplicationdelegate/applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.

### Hiding Windows

- [isHidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide(\_:)](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide(\_:)](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

# unhideWithoutActivation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Restores hidden windows without activating their owner (the receiver).

## Declaration

```objectivec
- (void) unhideWithoutActivation;
```

<a id="Discussion"></a>

## Discussion

When this method begins, it posts an [NSApplicationWillUnhideNotification](willunhidenotification.md) to the default notification center. If it completes successfully, it posts an [NSApplicationDidUnhideNotification](didunhidenotification.md).

## See Also

### Related Documentation

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.
- [applicationDidUnhide:](../nsapplicationdelegate/applicationdidunhide%28__%29.md): Tells the delegate that the app is now visible.
- [applicationWillUnhide:](../nsapplicationdelegate/applicationwillunhide%28__%29.md): Tells the delegate that the app is about to become visible.

### Hiding Windows

- [hidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide:](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhide:](unhide%28__%29.md): Restores hidden windows to the screen and makes the receiver active.

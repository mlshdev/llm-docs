> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/unhide(_:)](https://developer.apple.com/documentation/appkit/nsapplication/unhide(_:))

# unhide(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Restores hidden windows to the screen and makes the receiver active.

## Declaration

```swift
func unhide(_ sender: Any?)
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

Invokes [unhideWithoutActivation()](unhidewithoutactivation%28%29.md).

## See Also

### Related Documentation

- [activate(ignoringOtherApps:)](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Hiding Windows

- [isHidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide(\_:)](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhideWithoutActivation()](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

# unhide: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Restores hidden windows to the screen and makes the receiver active.

## Declaration

```objectivec
- (void) unhide:(id) sender;
```

## Parameters

- `sender`: The object that sent the command.

<a id="Discussion"></a>

## Discussion

Invokes [unhideWithoutActivation](unhidewithoutactivation%28%29.md).

## See Also

### Related Documentation

- [activateIgnoringOtherApps:](activate%28ignoringotherapps_%29.md): Deprecated. Makes the receiver the active app.

### Hiding Windows

- [hidden](ishidden.md): A Boolean value indicating whether the app is hidden.
- [hide:](hide%28__%29.md): Hides all the receiver’s windows, and the next app in line is activated.
- [unhideWithoutActivation](unhidewithoutactivation%28%29.md): Restores hidden windows without activating their owner (the receiver).

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scwindow/isonscreen

# isOnScreen (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A Boolean value that indicates whether the window is on screen.

## Declaration

```swift
var isOnScreen: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value represents the macOS window server’s onscreen status of the window.

## See Also

### Determining visibility

- [isActive](isactive.md): A Boolean value that indicates if the window is currently streaming.

# onScreen (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

A Boolean value that indicates whether the window is on screen.

## Declaration

```objectivec
@property (readonly, getter=isOnScreen) BOOL onScreen;
```

<a id="discussion"></a>

## Discussion

This value represents the macOS window server’s onscreen status of the window.

## See Also

### Determining visibility

- [active](isactive.md): A Boolean value that indicates if the window is currently streaming.

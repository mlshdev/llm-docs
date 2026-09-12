> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scwindow/isactive](https://developer.apple.com/documentation/screencapturekit/scwindow/isactive)

# isActive (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 13.1+

A Boolean value that indicates if the window is currently streaming.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="discussion"></a>

## Discussion

When this value is `true`, the window is currently streaming, even if offscreen.

## See Also

### Determining visibility

- [isOnScreen](isonscreen.md): A Boolean value that indicates whether the window is on screen.

# active (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 13.1+

A Boolean value that indicates if the window is currently streaming.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="discussion"></a>

## Discussion

When this value is `true`, the window is currently streaming, even if offscreen.

## See Also

### Determining visibility

- [onScreen](isonscreen.md): A Boolean value that indicates whether the window is on screen.

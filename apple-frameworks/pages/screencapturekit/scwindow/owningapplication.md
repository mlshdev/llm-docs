> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scwindow/owningapplication](https://developer.apple.com/documentation/screencapturekit/scwindow/owningapplication)

# owningApplication (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The app that owns the window.

## Declaration

```swift
var owningApplication: SCRunningApplication? { get }
```

## See Also

### Identifying windows

- [windowID](windowid.md): The Core Graphics window identifier.
- [title](title.md): The string that displays in a window’s title bar.
- [windowLayer](windowlayer.md): The layer of the window relative to other windows.

# owningApplication (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The app that owns the window.

## Declaration

```objectivec
@property (readonly, nullable) SCRunningApplication * owningApplication;
```

## See Also

### Identifying windows

- [windowID](windowid.md): The Core Graphics window identifier.
- [title](title.md): The string that displays in a window’s title bar.
- [windowLayer](windowlayer.md): The layer of the window relative to other windows.

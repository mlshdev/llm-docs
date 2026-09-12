> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scwindow/windowlayer](https://developer.apple.com/documentation/screencapturekit/scwindow/windowlayer)

# windowLayer (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The layer of the window relative to other windows.

## Declaration

```swift
var windowLayer: Int { get }
```

## See Also

### Identifying windows

- [windowID](windowid.md): The Core Graphics window identifier.
- [title](title.md): The string that displays in a window’s title bar.
- [owningApplication](owningapplication.md): The app that owns the window.

# windowLayer (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 12.3+

The layer of the window relative to other windows.

## Declaration

```objectivec
@property (readonly) NSInteger windowLayer;
```

## See Also

### Identifying windows

- [windowID](windowid.md): The Core Graphics window identifier.
- [title](title.md): The string that displays in a window’s title bar.
- [owningApplication](owningapplication.md): The app that owns the window.

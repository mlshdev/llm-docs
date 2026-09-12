> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/deepestscreen](https://developer.apple.com/documentation/appkit/nswindow/deepestscreen)

# deepestScreen (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The deepest screen the window is on (it may be split over several screens).

## Declaration

```swift
var deepestScreen: NSScreen? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the window is offscreen.

## See Also

### Accessing Screen Information

- [screen](screen.md): The screen the window is on.
- [displaysWhenScreenProfileChanges](displayswhenscreenprofilechanges.md): A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

# deepestScreen (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The deepest screen the window is on (it may be split over several screens).

## Declaration

```objectivec
@property (strong, readonly, nullable) NSScreen * deepestScreen;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` when the window is offscreen.

## See Also

### Accessing Screen Information

- [screen](screen.md): The screen the window is on.
- [displaysWhenScreenProfileChanges](displayswhenscreenprofilechanges.md): A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

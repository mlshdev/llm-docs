> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/displayswhenscreenprofilechanges](https://developer.apple.com/documentation/appkit/nswindow/displayswhenscreenprofilechanges)

# displaysWhenScreenProfileChanges (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

## Declaration

```swift
var displaysWhenScreenProfileChanges: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window context should be updated when the ColorSync profile of the current screen changes or when a majority of the window is moved to a different screen whose profile is different than the previous screen; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

After the window context is updated, the window is told to display itself. If you need to update offscreen caches for the window, you should register to receive the [didChangeScreenProfileNotification](didchangescreenprofilenotification.md) notification.

## See Also

### Accessing Screen Information

- [screen](screen.md): The screen the window is on.
- [deepestScreen](deepestscreen.md): The deepest screen the window is on (it may be split over several screens).

# displaysWhenScreenProfileChanges (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

## Declaration

```objectivec
@property BOOL displaysWhenScreenProfileChanges;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window context should be updated when the ColorSync profile of the current screen changes or when a majority of the window is moved to a different screen whose profile is different than the previous screen; otherwise, [false](https://developer.apple.com/documentation/swift/false). The default value is [false](https://developer.apple.com/documentation/swift/false).

After the window context is updated, the window is told to display itself. If you need to update offscreen caches for the window, you should register to receive the [NSWindowDidChangeScreenProfileNotification](didchangescreenprofilenotification.md) notification.

## See Also

### Accessing Screen Information

- [screen](screen.md): The screen the window is on.
- [deepestScreen](deepestscreen.md): The deepest screen the window is on (it may be split over several screens).

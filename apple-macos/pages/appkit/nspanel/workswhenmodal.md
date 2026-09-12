> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspanel/workswhenmodal](https://developer.apple.com/documentation/appkit/nspanel/workswhenmodal)

# worksWhenModal (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.

## Declaration

```swift
var worksWhenModal: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the panel receives keyboard and mouse events even when some other window is being run modally; when the value is [false](https://developer.apple.com/documentation/swift/false), the panel is prevented from receiving events while a modal loop or session is running. By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), indicating a panel’s ineligibility for events during a modal loop or session. See [How Modal Windows Work](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Concepts/UsingModalWindows.html#//apple_ref/doc/uid/20000223) for more information on modal windows and panels.

## See Also

### Related Documentation

- [runModalSession(\_:)](../nsapplication/runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSession(for:)](../nsapplication/beginmodalsession%28for_%29.md).
- [runModal(for:)](../nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Configuring Panels

- [isFloatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [becomesKeyOnlyIfNeeded](becomeskeyonlyifneeded.md): A Boolean value that indicates whether the receiver becomes the key window only when needed.

# worksWhenModal (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the panel receives keyboard and mouse events even when some other window is being run modally.

## Declaration

```objectivec
@property BOOL worksWhenModal;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the panel receives keyboard and mouse events even when some other window is being run modally; when the value is [false](https://developer.apple.com/documentation/swift/false), the panel is prevented from receiving events while a modal loop or session is running. By default, the value of this property is [false](https://developer.apple.com/documentation/swift/false), indicating a panel’s ineligibility for events during a modal loop or session. See [How Modal Windows Work](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/WinPanel/Concepts/UsingModalWindows.html#//apple_ref/doc/uid/20000223) for more information on modal windows and panels.

## See Also

### Related Documentation

- [runModalSession:](../nsapplication/runmodalsession%28__%29.md): Runs a given modal session, as defined in a previous invocation of [beginModalSessionForWindow:](../nsapplication/beginmodalsession%28for_%29.md).
- [runModalForWindow:](../nsapplication/runmodal%28for_%29.md): Starts a modal event loop for the specified window.

### Configuring Panels

- [floatingPanel](isfloatingpanel.md): A Boolean value that indicates whether the receiver is a floating panel.
- [becomesKeyOnlyIfNeeded](becomeskeyonlyifneeded.md): A Boolean value that indicates whether the receiver becomes the key window only when needed.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmedialibrarybrowsercontroller/isvisible](https://developer.apple.com/documentation/appkit/nsmedialibrarybrowsercontroller/isvisible)

# isVisible (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the Media Library Browser panel is visible.

## Declaration

```swift
var isVisible: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to show the Media Library Browser or [false](https://developer.apple.com/documentation/swift/false) to hide it.

This value can be read to determine the current visibility status of the panel.

## See Also

### Displaying the Media Library Browser Panel

- [frame](frame.md): The frame, in global coordinates, used to display the Media Library Browser panel.
- [togglePanel(\_:)](togglepanel%28__%29.md): Toggles the visibility of the Media Library Browser.

# visible (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

A Boolean value that determines whether the Media Library Browser panel is visible.

## Declaration

```objectivec
@property (getter=isVisible) BOOL visible;
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to show the Media Library Browser or [false](https://developer.apple.com/documentation/swift/false) to hide it.

This value can be read to determine the current visibility status of the panel.

## See Also

### Displaying the Media Library Browser Panel

- [frame](frame.md): The frame, in global coordinates, used to display the Media Library Browser panel.
- [togglePanel:](togglepanel%28__%29.md): Toggles the visibility of the Media Library Browser.

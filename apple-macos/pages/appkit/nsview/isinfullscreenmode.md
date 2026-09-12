> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isinfullscreenmode](https://developer.apple.com/documentation/appkit/nsview/isinfullscreenmode)

# isInFullScreenMode (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value indicating whether the view is in full screen mode.

## Declaration

```swift
var isInFullScreenMode: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view is in full screen mode or [false](https://developer.apple.com/documentation/swift/false) when it is not.

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [NSView.FullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md).

# inFullScreenMode (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

A Boolean value indicating whether the view is in full screen mode.

## Declaration

```objectivec
@property (readonly, getter=isInFullScreenMode) BOOL inFullScreenMode;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the view is in full screen mode or [false](https://developer.apple.com/documentation/swift/false) when it is not.

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [NSViewFullScreenModeOptionKey](fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md).

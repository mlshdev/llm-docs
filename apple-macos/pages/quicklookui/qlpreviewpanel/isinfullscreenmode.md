> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/isinfullscreenmode](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/isinfullscreenmode)

# isInFullScreenMode (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that indicates whether the panel is in full screen mode.

## Declaration

```swift
var isInFullScreenMode: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the panel is currently open and in full screen mode; otherwise it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Full Screen Mode

- [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.

# inFullScreenMode (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The property that indicates whether the panel is in full screen mode.

## Declaration

```objectivec
@property (readonly, getter=isInFullScreenMode) BOOL inFullScreenMode;
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the panel is currently open and in full screen mode; otherwise it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Managing Full Screen Mode

- [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md): Instructs the panel to enter full screen mode.
- [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md): Instructs the panel to exit full screen mode.

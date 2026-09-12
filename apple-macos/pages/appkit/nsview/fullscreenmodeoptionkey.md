> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/fullscreenmodeoptionkey](https://developer.apple.com/documentation/appkit/nsview/fullscreenmodeoptionkey)

# NSView.FullScreenModeOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants are keys that you can use in the options dictionary in [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md).

## Declaration

```swift
struct FullScreenModeOptionKey
```

## Topics

### Type Properties

- [fullScreenModeAllScreens](fullscreenmodeoptionkey/fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [fullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md): Key whose corresponding value specifies the application presentation options.
- [fullScreenModeSetting](fullscreenmodeoptionkey/fullscreenmodesetting.md): Key whose corresponding value specifies the full screen mode setting.
- [fullScreenModeWindowLevel](fullscreenmodeoptionkey/fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

### Initializers

- [init(rawValue:)](fullscreenmodeoptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode(\_:withOptions:)](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenMode(options:)](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [isInFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.

# NSViewFullScreenModeOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

These constants are keys that you can use in the options dictionary in [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md).

## Declaration

```objectivec
typedef NSString * NSViewFullScreenModeOptionKey;
```

## Topics

### Type Properties

- [NSFullScreenModeAllScreens](fullscreenmodeoptionkey/fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions.md): Key whose corresponding value specifies the application presentation options.
- [NSFullScreenModeSetting](fullscreenmodeoptionkey/fullscreenmodesetting.md): Key whose corresponding value specifies the full screen mode setting.
- [NSFullScreenModeWindowLevel](fullscreenmodeoptionkey/fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

## See Also

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode:withOptions:](enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenModeWithOptions:](exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [inFullScreenMode](isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.

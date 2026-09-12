> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions](https://developer.apple.com/documentation/appkit/nsview/fullscreenmodeoptionkey/fullscreenmodeapplicationpresentationoptions)

# fullScreenModeApplicationPresentationOptions (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Key whose corresponding value specifies the application presentation options.

## Declaration

```swift
static let fullScreenModeApplicationPresentationOptions: NSView.FullScreenModeOptionKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing an unsigned integer value of [NSApplication.PresentationOptions](../../nsapplication/presentationoptions-swift.struct.md). Those options can be combined using the C bit-wise `OR` operator before created the `NSNumber` instance. See [NSApplication](../../nsapplication.md) constants section [NSApplication.PresentationOptions](../../nsapplication/presentationoptions-swift.struct.md) for more information on these options.

## See Also

### Type Properties

- [fullScreenModeAllScreens](fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [fullScreenModeSetting](fullscreenmodesetting.md): Key whose corresponding value specifies the full screen mode setting.
- [fullScreenModeWindowLevel](fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

# NSFullScreenModeApplicationPresentationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Key whose corresponding value specifies the application presentation options.

## Declaration

```objectivec
extern NSViewFullScreenModeOptionKey const NSFullScreenModeApplicationPresentationOptions;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing an unsigned integer value of [NSApplicationPresentationOptions](../../nsapplication/presentationoptions-swift.struct.md). Those options can be combined using the C bit-wise `OR` operator before created the `NSNumber` instance. See [NSApplication](../../nsapplication.md) constants section [NSApplicationPresentationOptions](../../nsapplication/presentationoptions-swift.struct.md) for more information on these options.

## See Also

### Type Properties

- [NSFullScreenModeAllScreens](fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [NSFullScreenModeSetting](fullscreenmodesetting.md): Key whose corresponding value specifies the full screen mode setting.
- [NSFullScreenModeWindowLevel](fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

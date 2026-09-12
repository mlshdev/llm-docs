> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/fullscreenmodeoptionkey/fullscreenmodesetting](https://developer.apple.com/documentation/appkit/nsview/fullscreenmodeoptionkey/fullscreenmodesetting)

# fullScreenModeSetting (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.5+

Key whose corresponding value specifies the full screen mode setting.

## Declaration

```swift
static let fullScreenModeSetting: NSView.FullScreenModeOptionKey
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) that contains keys specified in Display Mode Standard Properties and Display Mode Optional Properties in [Quartz Display Services](https://developer.apple.com/documentation/coregraphics/quartz-display-services).

When the [fullScreenModeApplicationPresentationOptions](fullscreenmodeapplicationpresentationoptions.md) is specified in the options dictionary specifying this option as well will cause an exception.

## See Also

### Type Properties

- [fullScreenModeAllScreens](fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [fullScreenModeApplicationPresentationOptions](fullscreenmodeapplicationpresentationoptions.md): Key whose corresponding value specifies the application presentation options.
- [fullScreenModeWindowLevel](fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

# NSFullScreenModeSetting (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.5+

Key whose corresponding value specifies the full screen mode setting.

## Declaration

```objectivec
extern NSViewFullScreenModeOptionKey const NSFullScreenModeSetting;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an instance of [NSDictionary](https://developer.apple.com/documentation/foundation/nsdictionary) that contains keys specified in Display Mode Standard Properties and Display Mode Optional Properties in [Quartz Display Services](https://developer.apple.com/documentation/coregraphics/quartz-display-services).

When the [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeapplicationpresentationoptions.md) is specified in the options dictionary specifying this option as well will cause an exception.

## See Also

### Type Properties

- [NSFullScreenModeAllScreens](fullscreenmodeallscreens.md): Key whose corresponding value specifies whether the view should take over all screens.
- [NSFullScreenModeApplicationPresentationOptions](fullscreenmodeapplicationpresentationoptions.md): Key whose corresponding value specifies the application presentation options.
- [NSFullScreenModeWindowLevel](fullscreenmodewindowlevel.md): Key whose corresponding value specifies the screen mode window level.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/effectiveappearance](https://developer.apple.com/documentation/appkit/nsapplication/effectiveappearance)

# effectiveAppearance (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The appearance that AppKit uses to draw the app’s interface.

## Declaration

```swift
var effectiveAppearance: NSAppearance { get }
```

<a id="Discussion"></a>

## Discussion

This property always contains an [NSAppearance](../nsappearance.md) object representing the appearance to use during drawing. If you don’t explicitly assign a value to the [appearance](appearance.md) property, the app inherits the system’s effective appearance.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplication.PresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

# effectiveAppearance (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The appearance that AppKit uses to draw the app’s interface.

## Declaration

```objectivec
@property (strong, readonly) NSAppearance * effectiveAppearance;
```

<a id="Discussion"></a>

## Discussion

This property always contains an [NSAppearance](../nsappearance.md) object representing the appearance to use during drawing. If you don’t explicitly assign a value to the [appearance](appearance.md) property, the app inherits the system’s effective appearance.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplicationPresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

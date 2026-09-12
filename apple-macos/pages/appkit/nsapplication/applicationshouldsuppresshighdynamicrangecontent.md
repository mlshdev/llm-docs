> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/applicationshouldsuppresshighdynamicrangecontent](https://developer.apple.com/documentation/appkit/nsapplication/applicationshouldsuppresshighdynamicrangecontent)

# applicationShouldSuppressHighDynamicRangeContent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

## Declaration

```swift
var applicationShouldSuppressHighDynamicRangeContent: Bool { get }
```

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplication.PresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.

# applicationShouldSuppressHighDynamicRangeContent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

## Declaration

```objectivec
@property (readonly) BOOL applicationShouldSuppressHighDynamicRangeContent;
```

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplicationPresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.

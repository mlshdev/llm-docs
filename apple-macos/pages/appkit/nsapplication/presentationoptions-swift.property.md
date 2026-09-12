> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/presentationoptions-swift.property](https://developer.apple.com/documentation/appkit/nsapplication/presentationoptions-swift.property)

# presentationOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The presentation options that should be in effect for the system when this app is active.

## Declaration

```swift
var presentationOptions: NSApplication.PresentationOptions { get set }
```

<a id="Discussion"></a>

## Discussion

This value contains a bitwise OR of the constants listed in [NSApplication.PresentationOptions](presentationoptions-swift.struct.md). Trying to set the property to an invalid combination of option flags raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception. See the constants for a description of the valid combinations.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [NSApplication.PresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

# presentationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The presentation options that should be in effect for the system when this app is active.

## Declaration

```objectivec
@property NSApplicationPresentationOptions presentationOptions;
```

<a id="Discussion"></a>

## Discussion

This value contains a bitwise OR of the constants listed in [NSApplicationPresentationOptions](presentationoptions-swift.struct.md). Trying to set the property to an invalid combination of option flags raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception. See the constants for a description of the valid combinations.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [currentSystemPresentationOptions](currentsystempresentationoptions.md): The set of app presentation options that are currently in effect for the system.
- [NSApplicationPresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/currentsystempresentationoptions](https://developer.apple.com/documentation/appkit/nsapplication/currentsystempresentationoptions)

# currentSystemPresentationOptions (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The set of app presentation options that are currently in effect for the system.

## Declaration

```swift
var currentSystemPresentationOptions: NSApplication.PresentationOptions { get }
```

<a id="return-value"></a>

## Return Value

The presentation options. The constants are listed in [NSApplication.PresentationOptions](presentationoptions-swift.struct.md) and can combined using a C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

This property contains the presentation options that have been put into effect by the currently active app. You can use key-value observing on this property to receive notifications when:

- The client is the active app and makes a change itself using either the [presentationOptions](presentationoptions-swift.property.md) property or the `SetSystemUIMode` function.
- Another app is active and makes presentation changes of its own.
- Another app becomes active and causes the active set of presentation options to change.

Key-value observing notifications aren’t sent when one of the above conditions occur, but has the same set of presentation options as the previously active app.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplication.PresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

# currentSystemPresentationOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The set of app presentation options that are currently in effect for the system.

## Declaration

```objectivec
@property (readonly) NSApplicationPresentationOptions currentSystemPresentationOptions;
```

<a id="return-value"></a>

## Return Value

The presentation options. The constants are listed in [NSApplicationPresentationOptions](presentationoptions-swift.struct.md) and can combined using a C bitwise OR operator.

<a id="Discussion"></a>

## Discussion

This property contains the presentation options that have been put into effect by the currently active app. You can use key-value observing on this property to receive notifications when:

- The client is the active app and makes a change itself using either the [presentationOptions](presentationoptions-swift.property.md) property or the `SetSystemUIMode` function.
- Another app is active and makes presentation changes of its own.
- Another app becomes active and causes the active set of presentation options to change.

Key-value observing notifications aren’t sent when one of the above conditions occur, but has the same set of presentation options as the previously active app.

## See Also

### Managing the app’s appearance

- [appearance](appearance.md): The appearance associated with the app’s windows.
- [effectiveAppearance](effectiveappearance.md): The appearance that AppKit uses to draw the app’s interface.
- [presentationOptions](presentationoptions-swift.property.md): The presentation options that should be in effect for the system when this app is active.
- [NSApplicationPresentationOptions](presentationoptions-swift.struct.md): Constants that control the presentation of the app, typically for fullscreen apps such as games or kiosks.
- [applicationShouldSuppressHighDynamicRangeContent](applicationshouldsuppresshighdynamicrangecontent.md): A boolean value indicating whether your application should suppress HDR content based on established policy. Built-in AppKit components such as NSImageView will automatically behave correctly with HDR content. You should use this value in conjunction with notifications (`NSApplicationShouldBeginSuppressingHighDynamicRangeContentNotification` and `NSApplicationShouldEndSuppressingHighDynamicRangeContentNotification`) to suppress HDR content in your application when signaled to do so.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction/init(disabledmode:alerttitle:alertmessage:alertdismissbuttontitle:alertrecoverysuggestionbuttontitle:alertrecoverysuggestionbuttonlaunch:)](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction/init(disabledmode:alerttitle:alertmessage:alertdismissbuttontitle:alertrecoverysuggestionbuttontitle:alertrecoverysuggestionbuttonlaunch:))

# init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunch:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a disabled mode that displays an alert with a recovery suggestion.

## Declaration

```swift
init(disabledMode: UIActivityCollaborationMode, alertTitle: String, alertMessage: String, alertDismissButtonTitle: String, alertRecoverySuggestionButtonTitle: String, alertRecoverySuggestionButtonLaunch alertRecoverySuggestionButtonLaunchURL: URL)
```

## See Also

### Creating a disabled mode

- [init(disabledMode:)](init%28disabledmode_%29.md): Copies the provided disabled mode.
- [init(disabledMode:alertTitle:alertMessage:)](init%28disabledmode_alerttitle_alertmessage_%29.md): Creates a disabled mode that displays an alert when someone tries to select that mode.
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:)](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.

# initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a disabled mode that displays an alert with a recovery suggestion.

## Declaration

```objectivec
- (instancetype) initWithDisabledMode:(UIActivityCollaborationMode) disabledMode alertTitle:(NSString *) alertTitle alertMessage:(NSString *) alertMessage alertDismissButtonTitle:(NSString *) alertDismissButtonTitle alertRecoverySuggestionButtonTitle:(NSString *) alertRecoverySuggestionButtonTitle alertRecoverySuggestionButtonLaunchURL:(NSURL *) alertRecoverySuggestionButtonLaunchURL;
```

## See Also

### Creating a disabled mode

- [initWithDisabledMode:](init%28disabledmode_%29.md): Copies the provided disabled mode.
- [initWithDisabledMode:alertTitle:alertMessage:](init%28disabledmode_alerttitle_alertmessage_%29.md): Creates a disabled mode that displays an alert when someone tries to select that mode.
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.

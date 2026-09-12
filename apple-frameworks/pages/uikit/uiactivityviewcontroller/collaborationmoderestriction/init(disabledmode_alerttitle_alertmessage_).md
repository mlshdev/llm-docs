> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction/init(disabledmode:alerttitle:alertmessage:)](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller/collaborationmoderestriction/init(disabledmode:alerttitle:alertmessage:))

# init(disabledMode:alertTitle:alertMessage:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a disabled mode that displays an alert when someone tries to select that mode.

## Declaration

```swift
init(disabledMode: UIActivityCollaborationMode, alertTitle: String, alertMessage: String)
```

## See Also

### Creating a disabled mode

- [init(disabledMode:)](init%28disabledmode_%29.md): Copies the provided disabled mode.
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:)](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.
- [init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunch:)](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md): Creates a disabled mode that displays an alert with a recovery suggestion.

# initWithDisabledMode:alertTitle:alertMessage: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Creates a disabled mode that displays an alert when someone tries to select that mode.

## Declaration

```objectivec
- (instancetype) initWithDisabledMode:(UIActivityCollaborationMode) disabledMode alertTitle:(NSString *) alertTitle alertMessage:(NSString *) alertMessage;
```

## See Also

### Creating a disabled mode

- [initWithDisabledMode:](init%28disabledmode_%29.md): Copies the provided disabled mode.
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_%29.md): Creates a disabled mode that displays an alert with a customized dismiss button.
- [initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle:alertRecoverySuggestionButtonTitle:alertRecoverySuggestionButtonLaunchURL:](init%28disabledmode_alerttitle_alertmessage_alertdismissbuttontitle_alertrecoverysuggestionbuttontitle_alertrecoverysuggestionbuttonlaunch_%29.md): Creates a disabled mode that displays an alert with a recovery suggestion.

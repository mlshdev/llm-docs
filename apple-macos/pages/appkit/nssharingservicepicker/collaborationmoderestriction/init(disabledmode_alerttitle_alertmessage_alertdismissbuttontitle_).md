> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nssharingservicepicker/collaborationmoderestriction/init(disabledmode:alerttitle:alertmessage:alertdismissbuttontitle:)

# init(disabledMode:alertTitle:alertMessage:alertDismissButtonTitle:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 15.0+

## Declaration

```swift
init(disabledMode: NSSharingCollaborationMode, alertTitle: String, alertMessage: String, alertDismissButtonTitle: String)
```

## Parameters

- `disabledMode`: The disabled type of sharing
- `alertTitle`: The alert title
- `alertMessage`: The alert message
- `alertDismissButtonTitle`: The label on the default alert button

# initWithDisabledMode:alertTitle:alertMessage:alertDismissButtonTitle: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (instancetype) initWithDisabledMode:(NSSharingCollaborationMode) disabledMode alertTitle:(NSString *) alertTitle alertMessage:(NSString *) alertMessage alertDismissButtonTitle:(NSString *) alertDismissButtonTitle;
```

## Parameters

- `disabledMode`: The disabled type of sharing
- `alertTitle`: The alert title
- `alertMessage`: The alert message
- `alertDismissButtonTitle`: The label on the default alert button

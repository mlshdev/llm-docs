> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccesserror](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccesserror)

# UIAccessibility.GuidedAccessError

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Guided Access error.

## Declaration

```swift
struct GuidedAccessError
```

## Topics

### Accessing error codes

- [permissionDenied](guidedaccesserror/permissiondenied.md): An error that indicates the app isn’t authorized to perform the requested action.
- [failed](guidedaccesserror/failed.md): An error that indicates a failure for an unspecified reason.
- [UIAccessibility.GuidedAccessError.Code](guidedaccesserror/code.md): Error codes for Guided Access.

### Getting error information

- [errorDomain](guidedaccesserror/errordomain.md): The Guided Access error domain.

## Relationships

### Conforms To

- [CustomNSError](../../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Guided Access

- [isGuidedAccessEnabled](isguidedaccessenabled.md): A Boolean value that indicates whether the Guided Access setting is in an enabled state.
- [guidedAccessStatusDidChangeNotification](guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [configureForGuidedAccess(features:enabled:completionHandler:)](configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [guidedAccessRestrictionState(forIdentifier:)](guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.
- [UIAccessibility.GuidedAccessRestrictionState](guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.
- [guidedAccessErrorDomain](guidedaccesserrordomain.md): A string that identifies the Guided Access error domain.

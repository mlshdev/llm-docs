> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccesserrordomain](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccesserrordomain)

# guidedAccessErrorDomain (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · tvOS 12.2+ · visionOS 1.0+

A string that identifies the Guided Access error domain.

## Declaration

```swift
nonisolated static let guidedAccessErrorDomain: String
```

## See Also

### Guided Access

- [isGuidedAccessEnabled](isguidedaccessenabled.md): A Boolean value that indicates whether the Guided Access setting is in an enabled state.
- [guidedAccessStatusDidChangeNotification](guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [configureForGuidedAccess(features:enabled:completionHandler:)](configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [guidedAccessRestrictionState(forIdentifier:)](guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.
- [UIAccessibility.GuidedAccessRestrictionState](guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.
- [UIAccessibility.GuidedAccessError](guidedaccesserror.md): A Guided Access error.

# UIGuidedAccessErrorDomain (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · tvOS 12.2+ · visionOS 1.0+

A string that identifies the Guided Access error domain.

## Declaration

```objectivec
extern NSErrorDomain const UIGuidedAccessErrorDomain;
```

## See Also

### Guided Access

- [UIAccessibilityIsGuidedAccessEnabled](isguidedaccessenabled.md): A Boolean value that indicates whether the Guided Access setting is in an enabled state.
- [UIAccessibilityGuidedAccessStatusDidChangeNotification](guidedaccessstatusdidchangenotification.md): A notification that indicates when a Guided Access session starts or ends.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [UIGuidedAccessConfigureAccessibilityFeatures](configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [UIGuidedAccessRestrictionStateForIdentifier](guidedaccessrestrictionstate%28foridentifier_%29.md): Returns the restriction state for the specified guided access restriction.
- [UIGuidedAccessRestrictionState](guidedaccessrestrictionstate.md): Constants that describe the state of a restriction, either allow or deny.

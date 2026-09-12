> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/configureforguidedaccess(features:enabled:completionhandler:)](https://developer.apple.com/documentation/uikit/uiaccessibility/configureforguidedaccess(features:enabled:completionhandler:))

# configureForGuidedAccess(features:enabled:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Enables or disables the specified accessibility features while using Guided Access.

## Declaration

```swift
@MainActor static func configureForGuidedAccess(features: UIGuidedAccessAccessibilityFeature, enabled: Bool, completionHandler completion: @escaping (Bool, (any Error)?) -> Void)
```

## See Also

### Guided Access

- [UIGuidedAccessAccessibilityFeature](../uiguidedaccessaccessibilityfeature.md): Constants that describe accessibility features for Guided Access.
- [UIAccessibility.GuidedAccessError.Code](guidedaccesserror/code.md): Error codes for Guided Access.

# UIGuidedAccessConfigureAccessibilityFeatures (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Enables or disables the specified accessibility features while using Guided Access.

## Declaration

```objectivec
extern void UIGuidedAccessConfigureAccessibilityFeatures(UIGuidedAccessAccessibilityFeature features, BOOL enabled, void (^completion)(BOOL success, NSError *error));
```

## See Also

### Guided Access

- [UIGuidedAccessAccessibilityFeature](../uiguidedaccessaccessibilityfeature.md): Constants that describe accessibility features for Guided Access.
- [UIGuidedAccessErrorCode](guidedaccesserror/code.md): Error codes for Guided Access.

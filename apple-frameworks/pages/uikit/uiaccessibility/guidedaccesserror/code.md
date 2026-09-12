> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccesserror/code](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccesserror/code)

# UIAccessibility.GuidedAccessError.Code (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Error codes for Guided Access.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [UIAccessibility.GuidedAccessError.Code.permissionDenied](code/permissiondenied.md): An error that indicates the app isn’t authorized to perform the requested action.
- [UIAccessibility.GuidedAccessError.Code.failed](code/failed.md): An error that indicates a failure for an unspecified reason.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Guided Access

- [configureForGuidedAccess(features:enabled:completionHandler:)](../configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [UIGuidedAccessAccessibilityFeature](../../uiguidedaccessaccessibilityfeature.md): Constants that describe accessibility features for Guided Access.

# UIGuidedAccessErrorCode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Error codes for Guided Access.

## Declaration

```objectivec
enum UIGuidedAccessErrorCode : NSInteger;
```

## Topics

### Errors

- [UIGuidedAccessErrorPermissionDenied](code/permissiondenied.md): An error that indicates the app isn’t authorized to perform the requested action.
- [UIGuidedAccessErrorFailed](code/failed.md): An error that indicates a failure for an unspecified reason.

## See Also

### Guided Access

- [UIGuidedAccessConfigureAccessibilityFeatures](../configureforguidedaccess%28features_enabled_completionhandler_%29.md): Enables or disables the specified accessibility features while using Guided Access.
- [UIGuidedAccessAccessibilityFeature](../../uiguidedaccessaccessibilityfeature.md): Constants that describe accessibility features for Guided Access.

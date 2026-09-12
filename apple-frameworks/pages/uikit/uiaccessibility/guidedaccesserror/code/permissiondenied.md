> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccesserror/code/permissiondenied](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccesserror/code/permissiondenied)

# UIAccessibility.GuidedAccessError.Code.permissionDenied (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An error that indicates the app isn’t authorized to perform the requested action.

## Declaration

```swift
case permissionDenied
```

<a id="Discussion"></a>

## Discussion

For example, this error might indicate that your app is requesting a configuration change but isn’t locked into Single App Mode through a configuration profile.

## See Also

### Errors

- [UIAccessibility.GuidedAccessError.Code.failed](failed.md): An error that indicates a failure for an unspecified reason.

# UIGuidedAccessErrorPermissionDenied (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An error that indicates the app isn’t authorized to perform the requested action.

## Declaration

```objectivec
UIGuidedAccessErrorPermissionDenied
```

<a id="Discussion"></a>

## Discussion

For example, this error might indicate that your app is requesting a configuration change but isn’t locked into Single App Mode through a configuration profile.

## See Also

### Errors

- [UIGuidedAccessErrorFailed](failed.md): An error that indicates a failure for an unspecified reason.

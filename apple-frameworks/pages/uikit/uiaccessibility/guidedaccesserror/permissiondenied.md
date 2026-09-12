> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/guidedaccesserror/permissiondenied](https://developer.apple.com/documentation/uikit/uiaccessibility/guidedaccesserror/permissiondenied)

# permissionDenied

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

An error that indicates the app isn’t authorized to perform the requested action.

## Declaration

```swift
static var permissionDenied: UIAccessibility.GuidedAccessError.Code { get }
```

<a id="Discussion"></a>

## Discussion

For example, this error might indicate that your app is requesting a configuration change but isn’t locked into Single App Mode through a configuration profile.

## See Also

### Accessing error codes

- [failed](failed.md): An error that indicates a failure for an unspecified reason.
- [UIAccessibility.GuidedAccessError.Code](code.md): Error codes for Guided Access.

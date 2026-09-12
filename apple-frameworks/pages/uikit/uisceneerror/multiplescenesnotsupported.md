> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneerror/multiplescenesnotsupported](https://developer.apple.com/documentation/uikit/uisceneerror/multiplescenesnotsupported)

# multipleScenesNotSupported

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An error that indicates multiple scenes aren’t supported.

## Declaration

```swift
static var multipleScenesNotSupported: UISceneError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error code indicates that the app doesn’t support multiple scenes or the system was unable to display multiple scenes for your app.

## See Also

### Identifying an error cause

- [requestDenied](requestdenied.md): An error that indicates the request was denied.
- [geometryRequestUnsupported](geometryrequestunsupported.md): An error that indicates the geometry request is invalid or unsupported.
- [geometryRequestDenied](geometryrequestdenied.md): An error that indicates the geometry request is valid but the system denied the request.
- [UISceneError.Code](code.md): Error codes for issues with scenes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneerror](https://developer.apple.com/documentation/uikit/uisceneerror)

# UISceneError

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Errors returned during the creation or management of a scene.

## Declaration

```swift
struct UISceneError
```

## Topics

### Identifying an error cause

- [multipleScenesNotSupported](uisceneerror/multiplescenesnotsupported.md): An error that indicates multiple scenes aren’t supported.
- [requestDenied](uisceneerror/requestdenied.md): An error that indicates the request was denied.
- [geometryRequestUnsupported](uisceneerror/geometryrequestunsupported.md): An error that indicates the geometry request is invalid or unsupported.
- [geometryRequestDenied](uisceneerror/geometryrequestdenied.md): An error that indicates the geometry request is valid but the system denied the request.
- [UISceneError.Code](uisceneerror/code.md): Error codes for issues with scenes.

### Inspecting error information

- [errorDomain](uisceneerror/errordomain.md): The domain for scene-related errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [UISceneError.Code](uisceneerror/code.md): Error codes for issues with scenes.
- [UISceneErrorDomain](uisceneerrordomain.md): The domain for scene-related errors.

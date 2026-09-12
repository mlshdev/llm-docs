> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisceneerror/code](https://developer.apple.com/documentation/uikit/uisceneerror/code)

# UISceneError.Code (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Error codes for issues with scenes.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [UISceneError.Code.multipleScenesNotSupported](code/multiplescenesnotsupported.md): An error that indicates multiple scenes aren’t supported.
- [UISceneError.Code.requestDenied](code/requestdenied.md): An error that indicates the request was denied.
- [UISceneError.Code.geometryRequestUnsupported](code/geometryrequestunsupported.md): An error that indicates the geometry request is invalid or unsupported.
- [UISceneError.Code.geometryRequestDenied](code/geometryrequestdenied.md): An error that indicates the geometry request is valid but the system denied the request.

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

### Errors

- [UISceneError](../uisceneerror.md): Errors returned during the creation or management of a scene.
- [UISceneErrorDomain](../uisceneerrordomain.md): The domain for scene-related errors.

# UISceneErrorCode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Error codes for issues with scenes.

## Declaration

```objectivec
enum UISceneErrorCode : NSInteger;
```

## Topics

### Error codes

- [UISceneErrorCodeMultipleScenesNotSupported](code/multiplescenesnotsupported.md): An error that indicates multiple scenes aren’t supported.
- [UISceneErrorCodeRequestDenied](code/requestdenied.md): An error that indicates the request was denied.
- [UISceneErrorCodeGeometryRequestUnsupported](code/geometryrequestunsupported.md): An error that indicates the geometry request is invalid or unsupported.
- [UISceneErrorCodeGeometryRequestDenied](code/geometryrequestdenied.md): An error that indicates the geometry request is valid but the system denied the request.

## See Also

### Errors

- [UISceneErrorDomain](../uisceneerrordomain.md): The domain for scene-related errors.

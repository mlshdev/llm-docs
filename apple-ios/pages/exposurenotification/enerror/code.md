> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enerror/code](https://developer.apple.com/documentation/exposurenotification/enerror/code)

# ENError.Code (Swift)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Error codes that the exposure notification framework issues.

> No longer supported.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### Error Codes

- [ENError.Code.apiMisuse](code/apimisuse.md): Deprecated. The API use is incorrect.
- [ENError.Code.badFormat](code/badformat.md): Deprecated. A file is formated incorrectly.
- [ENError.Code.badParameter](code/badparameter.md): Deprecated. The parameter is missing or incorrect.
- [ENError.Code.restricted](code/restricted.md): Deprecated. Exposure notification is disabled due to system policies.
- [ENError.Code.bluetoothOff](code/bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENError.Code.insufficientMemory](code/insufficientmemory.md): Deprecated. The memory is insufficient to perform the operation.
- [ENError.Code.insufficientStorage](code/insufficientstorage.md): Deprecated. The storage is insufficient to enable notifications.
- [ENError.Code.internal](code/internal.md): Deprecated. A bug in the internal notification framework.
- [ENError.Code.invalidated](code/invalidated.md): Deprecated. A call to invalidate before the operation completes normally.
- [ENError.Code.notAuthorized](code/notauthorized.md): Deprecated. The user has denied access to the notification framework.
- [ENError.Code.notEnabled](code/notenabled.md): Deprecated. Notification is not enabled.
- [ENError.Code.notEntitled](code/notentitled.md): Deprecated. Process of calling is not entitled.
- [ENError.Code.rateLimited](code/ratelimited.md): Deprecated. API calls are too frequent.
- [ENError.Code.unknown](code/unknown.md): Deprecated. Failure has an unknown cause.
- [ENError.Code.unsupported](code/unsupported.md): Deprecated. Operation is not supported.
- [ENError.Code.dataInaccessible](code/datainaccessible.md): Deprecated. The user must unlock the device before it can access data.
- [ENError.Code.travelStatusNotAvailable](code/travelstatusnotavailable.md): Deprecated. The system can’t determine whether the user is traveling.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md): Deprecated.

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

- [ENError](../enerror.md): Deprecated. Errors that the exposure notification framework issues.
- [ENErrorDomain](../enerrordomain.md): Deprecated. The domain for an error.
- [ENErrorHandler](../enerrorhandler.md): Deprecated. The handler for error conditions.

# ENErrorCode (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Error codes that the exposure notification framework issues.

> No longer supported.

## Declaration

```objectivec
enum ENErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

> **Important**

>  This enumeration is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### Error Codes

- [ENErrorCodeAPIMisuse](code/apimisuse.md): Deprecated. The API use is incorrect.
- [ENErrorCodeBadFormat](code/badformat.md): Deprecated. A file is formated incorrectly.
- [ENErrorCodeBadParameter](code/badparameter.md): Deprecated. The parameter is missing or incorrect.
- [ENErrorCodeRestricted](code/restricted.md): Deprecated. Exposure notification is disabled due to system policies.
- [ENErrorCodeBluetoothOff](code/bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [ENErrorCodeInsufficientMemory](code/insufficientmemory.md): Deprecated. The memory is insufficient to perform the operation.
- [ENErrorCodeInsufficientStorage](code/insufficientstorage.md): Deprecated. The storage is insufficient to enable notifications.
- [ENErrorCodeInternal](code/internal.md): Deprecated. A bug in the internal notification framework.
- [ENErrorCodeInvalidated](code/invalidated.md): Deprecated. A call to invalidate before the operation completes normally.
- [ENErrorCodeNotAuthorized](code/notauthorized.md): Deprecated. The user has denied access to the notification framework.
- [ENErrorCodeNotEnabled](code/notenabled.md): Deprecated. Notification is not enabled.
- [ENErrorCodeNotEntitled](code/notentitled.md): Deprecated. Process of calling is not entitled.
- [ENErrorCodeRateLimited](code/ratelimited.md): Deprecated. API calls are too frequent.
- [ENErrorCodeUnknown](code/unknown.md): Deprecated. Failure has an unknown cause.
- [ENErrorCodeUnsupported](code/unsupported.md): Deprecated. Operation is not supported.
- [ENErrorCodeDataInaccessible](code/datainaccessible.md): Deprecated. The user must unlock the device before it can access data.
- [ENErrorCodeTravelStatusNotAvailable](code/travelstatusnotavailable.md): Deprecated. The system can’t determine whether the user is traveling.

## See Also

### Errors

- [ENErrorDomain](../enerrordomain.md): Deprecated. The domain for an error.
- [ENErrorHandler](../enerrorhandler.md): Deprecated. The handler for error conditions.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enerror](https://developer.apple.com/documentation/exposurenotification/enerror)

# ENError

**Framework:** Exposure Notification  
**Kind:** Structure  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Errors that the exposure notification framework issues.

> No longer supported.

## Declaration

```swift
struct ENError
```

<a id="overview"></a>

## Overview

> **Important**

>  This structure is available in iOS 12.5, and in iOS 13.5 and later.

## Topics

### Error Codes

- [apiMisuse](enerror/apimisuse.md): Deprecated. The API use is incorrect.
- [badFormat](enerror/badformat.md): Deprecated. A file is formated incorrectly.
- [badParameter](enerror/badparameter.md): Deprecated. The parameter is missing or incorrect.
- [bluetoothOff](enerror/bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [insufficientMemory](enerror/insufficientmemory.md): Deprecated. The memory is insufficient to perform the operation.
- [insufficientStorage](enerror/insufficientstorage.md): Deprecated. The storage is insufficient to enable notifications.
- [internal](enerror/internal.md): Deprecated. A bug in the internal notification framework.
- [invalidated](enerror/invalidated.md): Deprecated. A call to invalidate before the operation completes normally.
- [notAuthorized](enerror/notauthorized.md): Deprecated. The user has denied access to the notification framework.
- [notEnabled](enerror/notenabled.md): Deprecated. Notification is not enabled.
- [notEntitled](enerror/notentitled.md): Deprecated. Process of calling is not entitled.
- [rateLimited](enerror/ratelimited.md): Deprecated. API calls are too frequent.
- [restricted](enerror/restricted.md): Deprecated. Exposure notification is disabled due to system policies.
- [unknown](enerror/unknown.md): Deprecated. Failure has an unknown cause.
- [unsupported](enerror/unsupported.md): Deprecated. Operation is not supported.
- [dataInaccessible](enerror/datainaccessible.md): Deprecated. The user must unlock the device before it can access data.
- [travelStatusNotAvailable](enerror/travelstatusnotavailable.md): Deprecated. The system can’t determine whether the user is traveling.
- [ENError.Code](enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.

### Type Properties

- [errorDomain](enerror/errordomain.md): Deprecated.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [ENError.Code](enerror/code.md): Deprecated. Error codes that the exposure notification framework issues.
- [ENErrorDomain](enerrordomain.md): Deprecated. The domain for an error.
- [ENErrorHandler](enerrorhandler.md): Deprecated. The handler for error conditions.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enerror/notauthorized](https://developer.apple.com/documentation/exposurenotification/enerror/notauthorized)

# notAuthorized

**Framework:** Exposure Notification  
**Kind:** Type Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The user has denied access to the notification framework.

> No longer supported.

## Declaration

```swift
static var notAuthorized: ENError.Code { get }
```

## See Also

### Error Codes

- [apiMisuse](apimisuse.md): Deprecated. The API use is incorrect.
- [badFormat](badformat.md): Deprecated. A file is formated incorrectly.
- [badParameter](badparameter.md): Deprecated. The parameter is missing or incorrect.
- [bluetoothOff](bluetoothoff.md): Deprecated. Bluetooth is turned off.
- [insufficientMemory](insufficientmemory.md): Deprecated. The memory is insufficient to perform the operation.
- [insufficientStorage](insufficientstorage.md): Deprecated. The storage is insufficient to enable notifications.
- [internal](internal.md): Deprecated. A bug in the internal notification framework.
- [invalidated](invalidated.md): Deprecated. A call to invalidate before the operation completes normally.
- [notEnabled](notenabled.md): Deprecated. Notification is not enabled.
- [notEntitled](notentitled.md): Deprecated. Process of calling is not entitled.
- [rateLimited](ratelimited.md): Deprecated. API calls are too frequent.
- [restricted](restricted.md): Deprecated. Exposure notification is disabled due to system policies.
- [unknown](unknown.md): Deprecated. Failure has an unknown cause.
- [unsupported](unsupported.md): Deprecated. Operation is not supported.
- [dataInaccessible](datainaccessible.md): Deprecated. The user must unlock the device before it can access data.

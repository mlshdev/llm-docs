> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srerror](https://developer.apple.com/documentation/sensorkit/srerror)

# SRError

**Framework:** SensorKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An error that SensorKit reports.

## Declaration

```swift
struct SRError
```

## Topics

### Inspecting Error Information

- [errorDomain](srerror/errordomain.md)

### Identifying an Error Cause

- [promptDeclined](srerror/promptdeclined.md): Occurs when the user cancels the sensor approval workflow.
- [dataInaccessible](srerror/datainaccessible.md): Occurs when the app can’t access the sensor’s data.
- [fetchRequestInvalid](srerror/fetchrequestinvalid.md): Occurs when the app misconfigures a fetch request.
- [invalidEntitlement](srerror/invalidentitlement.md): Occurs when the app lacks the required entitlement.
- [noAuthorization](srerror/noauthorization.md): Occurs when the user declines sensor access in the Settings app.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting Errors

- [SRErrorDomain](srerrordomain.md): An error domain that’s unique to the framework.
- [SRError.Code](srerror/code.md): The kinds of problems that stop a recording or a fetch.

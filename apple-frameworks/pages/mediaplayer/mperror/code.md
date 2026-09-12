> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mperror/code](https://developer.apple.com/documentation/mediaplayer/mperror/code)

# MPError.Code (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.14.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An enumeration that represents error codes for framework operations.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MPError.Code.cancelled](code/cancelled.md): An error that indicates the system canceled the requested operation before it completed.
- [MPError.Code.cloudServiceCapabilityMissing](code/cloudservicecapabilitymissing.md): An error that indicates the operation can’t complete because iCloud services aren’t enabled.
- [MPError.Code.networkConnectionFailed](code/networkconnectionfailed.md): An error that indicates the operation failed because the device can’t connect to the network.
- [MPError.Code.notFound](code/notfound.md): An error that indicates the operation failed because the system can’t find the requested identifier in the current storefront.
- [MPError.Code.notSupported](code/notsupported.md): An error that indicates the requested operation failed because the system doesn’t support it.
- [MPError.Code.permissionDenied](code/permissiondenied.md): An error that indicates the operation can’t complete because the user doesn’t have permission to execute the operation.
- [MPError.Code.requestTimedOut](code/requesttimedout.md): An error that indicates the requested operation timed out.
- [MPError.Code.unknown](code/unknown.md): An error that indicates the requested operation can’t complete due to an unknown error.

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

### Inspecting an error

- [errorDomain](errordomain.md)
- [MPErrorDomain](../mperrordomain.md): The Media Player framework error domain.
- [Error constants](../error-constants.md): Error code constants for framework operations.

# MPErrorCode (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · macOS 10.14.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

An enumeration that represents error codes for framework operations.

## Declaration

```objectivec
enum MPErrorCode : NSInteger;
```

## Topics

### Error codes

- [MPErrorCancelled](code/cancelled.md): An error that indicates the system canceled the requested operation before it completed.
- [MPErrorCloudServiceCapabilityMissing](code/cloudservicecapabilitymissing.md): An error that indicates the operation can’t complete because iCloud services aren’t enabled.
- [MPErrorNetworkConnectionFailed](code/networkconnectionfailed.md): An error that indicates the operation failed because the device can’t connect to the network.
- [MPErrorNotFound](code/notfound.md): An error that indicates the operation failed because the system can’t find the requested identifier in the current storefront.
- [MPErrorNotSupported](code/notsupported.md): An error that indicates the requested operation failed because the system doesn’t support it.
- [MPErrorPermissionDenied](code/permissiondenied.md): An error that indicates the operation can’t complete because the user doesn’t have permission to execute the operation.
- [MPErrorRequestTimedOut](code/requesttimedout.md): An error that indicates the requested operation timed out.
- [MPErrorUnknown](code/unknown.md): An error that indicates the requested operation can’t complete due to an unknown error.

## See Also

### Inspecting an error

- [MPErrorDomain](../mperrordomain.md): The Media Player framework error domain.
- [Error constants](../error-constants.md): Error code constants for framework operations.

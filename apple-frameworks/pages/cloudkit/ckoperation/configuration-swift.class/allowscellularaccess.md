> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/configuration-swift.class/allowscellularaccess](https://developer.apple.com/documentation/cloudkit/ckoperation/configuration-swift.class/allowscellularaccess)

# allowsCellularAccess (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.

## Declaration

```swift
var allowsCellularAccess: Bool { get set }
```

## See Also

### Preparing a Configuration

- [container](container.md): The configuration’s container.
- [isLongLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

# allowsCellularAccess (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.

## Declaration

```objectivec
@property (assign) BOOL allowsCellularAccess;
```

## See Also

### Preparing a Configuration

- [container](container.md): The configuration’s container.
- [longLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

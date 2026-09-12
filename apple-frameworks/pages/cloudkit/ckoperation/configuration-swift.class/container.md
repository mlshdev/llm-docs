> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/configuration-swift.class/container](https://developer.apple.com/documentation/cloudkit/ckoperation/configuration-swift.class/container)

# container (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The configuration’s container.

## Declaration

```swift
var container: CKContainer? { get set }
```

<a id="discussion"></a>

## Discussion

If you don’t provide a container, CloudKit uses the default container that [CKContainer](../../ckcontainer.md) provides.

## See Also

### Preparing a Configuration

- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [isLongLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

# container (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The configuration’s container.

## Declaration

```objectivec
@property (strong, nullable) CKContainer * container;
```

<a id="discussion"></a>

## Discussion

If you don’t provide a container, CloudKit uses the default container that [CKContainer](../../ckcontainer.md) provides.

## See Also

### Preparing a Configuration

- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [longLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.
- [timeoutIntervalForResource](timeoutintervalforresource.md): The maximum amount of time that a resource request can take.

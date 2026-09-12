> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckoperation/configuration-swift.class/timeoutintervalforresource](https://developer.apple.com/documentation/cloudkit/ckoperation/configuration-swift.class/timeoutintervalforresource)

# timeoutIntervalForResource (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum amount of time that a resource request can take.

## Declaration

```swift
var timeoutIntervalForResource: TimeInterval { get set }
```

<a id="discussion"></a>

## Discussion

> **See Also**

> `NSURLSessionConfiguration.timeoutIntervalForResource`

## See Also

### Preparing a Configuration

- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [container](container.md): The configuration’s container.
- [isLongLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.

# timeoutIntervalForResource (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The maximum amount of time that a resource request can take.

## Declaration

```objectivec
@property (assign) NSTimeInterval timeoutIntervalForResource;
```

<a id="discussion"></a>

## Discussion

> **See Also**

> `NSURLSessionConfiguration.timeoutIntervalForResource`

## See Also

### Preparing a Configuration

- [allowsCellularAccess](allowscellularaccess.md): A Boolean value that indicates whether operations that use this configuration can send data over the cellular network.
- [container](container.md): The configuration’s container.
- [longLived](islonglived.md): A Boolean value that indicates whether the operations that use this configuration are long-lived.
- [qualityOfService](qualityofservice.md): The priority that the system uses when it allocates resources to the operations that use this configuration.
- [timeoutIntervalForRequest](timeoutintervalforrequest.md): The maximum amount of time that a request can take.

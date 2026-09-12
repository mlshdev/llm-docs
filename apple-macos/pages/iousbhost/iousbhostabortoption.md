> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostabortoption](https://developer.apple.com/documentation/iousbhost/iousbhostabortoption)

# IOUSBHostAbortOption (Swift)

**Framework:** IOUSBHost  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Options for aborting pending input/output requests.

## Declaration

```swift
enum IOUSBHostAbortOption
```

## Topics

### Options

- [IOUSBHostAbortOption.synchronous](iousbhostabortoption/synchronous.md): The option to abort input/output requests synchronously.
- [IOUSBHostAbortOption.asynchronous](iousbhostabortoption/asynchronous.md): The option to abort input/output requests asynchronously.

### Initializers

- [init(rawValue:)](iousbhostabortoption/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# IOUSBHostAbortOption (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Options for aborting pending input/output requests.

## Declaration

```objectivec
enum IOUSBHostAbortOption : NSUInteger;
```

## Topics

### Options

- [IOUSBHostAbortOptionSynchronous](iousbhostabortoption/synchronous.md): The option to abort input/output requests synchronously.
- [IOUSBHostAbortOptionAsynchronous](iousbhostabortoption/asynchronous.md): The option to abort input/output requests asynchronously.

## See Also

### Aborting Device Requests

- [abortDeviceRequestsWithOption:error:](iousbhostobject/abortdevicerequestswithoption_error_.md): Aborts device requests.
- [abortDeviceRequestsWithError:](iousbhostobject/abortdevicerequestswitherror_.md): Aborts device requests synchronously.

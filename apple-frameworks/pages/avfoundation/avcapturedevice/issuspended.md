> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/issuspended](https://developer.apple.com/documentation/avfoundation/avcapturedevice/issuspended)

# isSuspended (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A Boolean value that indicates whether the device is in a suspended state.

## Declaration

```swift
var isSuspended: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing device state

- [isConnected](isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [isInUseByAnotherApplication](isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

# suspended (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A Boolean value that indicates whether the device is in a suspended state.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSuspended) BOOL suspended;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing device state

- [connected](isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [inUseByAnotherApplication](isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

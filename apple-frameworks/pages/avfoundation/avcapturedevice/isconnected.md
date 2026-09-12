> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isconnected](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isconnected)

# isConnected (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A Boolean value that indicates whether a device is currently connected to the system and available for use.

## Declaration

```swift
var isConnected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) for a particular capture device instance, it doesn’t become [true](https://developer.apple.com/documentation/swift/true) again. If the same physical device reconnects, the system represents it as a new capture device instance.

You can key-value observe this property value to monitor when a device is no longer available.

## See Also

### Accessing device state

- [isSuspended](issuspended.md): A Boolean value that indicates whether the device is in a suspended state.
- [isInUseByAnotherApplication](isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

# connected (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 2.1+

A Boolean value that indicates whether a device is currently connected to the system and available for use.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConnected) BOOL connected;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [false](https://developer.apple.com/documentation/swift/false) for a particular capture device instance, it doesn’t become [true](https://developer.apple.com/documentation/swift/true) again. If the same physical device reconnects, the system represents it as a new capture device instance.

You can key-value observe this property value to monitor when a device is no longer available.

## See Also

### Accessing device state

- [suspended](issuspended.md): A Boolean value that indicates whether the device is in a suspended state.
- [inUseByAnotherApplication](isinusebyanotherapplication.md): A Boolean value that indicates whether another app is using the device.

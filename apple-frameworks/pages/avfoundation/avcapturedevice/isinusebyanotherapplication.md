> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isinusebyanotherapplication](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isinusebyanotherapplication)

# isInUseByAnotherApplication (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

A Boolean value that indicates whether another app is using the device.

## Declaration

```swift
var isInUseByAnotherApplication: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing device state

- [isConnected](isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [isSuspended](issuspended.md): A Boolean value that indicates whether the device is in a suspended state.

# inUseByAnotherApplication (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.7+

A Boolean value that indicates whether another app is using the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isInUseByAnotherApplication) BOOL inUseByAnotherApplication;
```

<a id="Discussion"></a>

## Discussion

This property is key-value observable.

## See Also

### Accessing device state

- [connected](isconnected.md): A Boolean value that indicates whether a device is currently connected to the system and available for use.
- [suspended](issuspended.md): A Boolean value that indicates whether the device is in a suspended state.

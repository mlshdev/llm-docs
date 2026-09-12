> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/supportshiddevice(_:)](https://developer.apple.com/documentation/gamecontroller/gccontroller/supportshiddevice(_:))

# supportsHIDDevice(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a Boolean value that indicates whether the framework supports the specified human interface device.

## Declaration

```swift
class func supportsHIDDevice(_ device: IOHIDDevice) -> Bool
```

## Parameters

- `device`: A human interface input device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the framework supports the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the Game Controller framework supports the input device, you can use the Game Controller APIs to interact with the device instead of the IOKit APIs.

## See Also

### Inspecting a controller

- [isAttachedToDevice](isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [shouldMonitorBackgroundEvents](shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

# supportsHIDDevice: (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Returns a Boolean value that indicates whether the framework supports the specified human interface device.

## Declaration

```objectivec
+ (BOOL) supportsHIDDevice:(IOHIDDeviceRef) device;
```

## Parameters

- `device`: A human interface input device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the framework supports the device; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the Game Controller framework supports the input device, you can use the Game Controller APIs to interact with the device instead of the IOKit APIs.

## See Also

### Inspecting a controller

- [attachedToDevice](isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [shouldMonitorBackgroundEvents](shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

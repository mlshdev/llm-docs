> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/isattachedtodevice](https://developer.apple.com/documentation/gamecontroller/gccontroller/isattachedtodevice)

# isAttachedToDevice (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller closely integrates with the device.

## Declaration

```swift
var isAttachedToDevice: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the controller may be formfitting or otherwise closely attach to the device so that the player can interact simultaneously with the controller and the device. If [false](https://developer.apple.com/documentation/swift/false), the controller doesn’t have an attachment to the device.

## See Also

### Inspecting a controller

- [supportsHIDDevice(\_:)](supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.
- [shouldMonitorBackgroundEvents](shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

# attachedToDevice (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller closely integrates with the device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAttachedToDevice) BOOL attachedToDevice;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the controller may be formfitting or otherwise closely attach to the device so that the player can interact simultaneously with the controller and the device. If [false](https://developer.apple.com/documentation/swift/false), the controller doesn’t have an attachment to the device.

## See Also

### Inspecting a controller

- [supportsHIDDevice:](supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.
- [shouldMonitorBackgroundEvents](shouldmonitorbackgroundevents.md): A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

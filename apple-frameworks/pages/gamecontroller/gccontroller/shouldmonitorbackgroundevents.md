> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontroller/shouldmonitorbackgroundevents](https://developer.apple.com/documentation/gamecontroller/gccontroller/shouldmonitorbackgroundevents)

# shouldMonitorBackgroundEvents (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

## Declaration

```swift
class var shouldMonitorBackgroundEvents: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), and the app isn’t in the foreground, the framework doesn’t forward any input from the game controller until the app becomes the frontmost.

> **Note**

>  In macOS 11.3 and later, the default value for this property is [false](https://developer.apple.com/documentation/swift/false). Prior to macOS 11.3, the default value is [true](https://developer.apple.com/documentation/swift/true). In iOS and tvOS, the framework ignores this property.

## See Also

### Inspecting a controller

- [isAttachedToDevice](isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [supportsHIDDevice(\_:)](supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.

# shouldMonitorBackgroundEvents (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

A Boolean value that indicates whether the app needs to respond to controller events when it isn’t the frontmost app.

## Declaration

```objectivec
@property (class, nonatomic, readwrite) BOOL shouldMonitorBackgroundEvents;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), and the app isn’t in the foreground, the framework doesn’t forward any input from the game controller until the app becomes the frontmost.

> **Note**

>  In macOS 11.3 and later, the default value for this property is [false](https://developer.apple.com/documentation/swift/false). Prior to macOS 11.3, the default value is [true](https://developer.apple.com/documentation/swift/true). In iOS and tvOS, the framework ignores this property.

## See Also

### Inspecting a controller

- [attachedToDevice](isattachedtodevice.md): A Boolean value that indicates whether the controller closely integrates with the device.
- [supportsHIDDevice:](supportshiddevice%28__%29.md): Returns a Boolean value that indicates whether the framework supports the specified human interface device.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcontinuitydevice/isconnected](https://developer.apple.com/documentation/avfoundation/avcontinuitydevice/isconnected)

# isConnected (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 17.0+

A Boolean value that indicates whether you can use the continuity device because it’s connected to the system.

## Declaration

```swift
var isConnected: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of the property can change from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), but not the reverse. Instead, the system creates a new [AVContinuityDevice](../avcontinuitydevice.md) instance when the same physical device reconnects to the system.

# connected (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** tvOS 17.0+

A Boolean value that indicates whether you can use the continuity device because it’s connected to the system.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConnected) BOOL connected;
```

<a id="Discussion"></a>

## Discussion

The value of the property can change from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), but not the reverse. Instead, the system creates a new [AVContinuityDevice](../avcontinuitydevice.md) instance when the same physical device reconnects to the system.

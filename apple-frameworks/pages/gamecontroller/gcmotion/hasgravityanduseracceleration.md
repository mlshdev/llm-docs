> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/hasgravityanduseracceleration](https://developer.apple.com/documentation/gamecontroller/gcmotion/hasgravityanduseracceleration)

# hasGravityAndUserAcceleration (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller provides gravity and user acceleration data.

## Declaration

```swift
var hasGravityAndUserAcceleration: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller provides both gravity and user acceleration data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [gravity](gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](useracceleration.md): The acceleration that the user applies to the controller.

### Verifying Capabilities

- [hasAttitude](hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasAttitudeAndRotationRate](hasattitudeandrotationrate.md): Deprecated. A Boolean value that indicates whether the controller provides attitude and rotation data.

# hasGravityAndUserAcceleration (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A Boolean value that indicates whether the controller provides gravity and user acceleration data.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasGravityAndUserAcceleration;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller provides both gravity and user acceleration data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [gravity](gravity.md): The gravity acceleration vector from the controller’s reference frame.
- [userAcceleration](useracceleration.md): The acceleration that the user applies to the controller.

### Verifying Capabilities

- [hasAttitude](hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasAttitudeAndRotationRate](hasattitudeandrotationrate.md): Deprecated. A Boolean value that indicates whether the controller provides attitude and rotation data.

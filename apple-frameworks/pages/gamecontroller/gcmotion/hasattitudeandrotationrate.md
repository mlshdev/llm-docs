> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmotion/hasattitudeandrotationrate](https://developer.apple.com/documentation/gamecontroller/gcmotion/hasattitudeandrotationrate)

# hasAttitudeAndRotationRate (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.13+ (deprecated in 11.0) · tvOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the controller provides attitude and rotation data.

> Use the [hasAttitude](hasattitude.md) and [hasRotationRate](hasrotationrate.md) methods instead.

## Declaration

```swift
var hasAttitudeAndRotationRate: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller provides attitude and rotation rate data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [attitude](attitude.md): The attitude of the controller.
- [rotationRate](rotationrate.md): The rotation rate of the controller.

### Verifying Capabilities

- [hasAttitude](hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasGravityAndUserAcceleration](hasgravityanduseracceleration.md): A Boolean value that indicates whether the controller provides gravity and user acceleration data.

# hasAttitudeAndRotationRate (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.13+ (deprecated in 11.0) · tvOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

A Boolean value that indicates whether the controller provides attitude and rotation data.

> Use the [hasAttitude](hasattitude.md) and [hasRotationRate](hasrotationrate.md) methods instead.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasAttitudeAndRotationRate;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the controller provides attitude and rotation rate data; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Related Documentation

- [attitude](attitude.md): The attitude of the controller.
- [rotationRate](rotationrate.md): The rotation rate of the controller.

### Verifying Capabilities

- [hasAttitude](hasattitude.md): A Boolean value that indicates whether the controller provides attitude data.
- [hasRotationRate](hasrotationrate.md): A Boolean value that indicates whether the controller provides rotation data.
- [hasGravityAndUserAcceleration](hasgravityanduseracceleration.md): A Boolean value that indicates whether the controller provides gravity and user acceleration data.

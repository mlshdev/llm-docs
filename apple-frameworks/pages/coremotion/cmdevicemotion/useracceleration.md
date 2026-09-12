> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotion/useracceleration](https://developer.apple.com/documentation/coremotion/cmdevicemotion/useracceleration)

# userAcceleration (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The acceleration that the user is giving to the device.

## Declaration

```swift
var userAcceleration: CMAcceleration { get }
```

<a id="Discussion"></a>

## Discussion

The total acceleration of the device is equal to [gravity](gravity.md) plus the acceleration the user imparts to the device.

## See Also

### Getting Acceleration Data

- [gravity](gravity.md): The gravity acceleration vector expressed in the device’s reference frame.

# userAcceleration (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The acceleration that the user is giving to the device.

## Declaration

```objectivec
@property (nonatomic, readonly) CMAcceleration userAcceleration;
```

<a id="Discussion"></a>

## Discussion

The total acceleration of the device is equal to [gravity](gravity.md) plus the acceleration the user imparts to the device.

## See Also

### Getting Acceleration Data

- [gravity](gravity.md): The gravity acceleration vector expressed in the device’s reference frame.

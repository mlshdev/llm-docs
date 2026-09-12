> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmdevicemotion/rotationrate](https://developer.apple.com/documentation/coremotion/cmdevicemotion/rotationrate)

# rotationRate (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The rotation rate of the device.

## Declaration

```swift
var rotationRate: CMRotationRate { get }
```

<a id="Discussion"></a>

## Discussion

A [CMRotationRate](../cmrotationrate.md) structure contains data specifying the device’s rate of rotation around three axes. The value of this property contains a measurement of gyroscope data whose bias has been removed by Core Motion algorithms. The identically name property of [CMGyroData](../cmgyrodata.md), on the other hand, gives the raw data from the gyroscope. The structure type is declared in `CMGyroData.h`.

## See Also

### Getting Attitude and Rotation Rate

- [attitude](attitude.md): The attitude of the device.

# rotationRate (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The rotation rate of the device.

## Declaration

```objectivec
@property (nonatomic, readonly) CMRotationRate rotationRate;
```

<a id="Discussion"></a>

## Discussion

A [CMRotationRate](../cmrotationrate.md) structure contains data specifying the device’s rate of rotation around three axes. The value of this property contains a measurement of gyroscope data whose bias has been removed by Core Motion algorithms. The identically name property of [CMGyroData](../cmgyrodata.md), on the other hand, gives the raw data from the gyroscope. The structure type is declared in `CMGyroData.h`.

## See Also

### Getting Attitude and Rotation Rate

- [attitude](attitude.md): The attitude of the device.

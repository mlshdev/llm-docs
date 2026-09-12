> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/speed](https://developer.apple.com/documentation/corelocation/cllocation/speed)

# speed (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The instantaneous speed of the device, measured in meters per second.

## Declaration

```swift
var speed: CLLocationSpeed { get }
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

This value reflects the instantaneous speed of the device as it moves in the direction of its current heading. A negative value indicates an invalid speed. Because the actual speed can change many times between the delivery of location events, use this property for informational purposes only.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting speed and course information

- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

# speed (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The instantaneous speed of the device, measured in meters per second.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationSpeed speed;
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

This value reflects the instantaneous speed of the device as it moves in the direction of its current heading. A negative value indicates an invalid speed. Because the actual speed can change many times between the delivery of location events, use this property for informational purposes only.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting speed and course information

- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/course](https://developer.apple.com/documentation/corelocation/cllocation/course)

# course (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The direction in which the device is traveling, measured in degrees and relative to due north.

## Declaration

```swift
var course: CLLocationDirection { get }
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

Course values are measured in degrees starting at due north and continue clockwise around the compass. Thus, north is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. Course values may not be available on all devices. A negative value indicates that the course information is invalid.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

# course (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The direction in which the device is traveling, measured in degrees and relative to due north.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDirection course;
```

## Mentioned In

- [Getting heading and course information](../getting-heading-and-course-information.md)

<a id="Discussion"></a>

## Discussion

Course values are measured in degrees starting at due north and continue clockwise around the compass. Thus, north is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. Course values may not be available on all devices. A negative value indicates that the course information is invalid.

<a id="Special-Considerations"></a>

### Special Considerations

In iOS, this property is declared as `nonatomic`. In macOS, it is declared as `atomic`.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

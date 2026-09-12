> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/speedaccuracy](https://developer.apple.com/documentation/corelocation/cllocation/speedaccuracy)

# speedAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accuracy of the speed value, measured in meters per second.

## Declaration

```swift
var speedAccuracy: CLLocationSpeedAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains `0` or a positive number, the value in the speed property is plus or minus the specified number of meters per second. When this property contains a negative number, the value in the speed property is invalid.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

# speedAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The accuracy of the speed value, measured in meters per second.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationSpeedAccuracy speedAccuracy;
```

<a id="Discussion"></a>

## Discussion

When this property contains `0` or a positive number, the value in the speed property is plus or minus the specified number of meters per second. When this property contains a negative number, the value in the speed property is invalid.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

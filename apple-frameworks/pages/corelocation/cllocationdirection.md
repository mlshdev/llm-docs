> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationdirection](https://developer.apple.com/documentation/corelocation/cllocationdirection)

# CLLocationDirection (Swift)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An azimuth that is measured in degrees relative to true north.

## Declaration

```swift
typealias CLLocationDirection = Double
```

<a id="Discussion"></a>

## Discussion

Direction values are measured in degrees starting at due north and continue clockwise around the compass. Thus, north is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. A negative value indicates an invalid direction.

## See Also

### Getting speed and course information

- [speed](cllocation/speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](cllocation/speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](cllocation/course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](cllocation/courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationSpeedAccuracy](cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](cllocationdirectionaccuracy.md): The accuracy of a compass heading.

# CLLocationDirection (Objective-C)

**Framework:** Core Location  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An azimuth that is measured in degrees relative to true north.

## Declaration

```objectivec
typedef double CLLocationDirection;
```

<a id="Discussion"></a>

## Discussion

Direction values are measured in degrees starting at due north and continue clockwise around the compass. Thus, north is 0 degrees, east is 90 degrees, south is 180 degrees, and so on. A negative value indicates an invalid direction.

## See Also

### Getting speed and course information

- [speed](cllocation/speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](cllocation/speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](cllocation/course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [courseAccuracy](cllocation/courseaccuracy.md): The accuracy of the course value, measured in degrees.
- [CLLocationSpeed](cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationSpeedAccuracy](cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](cllocationdirectionaccuracy.md): The accuracy of a compass heading.

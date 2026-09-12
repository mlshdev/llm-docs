> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocation/courseaccuracy](https://developer.apple.com/documentation/corelocation/cllocation/courseaccuracy)

# courseAccuracy (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

The accuracy of the course value, measured in degrees.

## Declaration

```swift
var courseAccuracy: CLLocationDirectionAccuracy { get }
```

<a id="Discussion"></a>

## Discussion

When this property contains `0` or a positive number, the value in the course property is plus or minus the specified number degrees, modulo 360. When this property contains a negative number, the value in the course property is invalid.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

# courseAccuracy (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 13.4+ · visionOS 1.0+ · watchOS 6.2+

The accuracy of the course value, measured in degrees.

## Declaration

```objectivec
@property (nonatomic, readonly) CLLocationDirectionAccuracy courseAccuracy;
```

<a id="Discussion"></a>

## Discussion

When this property contains `0` or a positive number, the value in the course property is plus or minus the specified number degrees, modulo 360. When this property contains a negative number, the value in the course property is invalid.

## See Also

### Getting speed and course information

- [speed](speed.md): The instantaneous speed of the device, measured in meters per second.
- [speedAccuracy](speedaccuracy.md): The accuracy of the speed value, measured in meters per second.
- [course](course.md): The direction in which the device is traveling, measured in degrees and relative to due north.
- [CLLocationSpeed](../cllocationspeed.md): The velocity (measured in meters per second) at which the device is moving.
- [CLLocationDirection](../cllocationdirection.md): An azimuth that is measured in degrees relative to true north.
- [CLLocationSpeedAccuracy](../cllocationspeedaccuracy.md): The accuracy of a speed.
- [CLLocationDirectionAccuracy](../cllocationdirectionaccuracy.md): The accuracy of a compass heading.

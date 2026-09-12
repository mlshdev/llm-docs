> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksourcerevision/operatingsystemversion](https://developer.apple.com/documentation/healthkit/hksourcerevision/operatingsystemversion)

# operatingSystemVersion (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A string that identifies the operating system used to save a sample.

## Declaration

```swift
var operatingSystemVersion: OperatingSystemVersion { get }
```

<a id="Discussion"></a>

## Discussion

For samples saved on watchOS 4.0, HealthKit sets the operating system property to `{4, 0, 0}`.

> **Note**

>  For samples saved using older versions of HealthKit, the system approximates the operating system. For instance, HealthKit marks samples saved after iOS 8.0 but before 8.2 as `{8, 0, 0}`. HealthKit marks samples saved after 8.2 but before 9.0  as `{8, 2, 0}`.

## Topics

### Constants

- [HKSourceRevisionAnyOperatingSystem](../hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.

## See Also

### Accessing Source and Version Information

- [source](source.md): The source for a sample.
- [version](version.md): A string that identifies a particular version of the source.
- [productType](producttype.md): A string that identifies the device used to save a sample.

# operatingSystemVersion (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 4.0+

A string that identifies the operating system used to save a sample.

## Declaration

```objectivec
@property (assign, readonly) NSOperatingSystemVersion operatingSystemVersion;
```

<a id="Discussion"></a>

## Discussion

For samples saved on watchOS 4.0, HealthKit sets the operating system property to `{4, 0, 0}`.

> **Note**

>  For samples saved using older versions of HealthKit, the system approximates the operating system. For instance, HealthKit marks samples saved after iOS 8.0 but before 8.2 as `{8, 0, 0}`. HealthKit marks samples saved after 8.2 but before 9.0  as `{8, 2, 0}`.

## Topics

### Constants

- [HKSourceRevisionAnyOperatingSystem](../hksourcerevisionanyoperatingsystem.md): A constant that matches any operating system.

## See Also

### Accessing Source and Version Information

- [source](source.md): The source for a sample.
- [version](version.md): A string that identifies a particular version of the source.
- [productType](producttype.md): A string that identifies the device used to save a sample.

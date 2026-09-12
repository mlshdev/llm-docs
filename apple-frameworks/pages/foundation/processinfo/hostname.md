> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/hostname](https://developer.apple.com/documentation/foundation/processinfo/hostname)

# hostName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the host computer on which the process is executing.

## Declaration

```swift
var hostName: String { get }
```

## See Also

### Getting host information

- [operatingSystemVersionString](operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeast(\_:)](isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [OperatingSystemVersion](../operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem()](operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](../1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem()](operatingsystem%28%29.md).
- [operatingSystemName()](operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

# hostName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the host computer on which the process is executing.

## Declaration

```objectivec
@property (copy, readonly) NSString * hostName;
```

## See Also

### Getting host information

- [operatingSystemVersionString](operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeastVersion:](isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [NSOperatingSystemVersion](../operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem](operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](../1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem](operatingsystem%28%29.md).
- [operatingSystemName](operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

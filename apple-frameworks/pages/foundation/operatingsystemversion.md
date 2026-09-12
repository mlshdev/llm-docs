> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operatingsystemversion](https://developer.apple.com/documentation/foundation/operatingsystemversion)

# OperatingSystemVersion (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.

## Declaration

```swift
struct OperatingSystemVersion
```

<a id="overview"></a>

## Overview

Use the [ProcessInfo](processinfo.md) property [operatingSystemVersion](processinfo/operatingsystemversion.md) to fetch an instance of this type. You can also pass this type to [isOperatingSystemAtLeast(\_:)](processinfo/isoperatingsystematleast%28__%29.md) to determine whether the current operating system version is the same or later than the given value.

## Topics

### Creating an Operating System Version

- [init()](operatingsystemversion/init%28%29.md): Creates an empty operating system version.
- [init(majorVersion:minorVersion:patchVersion:)](operatingsystemversion/init%28majorversion_minorversion_patchversion_%29.md): Creates an operating system version with the provided values.

### Version Components

- [majorVersion](operatingsystemversion/majorversion.md): The major release number, such as 10 in version 10.9.3.
- [minorVersion](operatingsystemversion/minorversion.md): The minor release number, such as 9 in version 10.9.3.
- [patchVersion](operatingsystemversion/patchversion.md): The update release number, such as 3 in version 10.9.3.
- [majorVersion](operatingsystemversion/majorversion.md): The major release number, such as 10 in version 10.9.3.
- [minorVersion](operatingsystemversion/minorversion.md): The minor release number, such as 9 in version 10.9.3.
- [patchVersion](operatingsystemversion/patchversion.md): The update release number, such as 3 in version 10.9.3.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting host information

- [hostName](processinfo/hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](processinfo/operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](processinfo/operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeast(\_:)](processinfo/isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [operatingSystem()](processinfo/operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem()](processinfo/operatingsystem%28%29.md).
- [operatingSystemName()](processinfo/operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

# NSOperatingSystemVersion (Objective-C)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.

## Declaration

```objectivec
typedef struct { ... } NSOperatingSystemVersion;
```

<a id="overview"></a>

## Overview

Use the [NSProcessInfo](processinfo.md) property [operatingSystemVersion](processinfo/operatingsystemversion.md) to fetch an instance of this type. You can also pass this type to [isOperatingSystemAtLeastVersion:](processinfo/isoperatingsystematleast%28__%29.md) to determine whether the current operating system version is the same or later than the given value.

## Topics

### Version Components

- [majorVersion](operatingsystemversion/majorversion.md): The major release number, such as 10 in version 10.9.3.
- [minorVersion](operatingsystemversion/minorversion.md): The minor release number, such as 9 in version 10.9.3.
- [patchVersion](operatingsystemversion/patchversion.md): The update release number, such as 3 in version 10.9.3.
- [majorVersion](operatingsystemversion/majorversion.md): The major release number, such as 10 in version 10.9.3.
- [minorVersion](operatingsystemversion/minorversion.md): The minor release number, such as 9 in version 10.9.3.
- [patchVersion](operatingsystemversion/patchversion.md): The update release number, such as 3 in version 10.9.3.

## See Also

### Getting host information

- [hostName](processinfo/hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](processinfo/operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](processinfo/operatingsystemversion.md): The version of the operating system on which the process is executing.
- [isOperatingSystemAtLeastVersion:](processinfo/isoperatingsystematleast%28__%29.md): Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.
- [operatingSystem](processinfo/operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem](processinfo/operatingsystem%28%29.md).
- [operatingSystemName](processinfo/operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

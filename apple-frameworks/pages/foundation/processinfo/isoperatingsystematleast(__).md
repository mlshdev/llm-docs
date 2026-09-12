> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/isoperatingsystematleast(_:)](https://developer.apple.com/documentation/foundation/processinfo/isoperatingsystematleast(_:))

# isOperatingSystemAtLeast(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.

## Declaration

```swift
func isOperatingSystemAtLeast(_ version: OperatingSystemVersion) -> Bool
```

## Parameters

- `version`: The operating system version to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operating system on which the process is executing is the same or later than the given version; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method accounts for major, minor, and update versions of the operating system.

## See Also

### Getting host information

- [hostName](hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](operatingsystemversion.md): The version of the operating system on which the process is executing.
- [OperatingSystemVersion](../operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem()](operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](../1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem()](operatingsystem%28%29.md).
- [operatingSystemName()](operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

# isOperatingSystemAtLeastVersion: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the version of the operating system on which the process is executing is the same or later than the given version.

## Declaration

```objectivec
- (BOOL) isOperatingSystemAtLeastVersion:(NSOperatingSystemVersion) version;
```

## Parameters

- `version`: The operating system version to test against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operating system on which the process is executing is the same or later than the given version; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method accounts for major, minor, and update versions of the operating system.

## See Also

### Getting host information

- [hostName](hostname.md): The name of the host computer on which the process is executing.
- [operatingSystemVersionString](operatingsystemversionstring.md): A string containing the version of the operating system on which the process is executing.
- [operatingSystemVersion](operatingsystemversion.md): The version of the operating system on which the process is executing.
- [NSOperatingSystemVersion](../operatingsystemversion.md): A structure that contains version information about the currently executing operating system, including major, minor, and patch version numbers.
- [operatingSystem](operatingsystem%28%29.md): Deprecated. Returns a constant to indicate the operating system on which the process is executing.
- [Anonymous](../1552984-anonymous.md): The following constants are provided by the `NSProcessInfo` class as return values for [operatingSystem](operatingsystem%28%29.md).
- [operatingSystemName](operatingsystemname%28%29.md): Deprecated. Returns a string containing the name of the operating system on which the process is executing.

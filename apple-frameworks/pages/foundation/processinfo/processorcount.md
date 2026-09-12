> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/processorcount](https://developer.apple.com/documentation/foundation/processinfo/processorcount)

# processorCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of processing cores available on the computer.

## Declaration

```swift
var processorCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This property value is equal to the result of entering the command `sysctl -n hw.ncpu` on the current system.

## See Also

### Getting computer information

- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertified(for:)](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile(\_:)](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

# processorCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of processing cores available on the computer.

## Declaration

```objectivec
@property (readonly) NSUInteger processorCount;
```

<a id="Discussion"></a>

## Discussion

This property value is equal to the result of entering the command `sysctl -n hw.ncpu` on the current system.

## See Also

### Getting computer information

- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertifiedFor:](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile:](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

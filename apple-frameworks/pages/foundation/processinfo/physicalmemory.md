> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/physicalmemory](https://developer.apple.com/documentation/foundation/processinfo/physicalmemory)

# physicalMemory (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of physical memory on the computer in bytes.

## Declaration

```swift
var physicalMemory: UInt64 { get }
```

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [isDeviceCertified(for:)](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile(\_:)](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

# physicalMemory (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of physical memory on the computer in bytes.

## Declaration

```objectivec
@property (readonly) unsigned long long physicalMemory;
```

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [isDeviceCertifiedFor:](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile:](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

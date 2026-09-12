> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/activeprocessorcount](https://developer.apple.com/documentation/foundation/processinfo/activeprocessorcount)

# activeProcessorCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of active processing cores available on the computer.

## Declaration

```swift
var activeProcessorCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Whereas the [processorCount](processorcount.md) property reports the number of advertised processing cores, the [activeProcessorCount](activeprocessorcount.md) property reflects the actual number of active processing cores on the system. There are a number of different factors that may cause a core to not be active, including boot arguments, thermal throttling, or a manufacturing defect.

This property value is equal to the result of entering the command `sysctl -n hw.logicalcpu` on the current system.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertified(for:)](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile(\_:)](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

# activeProcessorCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of active processing cores available on the computer.

## Declaration

```objectivec
@property (readonly) NSUInteger activeProcessorCount;
```

<a id="Discussion"></a>

## Discussion

Whereas the [processorCount](processorcount.md) property reports the number of advertised processing cores, the [activeProcessorCount](activeprocessorcount.md) property reflects the actual number of active processing cores on the system. There are a number of different factors that may cause a core to not be active, including boot arguments, thermal throttling, or a manufacturing defect.

This property value is equal to the result of entering the command `sysctl -n hw.logicalcpu` on the current system.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertifiedFor:](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile:](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

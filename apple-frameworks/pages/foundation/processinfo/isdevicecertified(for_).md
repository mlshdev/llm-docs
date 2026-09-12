> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/isdevicecertified(for:)](https://developer.apple.com/documentation/foundation/processinfo/isdevicecertified(for:))

# isDeviceCertified(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether the device supports the requested performance tier.

## Declaration

```swift
func isDeviceCertified(for performanceTier: NSDeviceCertification) -> Bool
```

## Parameters

- `performanceTier`: The desired system performance tier. [iPhonePerformanceGaming](../../metal/nsdevicecertification/iphoneperformancegaming.md) is the only performance tier.

<a id="return-value"></a>

## Return Value

`True` if the device meets the requirements for the given performance tier.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [hasPerformanceProfile(\_:)](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

# isDeviceCertifiedFor: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether the device supports the requested performance tier.

## Declaration

```objectivec
- (BOOL) isDeviceCertifiedFor:(NSDeviceCertification) performanceTier;
```

## Parameters

- `performanceTier`: The desired system performance tier. [NSDeviceCertificationiPhonePerformanceGaming](../../metal/nsdevicecertification/iphoneperformancegaming.md) is the only performance tier.

<a id="return-value"></a>

## Return Value

`True` if the device meets the requirements for the given performance tier.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [hasPerformanceProfile:](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

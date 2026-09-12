> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/hasperformanceprofile(_:)](https://developer.apple.com/documentation/foundation/processinfo/hasperformanceprofile(_:))

# hasPerformanceProfile(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether an app is running under a known performance profile.

## Declaration

```swift
func hasPerformanceProfile(_ performanceProfile: NSProcessPerformanceProfile) -> Bool
```

## Parameters

- `performanceProfile`: The desired performance profile. Choose between: [default](../../metal/nsprocessperformanceprofile/default.md) and [sustained](../../metal/nsprocessperformanceprofile/sustained.md).

<a id="return-value"></a>

## Return Value

True if the system is running under the given performance profile. If the profile isn’t [sustained](../../metal/nsprocessperformanceprofile/sustained.md), the app might cause the device to throttle under a heavy workload.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertified(for:)](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

# hasPerformanceProfile: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether an app is running under a known performance profile.

## Declaration

```objectivec
- (BOOL) hasPerformanceProfile:(NSProcessPerformanceProfile) performanceProfile;
```

## Parameters

- `performanceProfile`: The desired performance profile. Choose between: [NSProcessPerformanceProfileDefault](../../metal/nsprocessperformanceprofile/default.md) and [NSProcessPerformanceProfileSustained](../../metal/nsprocessperformanceprofile/sustained.md).

<a id="return-value"></a>

## Return Value

True if the system is running under the given performance profile. If the profile isn’t [NSProcessPerformanceProfileSustained](../../metal/nsprocessperformanceprofile/sustained.md), the app might cause the device to throttle under a heavy workload.

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertifiedFor:](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [systemUptime](systemuptime.md): The amount of time the system has been awake since the last time it was restarted.

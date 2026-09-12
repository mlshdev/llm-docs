> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/processinfo/systemuptime](https://developer.apple.com/documentation/foundation/processinfo/systemuptime)

# systemUptime (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of time the system has been awake since the last time it was restarted.

## Declaration

```swift
var systemUptime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertified(for:)](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile(\_:)](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.

# systemUptime (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The amount of time the system has been awake since the last time it was restarted.

## Declaration

```objectivec
@property (readonly) NSTimeInterval systemUptime;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Getting computer information

- [processorCount](processorcount.md): The number of processing cores available on the computer.
- [activeProcessorCount](activeprocessorcount.md): The number of active processing cores available on the computer.
- [physicalMemory](physicalmemory.md): The amount of physical memory on the computer in bytes.
- [isDeviceCertifiedFor:](isdevicecertified%28for_%29.md): Indicates whether the device supports the requested performance tier.
- [hasPerformanceProfile:](hasperformanceprofile%28__%29.md): Indicates whether an app is running under a known performance profile.

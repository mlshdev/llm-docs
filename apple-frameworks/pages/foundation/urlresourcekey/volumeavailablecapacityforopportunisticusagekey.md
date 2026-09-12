> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/volumeavailablecapacityforopportunisticusagekey](https://developer.apple.com/documentation/foundation/urlresourcekey/volumeavailablecapacityforopportunisticusagekey)

# volumeAvailableCapacityForOpportunisticUsageKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).

## Declaration

```swift
static let volumeAvailableCapacityForOpportunisticUsageKey: URLResourceKey
```

## Mentioned In

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Volume capacity keys

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md): Confirm that you have enough local storage space for a large amount of data.
- [volumeAvailableCapacityKey](volumeavailablecapacitykey.md): Key for the volume’s available capacity in bytes (read-only).
- [volumeAvailableCapacityForImportantUsageKey](volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [volumeTotalCapacityKey](volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

# NSURLVolumeAvailableCapacityForOpportunisticUsageKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).

## Declaration

```objectivec
extern NSURLResourceKey const NSURLVolumeAvailableCapacityForOpportunisticUsageKey;
```

## Mentioned In

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md)

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Volume capacity keys

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md): Confirm that you have enough local storage space for a large amount of data.
- [NSURLVolumeAvailableCapacityKey](volumeavailablecapacitykey.md): Key for the volume’s available capacity in bytes (read-only).
- [NSURLVolumeAvailableCapacityForImportantUsageKey](volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [NSURLVolumeTotalCapacityKey](volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

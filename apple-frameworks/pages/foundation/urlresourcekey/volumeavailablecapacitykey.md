> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlresourcekey/volumeavailablecapacitykey](https://developer.apple.com/documentation/foundation/urlresourcekey/volumeavailablecapacitykey)

# volumeAvailableCapacityKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for the volume’s available capacity in bytes (read-only).

## Declaration

```swift
static let volumeAvailableCapacityKey: URLResourceKey
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Volume capacity keys

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md): Confirm that you have enough local storage space for a large amount of data.
- [volumeAvailableCapacityForImportantUsageKey](volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [volumeAvailableCapacityForOpportunisticUsageKey](volumeavailablecapacityforopportunisticusagekey.md): Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).
- [volumeTotalCapacityKey](volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

# NSURLVolumeAvailableCapacityKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Key for the volume’s available capacity in bytes (read-only).

## Declaration

```objectivec
extern NSURLResourceKey const NSURLVolumeAvailableCapacityKey;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This API has the potential of being misused to access device signals to try to identify the device or user, also known as fingerprinting. Regardless of whether a user gives your app permission to track, fingerprinting is not allowed. When you use this API in your app or third-party SDK (an SDK not provided by Apple), declare your usage and the reason for using the API in your app or third-party SDK’s `PrivacyInfo.xcprivacy` file. For more information, including the list of valid reasons for using the API, see [Describing use of required reason API](../../bundleresources/describing-use-of-required-reason-api.md).

## See Also

### Volume capacity keys

- [Checking Volume Storage Capacity](../checking-volume-storage-capacity.md): Confirm that you have enough local storage space for a large amount of data.
- [NSURLVolumeAvailableCapacityForImportantUsageKey](volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [NSURLVolumeAvailableCapacityForOpportunisticUsageKey](volumeavailablecapacityforopportunisticusagekey.md): Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).
- [NSURLVolumeTotalCapacityKey](volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/checking-volume-storage-capacity](https://developer.apple.com/documentation/foundation/checking-volume-storage-capacity)

# Checking Volume Storage Capacity (Swift)

**Framework:** Foundation  
**Kind:** Article

Confirm that you have enough local storage space for a large amount of data.

<a id="overview"></a>

## Overview

Before you try to store a large amount of data locally, first verify that you have sufficient storage capacity. To get the storage capacity of a volume, you construct a URL (using an instance of [URL](url.md))  that references an object on the volume to be queried, and then query that volume.

<a id="Decide-Which-Query-Type-to-Use"></a>

### Decide Which Query Type to Use

The query type to use depends on what’s being stored. If you’re storing data based on a user request or resources the app requires to function properly (for example, a video the user is about to watch or resources that are needed for the next level in a game), query against [volumeAvailableCapacityForImportantUsageKey](urlresourcekey/volumeavailablecapacityforimportantusagekey.md). However, if you’re downloading data in a more predictive manner (for example, downloading a newly available episode of a TV series that the user has been watching recently), query against [volumeAvailableCapacityForOpportunisticUsageKey](urlresourcekey/volumeavailablecapacityforopportunisticusagekey.md).

<a id="Construct-a-Query"></a>

### Construct a Query

Use this example as a guide to construct your own query:

**Swift**

```swift
let fileURL = URL(fileURLWithPath:"/")
do {
    let values = try fileURL.resourceValues(forKeys: [.volumeAvailableCapacityForImportantUsageKey])
    if let capacity = values.volumeAvailableCapacityForImportantUsage {
        print("Available capacity for important usage: \(capacity)")
    } else {
        print("Capacity is unavailable")
    }
} catch {
    print("Error retrieving capacity: \(error.localizedDescription)")
}
```

**Objective-C**

```objc
NSURL *fileURL = [[NSURL alloc] initFileURLWithPath:@"/"];
NSError *error = nil;
NSDictionary *results = [fileURL resourceValuesForKeys:@[NSURLVolumeAvailableCapacityForImportantUsageKey] error:&error];
if (!results) {
    NSLog(@"Error retrieving resource keys: %@\n%@", [error localizedDescription], [error userInfo]);
    abort();
}
NSLog(@"Available capacity for important usage: %@", results[NSURLVolumeAvailableCapacityForImportantUsageKey]);
```

## See Also

### Volume capacity keys

- [volumeAvailableCapacityKey](urlresourcekey/volumeavailablecapacitykey.md): Key for the volume’s available capacity in bytes (read-only).
- [volumeAvailableCapacityForImportantUsageKey](urlresourcekey/volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [volumeAvailableCapacityForOpportunisticUsageKey](urlresourcekey/volumeavailablecapacityforopportunisticusagekey.md): Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).
- [volumeTotalCapacityKey](urlresourcekey/volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

# Checking Volume Storage Capacity (Objective-C)

**Framework:** Foundation  
**Kind:** Article

Confirm that you have enough local storage space for a large amount of data.

<a id="overview"></a>

## Overview

Before you try to store a large amount of data locally, first verify that you have sufficient storage capacity. To get the storage capacity of a volume, you construct a URL (using an instance of [URL](url.md))  that references an object on the volume to be queried, and then query that volume.

<a id="Decide-Which-Query-Type-to-Use"></a>

### Decide Which Query Type to Use

The query type to use depends on what’s being stored. If you’re storing data based on a user request or resources the app requires to function properly (for example, a video the user is about to watch or resources that are needed for the next level in a game), query against [NSURLVolumeAvailableCapacityForImportantUsageKey](urlresourcekey/volumeavailablecapacityforimportantusagekey.md). However, if you’re downloading data in a more predictive manner (for example, downloading a newly available episode of a TV series that the user has been watching recently), query against [NSURLVolumeAvailableCapacityForOpportunisticUsageKey](urlresourcekey/volumeavailablecapacityforopportunisticusagekey.md).

<a id="Construct-a-Query"></a>

### Construct a Query

Use this example as a guide to construct your own query:

**Swift**

```swift
let fileURL = URL(fileURLWithPath:"/")
do {
    let values = try fileURL.resourceValues(forKeys: [.volumeAvailableCapacityForImportantUsageKey])
    if let capacity = values.volumeAvailableCapacityForImportantUsage {
        print("Available capacity for important usage: \(capacity)")
    } else {
        print("Capacity is unavailable")
    }
} catch {
    print("Error retrieving capacity: \(error.localizedDescription)")
}
```

**Objective-C**

```objc
NSURL *fileURL = [[NSURL alloc] initFileURLWithPath:@"/"];
NSError *error = nil;
NSDictionary *results = [fileURL resourceValuesForKeys:@[NSURLVolumeAvailableCapacityForImportantUsageKey] error:&error];
if (!results) {
    NSLog(@"Error retrieving resource keys: %@\n%@", [error localizedDescription], [error userInfo]);
    abort();
}
NSLog(@"Available capacity for important usage: %@", results[NSURLVolumeAvailableCapacityForImportantUsageKey]);
```

## See Also

### Volume capacity keys

- [NSURLVolumeAvailableCapacityKey](urlresourcekey/volumeavailablecapacitykey.md): Key for the volume’s available capacity in bytes (read-only).
- [NSURLVolumeAvailableCapacityForImportantUsageKey](urlresourcekey/volumeavailablecapacityforimportantusagekey.md): Key for the volume’s available capacity in bytes for storing important resources (read-only).
- [NSURLVolumeAvailableCapacityForOpportunisticUsageKey](urlresourcekey/volumeavailablecapacityforopportunisticusagekey.md): Key for the volume’s available capacity in bytes for storing nonessential resources (read-only).
- [NSURLVolumeTotalCapacityKey](urlresourcekey/volumetotalcapacitykey.md): Key for the volume’s total capacity in bytes (read-only).

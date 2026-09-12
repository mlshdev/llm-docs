> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager](https://developer.apple.com/documentation/coretelephony/ctslicingmanager)

# CTSlicingManager

**Framework:** Core Telephony  
**Kind:** Class  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

A manager that provides network-slicing capabilities for controlling and monitoring cellular network traffic routing.

## Declaration

```swift
final class CTSlicingManager
```

<a id="Overview"></a>

## Overview

Use `CTSlicingManager` to control how your app’s network traffic routes through cellular network slices. Network slicing allows carriers to partition their network resources to provide different levels of service quality for specific types of apps. For example, a gaming slice might prioritize low latency, and a streaming slice might focus on consistent bandwidth. Your app can activate a preferred slice to ensure its traffic receives the appropriate quality of service.

> **Important**

> Network slice availability depends on carrier support, your app’s entitlements, and current network conditions. Be sure to check [availableSliceAppCategories](ctslicingmanager/availablesliceappcategories.md) before attempting to activate a slice.

Query [availableSliceAppCategories](ctslicingmanager/availablesliceappcategories.md) to discover which slice categories your app can use.

```swift
let manager = CTSlicingManager.shared
do {
    let categories = try await manager.availableSliceAppCategories
    if categories.contains(.gaming) {
        // The gaming slice is available.
    }
} catch {
    // Handle the error.
}
```

Activate your preferred slice before creating network connections. New connections automatically route through the activated slice. Call [activatePreferredSliceForCategory(\_:)](ctslicingmanager/activatepreferredsliceforcategory%28__%29.md) before establishing network connections.

```swift
do {
    try await manager.activatePreferredSliceForCategory(.gaming)
    // Establish your network connections.
} catch POSIXError.ENOTSUP {
    // Network slicing isn't available.
} catch {
    // Handle other errors.
}
```

Query [activeSlices](ctslicingmanager/activeslices.md) to verify activation and monitor network slice usage.

```swift
do {
    let slices = try await manager.activeSlices
    for slice in slices {
        print("Category: \(slice.appCategory)")
        print("Traffic Class: \(slice.trafficClass)")
        print("Interface: \(slice.networkInterfaceName)")
    }
} catch {
    // Handle the error.
}
```

Call [disableSlicing()](ctslicingmanager/disableslicing%28%29.md) to return to the default cellular connection when you no longer need slice-specific routing.

```swift
do {
    try await manager.disableSlicing()
    // New connections use the default cellular internet.
} catch {
    // Handle the error.
}
```

## Topics

### Getting the shared instance

- [shared](ctslicingmanager/shared.md): A shared singleton instance for accessing network slicing functionality.

### Querying available slices

- [availableSliceAppCategories](ctslicingmanager/availablesliceappcategories.md): Network-slicing app categories available to your app.

### Managing network slicing

- [activatePreferredSliceForCategory(\_:)](ctslicingmanager/activatepreferredsliceforcategory%28__%29.md): Activates a preferred network slice for new connections.
- [disableSlicing()](ctslicingmanager/disableslicing%28%29.md): Disables network slicing for new connections.

### Monitoring active slices

- [activeSlices](ctslicingmanager/activeslices.md): Information about currently active network slices on the device.

### Representing slice information

- [CTSlicingManager.Slice](ctslicingmanager/slice.md): Information about an active network slice.

### Representing app categories

- [CTSlicingManager.AppCategory](ctslicingmanager/appcategory.md): App categories for network slicing.

### Representing traffic classification

- [CTSlicingManager.TrafficClass](ctslicingmanager/trafficclass.md): Quality-of-service classes for routing network traffic.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

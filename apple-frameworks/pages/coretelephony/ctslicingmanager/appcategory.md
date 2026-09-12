> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctslicingmanager/appcategory](https://developer.apple.com/documentation/coretelephony/ctslicingmanager/appcategory)

# CTSlicingManager.AppCategory

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 26.3+ · iPadOS 26.3+ · Mac Catalyst 26.3+

App categories for network slicing.

## Declaration

```swift
enum AppCategory
```

<a id="Discussion"></a>

## Discussion

Network slicing allows carriers to optimize their network for specific types of apps. The `AppCategory` enumeration defines the supported app types that can use network slicing.

A category is available for use only when you meet all of the following conditions:

- The carrier’s network supports the specific slice category (for example, a carrier may support communication slices, but not gaming slices).
- Your app has the appropriate entitlements for that category. To enable network slicing, you need to set the [5G Network Slicing Traffic Category](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.networking.slicing.trafficcategory) entitlement.
- The device and network conditions allow network slicing.

Always check [availableSliceAppCategories](availablesliceappcategories.md) before attempting to activate a category because availability depends on both carrier network support and your app’s entitlements.

## Topics

### App categories

- [CTSlicingManager.AppCategory.gaming](appcategory/gaming.md): An application category for gaming traffic requiring low latency.
- [CTSlicingManager.AppCategory.communication](appcategory/communication.md): An application category for voice, video calling, and messaging services.
- [CTSlicingManager.AppCategory.streaming](appcategory/streaming.md): An application category for audio and video streaming services.

### Category information

- [description](appcategory/description.md): A string representation of the application category.

### Enumeration Cases

- [CTSlicingManager.AppCategory.missionCritical](appcategory/missioncritical.md): An application category for mission-critical applications requiring guaranteed reliability.

### Type Properties

- [allCases](appcategory/allcases.md): All application categories supported at the current OS version.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

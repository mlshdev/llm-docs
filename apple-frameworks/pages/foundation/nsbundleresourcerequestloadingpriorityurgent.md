> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequestloadingpriorityurgent](https://developer.apple.com/documentation/foundation/nsbundleresourcerequestloadingpriorityurgent)

# NSBundleResourceRequestLoadingPriorityUrgent (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

> Use Background Assets instead.

## Declaration

```swift
let NSBundleResourceRequestLoadingPriorityUrgent: Double
```

<a id="Discussion"></a>

## Discussion

A special value for loading priority informing the system that the user cannot continue until the resources marked with the tags managed by the request are downloaded. The system will dedicate the maximum amount of capacity to completing the resource request.

## See Also

### Setting the download priority

- [loadingPriority](nsbundleresourcerequest/loadingpriority.md): Deprecated. A hint to the system of the relative priority of the resource request.

# NSBundleResourceRequestLoadingPriorityUrgent (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

> Use Background Assets instead.

## Declaration

```objectivec
extern const double NSBundleResourceRequestLoadingPriorityUrgent;
```

<a id="Discussion"></a>

## Discussion

A special value for loading priority informing the system that the user cannot continue until the resources marked with the tags managed by the request are downloaded. The system will dedicate the maximum amount of capacity to completing the resource request.

## See Also

### Setting the download priority

- [loadingPriority](nsbundleresourcerequest/loadingpriority.md): Deprecated. A hint to the system of the relative priority of the resource request.

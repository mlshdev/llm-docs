> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/loadingpriority](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/loadingpriority)

# loadingPriority (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A hint to the system of the relative priority of the resource request.

> Use Background Assets instead.

## Declaration

```swift
var loadingPriority: Double { get set }
```

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` and `1.0` or the special constant [NSBundleResourceRequestLoadingPriorityUrgent](../nsbundleresourcerequestloadingpriorityurgent.md). The default is `0.5`. The system will attempt to give higher priority to requests with higher values. You can change the priority at any time, including during downloading of the managed resources.

## See Also

### Setting the download priority

- [NSBundleResourceRequestLoadingPriorityUrgent](../nsbundleresourcerequestloadingpriorityurgent.md): Deprecated.

# loadingPriority (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A hint to the system of the relative priority of the resource request.

> Use Background Assets instead.

## Declaration

```objectivec
@property double loadingPriority;
```

<a id="Discussion"></a>

## Discussion

Possible values are between `0.0` and `1.0` or the special constant [NSBundleResourceRequestLoadingPriorityUrgent](../nsbundleresourcerequestloadingpriorityurgent.md). The default is `0.5`. The system will attempt to give higher priority to requests with higher values. You can change the priority at any time, including during downloading of the managed resources.

## See Also

### Setting the download priority

- [NSBundleResourceRequestLoadingPriorityUrgent](../nsbundleresourcerequestloadingpriorityurgent.md): Deprecated.

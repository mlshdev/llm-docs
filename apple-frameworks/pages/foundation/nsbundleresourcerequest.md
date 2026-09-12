> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest)

# NSBundleResourceRequest (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A resource manager you use to download content hosted on the App Store at the time your app needs it.

> Use Background Assets instead.

## Declaration

```swift
class NSBundleResourceRequest
```

<a id="overview"></a>

## Overview

You identify on-demand resources during development by creating string identifiers known as tags and assigning one or more tags to each resource. An [NSBundleResourceRequest](nsbundleresourcerequest.md) object manages the resources marked by one or more tags.

You use the resource request to inform the system when the managed tags are needed and when you have finished accessing them. The resource request manages the downloading of any resources marked with the managed tags that are not already on the device and informs your app when the resources are ready for use.

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

The system will not attempt to purge the resources marked with a tag from on-device storage as long as at least one [NSBundleResourceRequest](nsbundleresourcerequest.md) object is managing the tag. Apps can access resources after the completion handler of either [beginAccessingResources(completionHandler:)](nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md) or [conditionallyBeginAccessingResources(completionHandler:)](nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md) is called successfully. Management ends after a call to [endAccessingResources()](nsbundleresourcerequest/endaccessingresources%28%29.md) or after the resource request object is deallocated.

Other properties and methods let you track the progress of a download, change the priority of a download, and check whether the resources marked by a set of tags are already on the device. Methods in [Bundle](bundle.md) indicate to the system the relative importance of preserving a tag in memory after it is no longer in use. For more information, see [setPreservationPriority(\_:forTags:)](bundle/setpreservationpriority%28__fortags_%29.md) and [preservationPriority(forTag:)](bundle/preservationpriority%28fortag_%29.md).

> **Important**

>  An [NSBundleResourceRequest](nsbundleresourcerequest.md) object can only be used for one successful resource request.

## Topics

### Initializing a resource request

- [init(tags:)](nsbundleresourcerequest/init%28tags_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.
- [init(tags:bundle:)](nsbundleresourcerequest/init%28tags_bundle_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.

### Accessing the configuration

- [bundle](nsbundleresourcerequest/bundle.md): Deprecated. A reference to the bundle used for storing the downloaded resources. (read-only)
- [tags](nsbundleresourcerequest/tags.md): Deprecated. A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)

### Requesting resources

- [beginAccessingResources(completionHandler:)](nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [conditionallyBeginAccessingResources(completionHandler:)](nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.
- [endAccessingResources()](nsbundleresourcerequest/endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

### Setting the download priority

- [loadingPriority](nsbundleresourcerequest/loadingpriority.md): Deprecated. A hint to the system of the relative priority of the resource request.
- [NSBundleResourceRequestLoadingPriorityUrgent](nsbundleresourcerequestloadingpriorityurgent.md): Deprecated.

### Tracking progress

- [progress](nsbundleresourcerequest/progress.md): Deprecated. A reference to the progress object associated with the specified resource request. (read-only)

### Errors

- [NSBundleErrorMaximum](nsbundleerrormaximum-swift.var.md): The end of the range of error codes reserved for bundle errors.
- [NSBundleErrorMinimum](nsbundleerrorminimum-swift.var.md): The start of the range of error codes reserved for bundle errors.
- [NSBundleOnDemandResourceExceededMaximumSizeError](nsbundleondemandresourceexceededmaximumsizeerror-swift.var.md): The application exceeded the amount of on-demand resources content in use at one time.
- [NSBundleOnDemandResourceInvalidTagError](nsbundleondemandresourceinvalidtagerror-swift.var.md): The application specified a tag that the system couldn’t find in the application tag manifest.
- [NSBundleOnDemandResourceOutOfSpaceError](nsbundleondemandresourceoutofspaceerror-swift.var.md): Insufficient space available to download the requested on-demand resources.

### Working with notifications

- [NSBundleResourceRequestLowDiskSpace](nsnotification/name-swift.struct/nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.

### Working with notification messages

- [NSBundleResourceRequest.LowDiskSpaceMessage](nsbundleresourcerequest/lowdiskspacemessage.md): Deprecated. A message the system sends when it detects the amount of available disk space getting low.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](progressreporting.md)

# NSBundleResourceRequest (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A resource manager you use to download content hosted on the App Store at the time your app needs it.

> Use Background Assets instead.

## Declaration

```objectivec
@interface NSBundleResourceRequest : NSObject
```

<a id="overview"></a>

## Overview

You identify on-demand resources during development by creating string identifiers known as tags and assigning one or more tags to each resource. An [NSBundleResourceRequest](nsbundleresourcerequest.md) object manages the resources marked by one or more tags.

You use the resource request to inform the system when the managed tags are needed and when you have finished accessing them. The resource request manages the downloading of any resources marked with the managed tags that are not already on the device and informs your app when the resources are ready for use.

> **Note**

>  This class ignores calls from Mac apps built with Mac Catalyst.

The system will not attempt to purge the resources marked with a tag from on-device storage as long as at least one [NSBundleResourceRequest](nsbundleresourcerequest.md) object is managing the tag. Apps can access resources after the completion handler of either [beginAccessingResourcesWithCompletionHandler:](nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md) or [conditionallyBeginAccessingResourcesWithCompletionHandler:](nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md) is called successfully. Management ends after a call to [endAccessingResources](nsbundleresourcerequest/endaccessingresources%28%29.md) or after the resource request object is deallocated.

Other properties and methods let you track the progress of a download, change the priority of a download, and check whether the resources marked by a set of tags are already on the device. Methods in [NSBundle](bundle.md) indicate to the system the relative importance of preserving a tag in memory after it is no longer in use. For more information, see [setPreservationPriority:forTags:](bundle/setpreservationpriority%28__fortags_%29.md) and [preservationPriorityForTag:](bundle/preservationpriority%28fortag_%29.md).

> **Important**

>  An [NSBundleResourceRequest](nsbundleresourcerequest.md) object can only be used for one successful resource request.

## Topics

### Initializing a resource request

- [initWithTags:](nsbundleresourcerequest/init%28tags_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the main bundle.
- [initWithTags:bundle:](nsbundleresourcerequest/init%28tags_bundle_%29.md): Deprecated. Initializes a resource request for managing the on-demand resources marked with any of the set of specified tags. The managed resources are loaded into the specified bundle.

### Accessing the configuration

- [bundle](nsbundleresourcerequest/bundle.md): Deprecated. A reference to the bundle used for storing the downloaded resources. (read-only)
- [tags](nsbundleresourcerequest/tags.md): Deprecated. A set of strings, with each string specifying a tag used to mark on-demand resources managed by the request. (read-only)

### Requesting resources

- [beginAccessingResourcesWithCompletionHandler:](nsbundleresourcerequest/beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [conditionallyBeginAccessingResourcesWithCompletionHandler:](nsbundleresourcerequest/conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.
- [endAccessingResources](nsbundleresourcerequest/endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

### Setting the download priority

- [loadingPriority](nsbundleresourcerequest/loadingpriority.md): Deprecated. A hint to the system of the relative priority of the resource request.
- [NSBundleResourceRequestLoadingPriorityUrgent](nsbundleresourcerequestloadingpriorityurgent.md): Deprecated.

### Tracking progress

- [progress](nsbundleresourcerequest/progress.md): Deprecated. A reference to the progress object associated with the specified resource request. (read-only)

### Errors

- [NSBundleErrorMaximum](nsbundleerrormaximum-c.enum.case.md): The end of the range of error codes reserved for bundle errors.
- [NSBundleErrorMinimum](nsbundleerrorminimum-c.enum.case.md): The start of the range of error codes reserved for bundle errors.
- [NSBundleOnDemandResourceExceededMaximumSizeError](nsbundleondemandresourceexceededmaximumsizeerror-c.enum.case.md): The application exceeded the amount of on-demand resources content in use at one time.
- [NSBundleOnDemandResourceInvalidTagError](nsbundleondemandresourceinvalidtagerror-c.enum.case.md): The application specified a tag that the system couldn’t find in the application tag manifest.
- [NSBundleOnDemandResourceOutOfSpaceError](nsbundleondemandresourceoutofspaceerror-c.enum.case.md): Insufficient space available to download the requested On Demand Resources.

### Working with notifications

- [NSBundleResourceRequestLowDiskSpaceNotification](nsnotification/name-swift.struct/nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSProgressReporting](progressreporting.md)

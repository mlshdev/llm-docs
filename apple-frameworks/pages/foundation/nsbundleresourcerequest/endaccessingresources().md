> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/endaccessingresources()](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/endaccessingresources())

# endAccessingResources() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Informs the system that you have finished accessing the resources marked with the tags managed by the request.

> Use Background Assets instead.

## Declaration

```swift
func endAccessingResources()
```

<a id="Discussion"></a>

## Discussion

Call this method as soon as you have finished using the tags managed by this request. If needed, this method will be called by the system when the resource request object is deallocated.

> **Important**

>  The callback from [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md) or [conditionallyBeginAccessingResources(completionHandler:)](conditionallybeginaccessingresources%28completionhandler_%29.md) must have completed before calling [endAccessingResources()](endaccessingresources%28%29.md).

## See Also

### Requesting resources

- [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [conditionallyBeginAccessingResources(completionHandler:)](conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.

# endAccessingResources (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Informs the system that you have finished accessing the resources marked with the tags managed by the request.

> Use Background Assets instead.

## Declaration

```objectivec
- (void) endAccessingResources;
```

<a id="Discussion"></a>

## Discussion

Call this method as soon as you have finished using the tags managed by this request. If needed, this method will be called by the system when the resource request object is deallocated.

> **Important**

>  The callback from [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md) or [conditionallyBeginAccessingResourcesWithCompletionHandler:](conditionallybeginaccessingresources%28completionhandler_%29.md) must have completed before calling [endAccessingResources](endaccessingresources%28%29.md).

## See Also

### Requesting resources

- [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [conditionallyBeginAccessingResourcesWithCompletionHandler:](conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.

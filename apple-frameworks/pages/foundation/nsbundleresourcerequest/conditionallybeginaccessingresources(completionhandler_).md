> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/conditionallybeginaccessingresources(completionhandler:)](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/conditionallybeginaccessingresources(completionhandler:))

# conditionallyBeginAccessingResources(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.

> Use Background Assets instead.

## Declaration

```swift
func conditionallyBeginAccessingResources(completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func conditionallyBeginAccessingResources() async -> Bool
```

## Parameters

- `completionHandler`: A block called when the availability of the resources has been checked.

  The block takes the following parameter:

  - **resourcesAvailable**: Returns [true](https://developer.apple.com/documentation/swift/true) if all of the resources marked with the tags managed by the request are already on the device. Returns [false](https://developer.apple.com/documentation/swift/false) if any of the resources are not on the device.

<a id="Discussion"></a>

## Discussion

If the resources marked with the tags managed by the request are already on the device, you can start accessing them as soon as the completion handler is called with `resourcesAvailable` set to [true](https://developer.apple.com/documentation/swift/true). If all of the resources are not already available, you need to call [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md) to download them from the App Store.

> **Important**

>  If `resourcesAvailable` is [true](https://developer.apple.com/documentation/swift/true), do not call [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md). You must call this method or [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md) before accessing any resources marked with the tags managed by the request.

## See Also

### Requesting resources

- [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [endAccessingResources()](endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

# conditionallyBeginAccessingResourcesWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.

> Use Background Assets instead.

## Declaration

```objectivec
- (void) conditionallyBeginAccessingResourcesWithCompletionHandler:(void (^)(BOOL resourcesAvailable)) completionHandler;
```

## Parameters

- `completionHandler`: A block called when the availability of the resources has been checked.

  The block takes the following parameter:

  - **resourcesAvailable**: Returns [true](https://developer.apple.com/documentation/swift/true) if all of the resources marked with the tags managed by the request are already on the device. Returns [false](https://developer.apple.com/documentation/swift/false) if any of the resources are not on the device.

<a id="Discussion"></a>

## Discussion

If the resources marked with the tags managed by the request are already on the device, you can start accessing them as soon as the completion handler is called with `resourcesAvailable` set to [true](https://developer.apple.com/documentation/swift/true). If all of the resources are not already available, you need to call [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md) to download them from the App Store.

> **Important**

>  If `resourcesAvailable` is [true](https://developer.apple.com/documentation/swift/true), do not call [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md). You must call this method or [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md) before accessing any resources marked with the tags managed by the request.

## See Also

### Requesting resources

- [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.
- [endAccessingResources](endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

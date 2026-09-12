> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/beginaccessingresources(completionhandler:)](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/beginaccessingresources(completionhandler:))

# beginAccessingResources(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.

> Use Background Assets instead.

## Declaration

```swift
func beginAccessingResources(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func beginAccessingResources() async throws
```

## Parameters

- `completionHandler`: A block called when the resources have finished downloading or if an error occurs. The resources are not available until the completion handler is called with `error` set to `nil`.

  The block takes the following parameter:

  - **error**: Set to `nil` if the resources are downloaded successfully; otherwise this parameter holds an [NSError](../nserror.md) object describing the problem that occurred. Errors are usually due to a lack of free space or problems connecting with the App Store.

<a id="Discussion"></a>

## Discussion

After calling this method, the resource request downloads any on-demand resources not already on the device. When all the resources are downloaded, they are marked as non-purgeable. The resources are not available to the app until the completion handler is called with no error.

> **Important**

>  You must call this method or [conditionallyBeginAccessingResources(completionHandler:)](conditionallybeginaccessingresources%28completionhandler_%29.md) before accessing any resources marked with the tags managed by the request.

## See Also

### Requesting resources

- [conditionallyBeginAccessingResources(completionHandler:)](conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.
- [endAccessingResources()](endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

# beginAccessingResourcesWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.

> Use Background Assets instead.

## Declaration

```objectivec
- (void) beginAccessingResourcesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block called when the resources have finished downloading or if an error occurs. The resources are not available until the completion handler is called with `error` set to `nil`.

  The block takes the following parameter:

  - **error**: Set to `nil` if the resources are downloaded successfully; otherwise this parameter holds an [NSError](../nserror.md) object describing the problem that occurred. Errors are usually due to a lack of free space or problems connecting with the App Store.

<a id="Discussion"></a>

## Discussion

After calling this method, the resource request downloads any on-demand resources not already on the device. When all the resources are downloaded, they are marked as non-purgeable. The resources are not available to the app until the completion handler is called with no error.

> **Important**

>  You must call this method or [conditionallyBeginAccessingResourcesWithCompletionHandler:](conditionallybeginaccessingresources%28completionhandler_%29.md) before accessing any resources marked with the tags managed by the request.

## See Also

### Requesting resources

- [conditionallyBeginAccessingResourcesWithCompletionHandler:](conditionallybeginaccessingresources%28completionhandler_%29.md): Deprecated. Checks whether the resources marked with the tags managed by the request are already on the device. If all of the resources are on the device, you can begin accessing those resources.
- [endAccessingResources](endaccessingresources%28%29.md): Deprecated. Informs the system that you have finished accessing the resources marked with the tags managed by the request.

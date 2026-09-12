> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsbundleresourcerequest/progress](https://developer.apple.com/documentation/foundation/nsbundleresourcerequest/progress)

# progress (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A reference to the progress object associated with the specified resource request. (read-only)

> Use Background Assets instead.

## Declaration

```swift
var progress: Progress { get }
```

<a id="Discussion"></a>

## Discussion

This [Progress](../progress.md) object will begin updating after [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md) is called.

## See Also

### Related Documentation

- [beginAccessingResources(completionHandler:)](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.

# progress (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

A reference to the progress object associated with the specified resource request. (read-only)

> Use Background Assets instead.

## Declaration

```objectivec
@property (strong, readonly) NSProgress * progress;
```

<a id="Discussion"></a>

## Discussion

This [NSProgress](../progress.md) object will begin updating after [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md) is called.

## See Also

### Related Documentation

- [beginAccessingResourcesWithCompletionHandler:](beginaccessingresources%28completionhandler_%29.md): Deprecated. Requests access to the resources marked with the managed tags. If any of the resources are not on the device, they are requested from the App Store.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/init(completionhandler:)](https://developer.apple.com/documentation/vision/vnrequest/init(completionhandler:))

# init(completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new Vision request with an optional completion handler.

## Declaration

```swift
init(completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `completionHandler`: The block to invoke after the request finishes processing.

<a id="Discussion"></a>

## Discussion

Vision executes the completion handler on the same queue that it executes the request; however, this queue differs from the one where you called [perform(\_:)](../vnimagerequesthandler/perform%28__%29.md).

## See Also

### Initializing a Request

- [init()](init%28%29.md): Creates a new Vision request with no completion handler.

# initWithCompletionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new Vision request with an optional completion handler.

## Declaration

```objectivec
- (instancetype) initWithCompletionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The block to invoke after the request finishes processing.

<a id="Discussion"></a>

## Discussion

Vision executes the completion handler on the same queue that it executes the request; however, this queue differs from the one where you called [performRequests:error:](../vnimagerequesthandler/perform%28__%29.md).

## See Also

### Initializing a Request

- [init](init%28%29.md): Creates a new Vision request with no completion handler.

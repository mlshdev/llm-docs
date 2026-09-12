> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeneratepersonsegmentationrequest/init(completionhandler:)](https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest/init(completionhandler:))

# init(completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a generate person segmentation request with a completion handler.

## Declaration

```swift
init(completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `completionHandler`: A completion handler that processes the resuts of the request.

## See Also

### Creating a Request

- [init()](init%28%29.md): Creates a generate person segmentation request.

# initWithCompletionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a generate person segmentation request with a completion handler.

## Declaration

```objectivec
- (instancetype) initWithCompletionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler that processes the resuts of the request.

## See Also

### Creating a Request

- [init](init%28%29.md): Creates a generate person segmentation request.
- [new](new.md): Returns a new generate person segmentation request.

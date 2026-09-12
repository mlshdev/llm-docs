> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackhomographicimageregistrationrequest/init(completionhandler:)](https://developer.apple.com/documentation/vision/vntrackhomographicimageregistrationrequest/init(completionhandler:))

# init(completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new request that tracks the homographic transformation of two images, with a system callback on completion.

## Declaration

```swift
init(completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `completionHandler`: The callback the system invokes when it completes the request.

## See Also

### Creating a Homographic Image

- [init()](init%28%29.md): Creates a new request that tracks the homographic transformation of two images.

# initWithCompletionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new request that tracks the homographic transformation of two images, with a system callback on completion.

## Declaration

```objectivec
- (instancetype) initWithCompletionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The callback the system invokes when it completes the request.

## See Also

### Creating a Homographic Image

- [init](init%28%29.md): Creates a new request that tracks the homographic transformation of two images.

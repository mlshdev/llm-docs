> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodypose3drequest/init(completionhandler:)](https://developer.apple.com/documentation/vision/vndetecthumanbodypose3drequest/init(completionhandler:))

# init(completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new 3D body pose request with a completion handler.

## Declaration

```swift
init(completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `completionHandler`: The block to invoke after the request finishes processing.

## See Also

### Initializing a Request

- [init()](init%28%29.md): Creates a new request with no completion handler.

# initWithCompletionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new 3D body pose request with a completion handler.

## Declaration

```objectivec
- (instancetype) initWithCompletionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The block to invoke after the request finishes processing.

## See Also

### Initializing a Request

- [init](init%28%29.md): Creates a new request with no completion handler.

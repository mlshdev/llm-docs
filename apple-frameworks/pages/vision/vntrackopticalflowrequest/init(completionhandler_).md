> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vntrackopticalflowrequest/init(completionhandler:)

# init(completionHandler:) (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new request that tracks the optical from one image to another, with a system callback on completion.

## Declaration

```swift
init(completionHandler: VNRequestCompletionHandler? = nil)
```

## Parameters

- `completionHandler`: The callback the system invokes when it completes the request.

## See Also

### Creating an Optical Flow

- [init()](init%28%29.md): Creates a new request that tracks the optical from one image to another.

# initWithCompletionHandler: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates a new request that tracks the optical from one image to another, with a system callback on completion.

## Declaration

```objectivec
- (instancetype) initWithCompletionHandler:(VNRequestCompletionHandler) completionHandler;
```

## Parameters

- `completionHandler`: The callback the system invokes when it completes the request.

## See Also

### Creating an Optical Flow

- [init](init%28%29.md): Creates a new request that tracks the optical from one image to another.

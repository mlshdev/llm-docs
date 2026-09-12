> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergeneratorbatch/makedataready(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergeneratorbatch/makedataready(completionhandler:))

# makeDataReady(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Loads sample data asynchronously for all sample buffers within a batch.

## Declaration

```swift
func makeDataReady(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func makeDataReady() async throws
```

## Parameters

- `completionHandler`: A callback the system invokes once when all sample buffers in the batch are data-ready, or when an error occurs.

<a id="Discussion"></a>

## Discussion

Calling this method more than once on a batch generates an exception.

# makeDataReadyWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Loads sample data asynchronously for all sample buffers within a batch.

## Declaration

```objectivec
- (void) makeDataReadyWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A callback the system invokes once when all sample buffers in the batch are data-ready, or when an error occurs.

<a id="Discussion"></a>

## Discussion

Calling this method more than once on a batch generates an exception.

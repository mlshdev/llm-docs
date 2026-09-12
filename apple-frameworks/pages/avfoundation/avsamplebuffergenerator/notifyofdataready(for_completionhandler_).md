> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/notifyofdataready(for:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/notifyofdataready(for:completionhandler:))

# notifyOfDataReady(for:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Notifies the sample buffer generator when data is ready for the sample buffer reference or an error has occurred.

## Declaration

```swift
class func notifyOfDataReady(for sbuf: CMSampleBuffer, completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
class func notifyOfDataReady(for sbuf: CMSampleBuffer) async throws
```

## Parameters

- `sbuf`: The `CMSampleBufferRef`.
- `completionHandler`: A completion block that is called when data is ready for the sample buffer or an error occurs. The `dataReady` argument is [true](https://developer.apple.com/documentation/swift/true) if data is read for the sample buffer. If an error occurs, the `error` argument contains the `NSError` object.

# notifyOfDataReadyForSampleBuffer:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Notifies the sample buffer generator when data is ready for the sample buffer reference or an error has occurred.

## Declaration

```objectivec
+ (void) notifyOfDataReadyForSampleBuffer:(CMSampleBufferRef) sbuf completionHandler:(void (^)(BOOL dataReady, NSError *error)) completionHandler;
```

## Parameters

- `sbuf`: The `CMSampleBufferRef`.
- `completionHandler`: A completion block that is called when data is ready for the sample buffer or an error occurs. The `dataReady` argument is [true](https://developer.apple.com/documentation/swift/true) if data is read for the sample buffer. If an error occurs, the `error` argument contains the `NSError` object.

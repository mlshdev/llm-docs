> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessionuploadtask/cancel(byproducingresumedata:)](https://developer.apple.com/documentation/foundation/urlsessionuploadtask/cancel(byproducingresumedata:))

# cancel(byProducingResumeData:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Cancels an upload and calls the completion handler with resume data for later use. resumeData will be nil if the server does not support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/

## Declaration

```swift
func cancel(byProducingResumeData completionHandler: @escaping @Sendable (Data?) -> Void)
```

```swift
func cancelByProducingResumeData() async -> Data?
```

## Parameters

- `completionHandler`: The completion handler to call when the upload has been successfully canceled.

# cancelByProducingResumeData: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Cancels an upload and calls the completion handler with resume data for later use. resumeData will be nil if the server does not support the latest resumable uploads Internet-Draft from the HTTP Working Group, found at https://datatracker.ietf.org/doc/draft-ietf-httpbis-resumable-upload/

## Declaration

```objectivec
- (void) cancelByProducingResumeData:(void (^)(NSData *resumeData)) completionHandler;
```

## Parameters

- `completionHandler`: The completion handler to call when the upload has been successfully canceled.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebufferrequest/init(start:)](https://developer.apple.com/documentation/avfoundation/avsamplebufferrequest/init(start:))

# init(start:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a newly allocated sample buffer request with the specified sample cursor.

## Declaration

```swift
init(start startCursor: AVSampleCursor)
```

## Parameters

- `startCursor`: The starting cursor position.

<a id="return-value"></a>

## Return Value

An initialized `AVSampleBufferRequest` instance.

# initWithStartCursor: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.10+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a newly allocated sample buffer request with the specified sample cursor.

## Declaration

```objectivec
- (instancetype) initWithStartCursor:(AVSampleCursor *) startCursor;
```

## Parameters

- `startCursor`: The starting cursor position.

<a id="return-value"></a>

## Return Value

An initialized `AVSampleBufferRequest` instance.

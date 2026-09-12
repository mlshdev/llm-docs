> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffermakedatareadyhandler](https://developer.apple.com/documentation/coremedia/cmsamplebuffermakedatareadyhandler)

# CMSampleBufferMakeDataReadyHandler (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A block the system calls to make the sample buffer ready for use.

## Declaration

```swift
typealias CMSampleBufferMakeDataReadyHandler = (CMSampleBuffer) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer to make ready.

# CMSampleBufferMakeDataReadyHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 13.1+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 6.0+

A block the system calls to make the sample buffer ready for use.

## Declaration

```objectivec
typedef int (^)(struct opaqueCMSampleBuffer *) CMSampleBufferMakeDataReadyHandler;
```

## Parameters

- `sbuf`: The sample buffer to make ready.

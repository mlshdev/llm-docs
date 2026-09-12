> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferinvalidatehandler](https://developer.apple.com/documentation/coremedia/cmsamplebufferinvalidatehandler)

# CMSampleBufferInvalidateHandler (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md).

## Declaration

```swift
typealias CMSampleBufferInvalidateHandler = (CMSampleBuffer) -> Void
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being invalidated.

# CMSampleBufferInvalidateHandler (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md).

## Declaration

```objectivec
typedef void (^)(struct opaqueCMSampleBuffer *) CMSampleBufferInvalidateHandler;
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being invalidated.

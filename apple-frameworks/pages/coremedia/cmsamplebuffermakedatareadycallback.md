> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffermakedatareadycallback](https://developer.apple.com/documentation/coremedia/cmsamplebuffermakedatareadycallback)

# CMSampleBufferMakeDataReadyCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md).

## Declaration

```swift
typealias CMSampleBufferMakeDataReadyCallback = (CMSampleBuffer, UnsafeMutableRawPointer?) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer to make ready.
- `makeDataReadyRefcon`: Client refcon provided to `CMSampleBufferCreate`.

  For example, it could point at info about the scheduled read that needs to be forced to finish.

<a id="Discussion"></a>

## Discussion

This callback must make the data ready (e.g. force a scheduled read to finish). If this callback succeeds and returns 0, the sample buffer will then be marked as “data ready”.

# CMSampleBufferMakeDataReadyCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md).

## Declaration

```objectivec
typedef int (*)(struct opaqueCMSampleBuffer *, void *) CMSampleBufferMakeDataReadyCallback;
```

## Parameters

- `sbuf`: The sample buffer to make ready.
- `makeDataReadyRefcon`: Client refcon provided to `CMSampleBufferCreate`.

  For example, it could point at info about the scheduled read that needs to be forced to finish.

<a id="Discussion"></a>

## Discussion

This callback must make the data ready (e.g. force a scheduled read to finish). If this callback succeeds and returns 0, the sample buffer will then be marked as “data ready”.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferinvalidatecallback](https://developer.apple.com/documentation/coremedia/cmsamplebufferinvalidatecallback)

# CMSampleBufferInvalidateCallback (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferInvalidate(\_:)](cmsamplebufferinvalidate%28__%29.md).

## Declaration

```swift
typealias CMSampleBufferInvalidateCallback = (CMSampleBuffer, UInt64) -> Void
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being invalidated.
- `invalidateRefCon`: Reference constant provided when the callback was set up.

# CMSampleBufferInvalidateCallback (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Client callback called by [CMSampleBufferInvalidate](cmsamplebufferinvalidate%28__%29.md).

## Declaration

```objectivec
typedef void (*)(struct opaqueCMSampleBuffer *, unsigned long long) CMSampleBufferInvalidateCallback;
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being invalidated.
- `invalidateRefCon`: Reference constant provided when the callback was set up.

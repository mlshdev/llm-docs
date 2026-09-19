> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/datareadiness-swift.enum/failed(_:)

# CMSampleBuffer.DataReadiness.failed(\_:)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The system failed to load the media data.

## Declaration

```swift
case failed(OSStatus)
```

## Parameters

- `status`: An `OSStatus` value that indicates the cause of the failure.

## See Also

### States

- [CMSampleBuffer.DataReadiness.notReady](notready.md): The media data isn’t ready to use.
- [CMSampleBuffer.DataReadiness.ready](ready.md): The media data is ready to use.

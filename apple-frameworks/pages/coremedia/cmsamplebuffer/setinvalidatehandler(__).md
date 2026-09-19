> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmsamplebuffer/setinvalidatehandler(_:)

# setInvalidateHandler(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a closure for the sample buffer to call when it’s invalidated.

## Declaration

```swift
func setInvalidateHandler(_ body: @escaping (CMSampleBuffer) throws -> Void) throws
```

## Parameters

- `body`: The invalidation handler.

<a id="Discussion"></a>

## Discussion

A sample buffer can only have one invalidation handler.

## See Also

### Invalidating Sample Buffers

- [isValid](isvalid.md): A Boolean value that indicates whether the sample buffer is valid.
- [invalidate()](invalidate%28%29.md): Invalidates a sample buffer by calling its invalidation handler.

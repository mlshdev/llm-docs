> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/isvalid](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/isvalid)

# isValid

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the sample buffer is valid.

## Declaration

```swift
var isValid: Bool { get }
```

## See Also

### Invalidating Sample Buffers

- [setInvalidateHandler(\_:)](setinvalidatehandler%28__%29.md): Sets a closure for the sample buffer to call when it’s invalidated.
- [invalidate()](invalidate%28%29.md): Invalidates a sample buffer by calling its invalidation handler.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/invalidate()](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/invalidate())

# invalidate()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Invalidates a sample buffer by calling its invalidation handler.

## Declaration

```swift
func invalidate() throws
```

<a id="Discussion"></a>

## Discussion

You can’t use a sample buffer after invalidating it; all of its accessors throw errors.

> **Important**

>  Don’t invalidate a sample buffer that another process is accessing concurrently.

## See Also

### Invalidating Sample Buffers

- [isValid](isvalid.md): A Boolean value that indicates whether the sample buffer is valid.
- [setInvalidateHandler(\_:)](setinvalidatehandler%28__%29.md): Sets a closure for the sample buffer to call when it’s invalidated.

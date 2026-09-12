> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer/adddebugmarker(_:range:)](https://developer.apple.com/documentation/metal/mtlbuffer/adddebugmarker(_:range:))

# addDebugMarker(\_:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS

Adds a debug marker string to a specific buffer range.

## Declaration

```swift
func addDebugMarker(_ marker: String, range: Range<Int>)
```

## Parameters

- `marker`: A string that identifies the marked buffer range.
- `range`: The range of bytes that you want to identify.

## See Also

### Debugging buffers

- [removeAllDebugMarkers()](removealldebugmarkers%28%29.md): Removes all debug marker strings from the buffer.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/copybytes(to:from:)-7zz4y

# copyBytes(to:from:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func copyBytes<DestinationType>(to buffer: UnsafeMutableBufferPointer<DestinationType>, from range: Range<DispatchData.Index>? = nil) -> Int
```

## See Also

### Copying Bytes

- [copyBytes(to:count:)](copybytes%28to_count_%29-3j0qx.md)
- [copyBytes(to:from:)](copybytes%28to_from_%29-60yai.md)

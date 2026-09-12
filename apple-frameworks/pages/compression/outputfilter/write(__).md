> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/outputfilter/write(_:)](https://developer.apple.com/documentation/compression/outputfilter/write(_:))

# write(\_:)

**Framework:** Compression  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Writes data to the output filter.

## Declaration

```swift
func write<D>(_ data: D?) throws where D : DataProtocol
```

## See Also

### Instance Methods

- [finalize()](finalize%28%29.md): Finalizes the stream by flushing all the remaining data in the stream.

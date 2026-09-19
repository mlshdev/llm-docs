> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/data/makeiterator()

# makeIterator()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an iterator over the contents of the data.

## Declaration

```swift
func makeIterator() -> Data.Iterator
```

<a id="Discussion"></a>

## Discussion

The iterator will increment byte-by-byte.

## See Also

### Iterating Over Bytes

- [Data.Iterator](iterator.md): An iterator that operates over the contents of data.
- [enumerateBytes(\_:)](enumeratebytes%28__%29.md): Deprecated. Enumerates the contents of the data’s buffer.

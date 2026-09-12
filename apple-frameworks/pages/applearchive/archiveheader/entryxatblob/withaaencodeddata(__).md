> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob/withaaencodeddata(_:)](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob/withaaencodeddata(_:))

# withAAEncodedData(\_:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

## Declaration

```swift
func withAAEncodedData<R>(_ body: (UnsafeBufferPointer<UInt8>) throws -> R) rethrows -> R
```

## See Also

### Collection Requirements

- [append(\_:)](append%28__%29.md)
- [remove(at:)](remove%28at_%29.md)
- [removeAll()](removeall%28%29.md)

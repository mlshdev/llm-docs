> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/contiguousbytes](https://developer.apple.com/documentation/foundation/contiguousbytes)

# ContiguousBytes

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A protocol that declares the type offers direct access to the underlying raw bytes in a contiguous manner.

## Declaration

```swift
protocol ContiguousBytes : ~Copyable, ~Escapable
```

## Topics

### Accessing Underlying Storage

- [withUnsafeBytes(\_:)](contiguousbytes/withunsafebytes%28__%29.md): Calls the given closure with a pointer to the underlying bytes of the type’s contiguous storage.

### Instance Methods

- [withBytes(\_:)](contiguousbytes/withbytes%28__%29.md): Calls the given closure with the contents of underlying storage.

## Relationships

### Conforming Types

- [Data](data.md)

## See Also

### Binary Data

- [Data](data.md): A byte buffer in memory.
- [DataProtocol](dataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous data buffers.
- [MutableDataProtocol](mutabledataprotocol.md): A protocol that provides consistent data access to the bytes underlying contiguous and noncontiguous mutable data buffers.

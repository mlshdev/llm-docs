> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/withunsafemutablebytes(_:)-7ac1g](https://developer.apple.com/documentation/foundation/data/withunsafemutablebytes(_:)-7ac1g)

# withUnsafeMutableBytes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+ · Swift  (deprecated in 5.0)

Mutates the raw bytes in the data’s buffer.

## Declaration

```swift
mutating func withUnsafeMutableBytes<ResultType, ContentType>(_ body: (UnsafeMutablePointer<ContentType>) throws -> ResultType) rethrows -> ResultType
```

<a id="Discussion"></a>

## Discussion

This function assumes that you are mutating the contents.

> **Warning**

>  The byte pointer argument should not be stored and used outside of the lifetime of the call to the closure.

## See Also

### Accessing Underlying Memory

- [withUnsafeBytes(\_:)](withunsafebytes%28__%29.md): Deprecated. Accesses the raw bytes in the data’s buffer.
- [copyBytes(to:count:)](copybytes%28to_count_%29.md): Copies the contents of the data to memory.
- [copyBytes(to:from:)](copybytes%28to_from_%29-8qk4r.md): Copies a subset of the contents of the data to memory.
- [copyBytes(to:from:)](copybytes%28to_from_%29-4o6zj.md): Copies the bytes in a range from the data into a buffer.

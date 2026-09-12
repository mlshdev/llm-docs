> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/contiguousbytes/withbytes(_:)](https://developer.apple.com/documentation/foundation/contiguousbytes/withbytes(_:))

# withBytes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Calls the given closure with the contents of underlying storage.

## Declaration

```swift
func withBytes<R, E>(_ body: (RawSpan) throws(E) -> R) throws(E) -> R where E : Error
```

<a id="discussion"></a>

## Discussion

> **Note**

> Calling `withBytes` multiple times does not guarantee that the same span will be passed in every time.

## Default Implementations

### ContiguousBytes Implementations

- [withBytes(\_:)](withbytes%28__%29-5qdgz.md): Calls the given closure with the contents of underlying storage.

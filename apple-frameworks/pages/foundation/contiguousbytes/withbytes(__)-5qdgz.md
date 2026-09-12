> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/contiguousbytes/withbytes(_:)-5qdgz](https://developer.apple.com/documentation/foundation/contiguousbytes/withbytes(_:)-5qdgz)

# withBytes(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 12.2+ · iPadOS 12.2+ · Mac Catalyst 12.2+ · macOS 10.14.4+ · tvOS 12.2+ · visionOS 1.0+ · watchOS 5.2+

Calls the given closure with the contents of underlying storage.

## Declaration

```swift
func withBytes<R, E>(_ body: (RawSpan) throws(E) -> R) throws(E) -> R where E : Error
```

<a id="discussion"></a>

## Discussion

> **Note**

> Calling `withBytes` multiple times does not guarantee that the same span will be passed in every time.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/inputfilter/init(_:using:buffercapacity:readingfrom:)](https://developer.apple.com/documentation/compression/inputfilter/init(_:using:buffercapacity:readingfrom:))

# init(\_:using:bufferCapacity:readingFrom:)

**Framework:** Compression  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates an input filter that can be used to compress or decompress data.

## Declaration

```swift
init(_ operation: FilterOperation, using algorithm: Algorithm, bufferCapacity: Int = 65536, readingFrom readFunc: @escaping (Int) throws -> D?) throws
```

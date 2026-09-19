> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compression/outputfilter/init(_:using:buffercapacity:writingto:)

# init(\_:using:bufferCapacity:writingTo:)

**Framework:** Compression  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

Creates an output filter that can be used to compress or decompress data.

## Declaration

```swift
init(_ operation: FilterOperation, using algorithm: Algorithm, bufferCapacity: Int = 65536, writingTo writeFunc: @escaping (Data?) throws -> Void) throws
```

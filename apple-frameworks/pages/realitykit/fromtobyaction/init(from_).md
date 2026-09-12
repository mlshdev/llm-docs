> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyaction/init(from:)](https://developer.apple.com/documentation/realitykit/fromtobyaction/init(from:))

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new instance from a decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="discussion"></a>

## Discussion

Throws an error if reading from `decoder` fails, or if the data is corrupted or otherwise invalid.

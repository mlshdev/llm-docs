> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/superdecoder()](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/superdecoder())

# superDecoder()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a nested container and returns a `Decoder` instance for decoding `super` from that container.

## Declaration

```swift
mutating func superDecoder() throws -> any Decoder
```

<a id="return-value"></a>

## Return Value

A new `Decoder` to pass to `super.init(from:)`.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.valueNotFound` if the encountered encoded value is null, or of there are no more values to decode.

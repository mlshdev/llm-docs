> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/decodingerror/keynotfound(_:_:)

# DecodingError.keyNotFound(\_:\_:)

**Framework:** Swift  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An indication that a keyed decoding container was asked for an entry for the given key, but did not contain one.

## Declaration

```swift
case keyNotFound(any CodingKey, DecodingError.Context)
```

<a id="discussion"></a>

## Discussion

As associated values, this case contains the attempted key and context for debugging.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/allkeys](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/allkeys)

# allKeys

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

All the keys the `Decoder` has for this container.

## Declaration

```swift
var allKeys: [Self.Key] { get }
```

<a id="discussion"></a>

## Discussion

Different keyed containers from the same `Decoder` may return different keys here; it is possible to encode with multiple key types which are not convertible to one another. This should report all keys present which are convertible to the requested type.

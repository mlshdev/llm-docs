> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdarray](https://developer.apple.com/documentation/usdkit/usdarray)

# USDArray

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct USDArray<Element> where Element : USDValueProtocol
```

## Topics

### Initializers

- [init()](usdarray/init%28%29-5bw9q.md): Deprecated. Conforms when `Element` is `UInt`.
- [init()](usdarray/init%28%29-g2wc.md): Deprecated. Conforms when `Element` is `Int`.
- [init()](usdarray/init%28%29-opb4.md)
- [init(\_:)](usdarray/init%28__%29-1re5y.md): Creates an array containing the elements of `s`.
- [init(\_:)](usdarray/init%28__%29-3buv9.md): Deprecated. Conforms when `Element` is `Int`.
- [init(\_:)](usdarray/init%28__%29-4jk2a.md): Deprecated. Conforms when `Element` is `UInt`.
- [init(arrayLiteral:)](usdarray/init%28arrayliteral_%29-7x1vs.md): Deprecated. Conforms when `Element` is `UInt`.
- [init(arrayLiteral:)](usdarray/init%28arrayliteral_%29-w2iz.md): Deprecated. Conforms when `Element` is `Int`.

### Instance Methods

- [append(\_:)](usdarray/append%28__%29.md): Conforms when `Element` conforms to `USDValueProtocol`.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
- [USDPrim.Attribute.Value](usdprim/attribute/value.md)

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/lazysequenceprotocol/elements-swift.associatedtype](https://developer.apple.com/documentation/swift/lazysequenceprotocol/elements-swift.associatedtype)

# Elements

**Framework:** Swift  
**Kind:** Associated Type  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A `Sequence` that can contain the same elements as this one, possibly with a simpler type.

## Declaration

```swift
associatedtype Elements : Sequence = Self where Self.Element == Self.Elements.Element
```

<a id="discussion"></a>

## Discussion

- See also: `elements`

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/significandbitpattern](https://developer.apple.com/documentation/swift/float80/significandbitpattern)

# significandBitPattern

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The raw encoding of the value’s significand field.

## Declaration

```swift
var significandBitPattern: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

The `significandBitPattern` property does not include the leading integral bit of the significand, even for types like `Float80` that store it explicitly.

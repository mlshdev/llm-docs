> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float16/significandbitpattern

# significandBitPattern

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The raw encoding of the value’s significand field.

## Declaration

```swift
var significandBitPattern: UInt16 { get }
```

<a id="discussion"></a>

## Discussion

The `significandBitPattern` property does not include the leading integral bit of the significand, even for types like `Float80` that store it explicitly.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isxidstart](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isxidstart)

# isXIDStart

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is one which is recommended to be allowed to appear in a starting position in a programming language identifier, with adjustments made for NFKC normalized form.

## Declaration

```swift
var isXIDStart: Bool { get }
```

<a id="discussion"></a>

## Discussion

The set of scalars `[:XID_Start:]` closes the set `[:ID_Start:]` under NFKC normalization by removing any scalars whose normalized form is not of the form `[:ID_Start:] [:ID_Continue:]*`.

This property corresponds to the “XID_Start” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

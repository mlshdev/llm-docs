> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/fixedwidthinteger/bitwidth](https://developer.apple.com/documentation/swift/fixedwidthinteger/bitwidth)

# bitWidth

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bits used for the underlying binary representation of values of this type.

## Declaration

```swift
static var bitWidth: Int { get }
```

<a id="discussion"></a>

## Discussion

An unsigned, fixed-width integer type can represent values from 0 through `(2 ** bitWidth) - 1`, where `**` is exponentiation. A signed, fixed-width integer type can represent values from `-(2 ** (bitWidth - 1))` through `(2 ** (bitWidth - 1)) - 1`. For example, the `Int8` type has a `bitWidth` value of 8 and can store any integer in the range `-128...127`.

## Default Implementations

### BinaryInteger Implementations

- [bitWidth](../binaryinteger/bitwidth-57x70.md): The number of bits in the current binary representation of this value.

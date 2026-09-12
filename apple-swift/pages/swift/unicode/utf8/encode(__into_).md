> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/encode(_:into:)](https://developer.apple.com/documentation/swift/unicode/utf8/encode(_:into:))

# encode(\_:into:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes a Unicode scalar as a series of code units by calling the given closure on each code unit.

## Declaration

```swift
static func encode(_ input: Unicode.Scalar, into processCodeUnit: (Unicode.UTF8.CodeUnit) -> Void)
```

## Parameters

- `input`: The Unicode scalar value to encode.
- `processCodeUnit`: A closure that processes one code unit argument at a time.

<a id="discussion"></a>

## Discussion

For example, the musical fermata symbol (“𝄐”) is a single Unicode scalar value (`\u{1D110}`) but requires four code units for its UTF-8 representation. The following code encodes a fermata in UTF-8:

```swift
var bytes: [UTF8.CodeUnit] = []
UTF8.encode("𝄐", into: { bytes.append($0) })
print(bytes)
// Prints "[240, 157, 132, 144]"
```

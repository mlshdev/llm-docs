> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/utf8/width(_:)](https://developer.apple.com/documentation/swift/unicode/utf8/width(_:))

# width(\_:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of code units required to encode the given Unicode scalar.

## Declaration

```swift
static func width(_ x: Unicode.Scalar) -> Int
```

## Parameters

- `x`: A Unicode scalar value.

<a id="return-value"></a>

## Return Value

The width of `x` when encoded in UTF-8, from `1` to `4`.

<a id="discussion"></a>

## Discussion

Because a Unicode scalar value can require up to 21 bits to store its value, some Unicode scalars are represented in UTF-8 by a sequence of up to 4 code units. The first code unit is designated a *lead* byte and the rest are *continuation* bytes.

```swift
let anA: Unicode.Scalar = "A"
print(anA.value)
// Prints "65"
print(UTF8.width(anA))
// Prints "1"

let anApple: Unicode.Scalar = "🍎"
print(anApple.value)
// Prints "127822"
print(UTF8.width(anApple))
// Prints "4"
```

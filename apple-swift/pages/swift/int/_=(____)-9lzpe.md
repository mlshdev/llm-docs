> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/_=(_:_:)-9lzpe](https://developer.apple.com/documentation/swift/int/_=(_:_:)-9lzpe)

# /=(\_:\_:)

**Framework:** Swift  
**Kind:** Operator  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Divides the first value by the second and stores the quotient in the left-hand-side variable.

## Declaration

```swift
static func /= (lhs: inout Int, rhs: Int)
```

## Parameters

- `lhs`: The value to divide.
- `rhs`: The value to divide `lhs` by. `rhs` must not be zero.

<a id="discussion"></a>

## Discussion

For integer types, any remainder of the division is discarded.

```swift
var x = 21
x /= 5
// x == 4
```

## See Also

### Arithmetic with Assignment

- [+=(\_:\_:)](+=%28____%29.md): Adds two values and stores the result in the left-hand-side variable.
- [\*=(\_:\_:)](_=%28____%29.md): Multiplies two values and stores the result in the left-hand-side variable.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/additivearithmetic/zero](https://developer.apple.com/documentation/swift/additivearithmetic/zero)

# zero

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The zero value.

## Declaration

```swift
static var zero: Self { get }
```

<a id="discussion"></a>

## Discussion

Zero is the identity element for addition. For any value, `x + .zero == x` and `.zero + x == x`.

## Default Implementations

### AdditiveArithmetic Implementations

- [zero](zero-7ss88.md): Conforms when `Self` conforms to `ExpressibleByIntegerLiteral`. The zero value.

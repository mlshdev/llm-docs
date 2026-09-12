> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/defaultstringinterpolation/appendinterpolation(_:)-6kx4d](https://developer.apple.com/documentation/swift/defaultstringinterpolation/appendinterpolation(_:)-6kx4d)

# appendInterpolation(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Interpolates the given value’s textual representation into the string literal being created.

## Declaration

```swift
mutating func appendInterpolation<T>(_ value: T) where T : CustomStringConvertible
```

<a id="discussion"></a>

## Discussion

You don’t need to call this method directly. It’s used by the compiler when interpreting string interpolations. Instead, use string interpolation to create a new string by including values, literals, variables, or expressions enclosed in parentheses, prefixed by a backslash (`\(`…`)`).

```swift
let price = 2
let number = 3
let message = """
              If one cookie costs \(price) dollars, \
              \(number) cookies cost \(price * number) dollars.
              """
print(message)
// Prints "If one cookie costs 2 dollars, 3 cookies cost 6 dollars."
```

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/utf8span/unicodescalariterator/reset(roundingbackwardsfrom:)](https://developer.apple.com/documentation/swift/utf8span/unicodescalariterator/reset(roundingbackwardsfrom:))

# reset(roundingBackwardsFrom:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Reset to the nearest scalar-aligned code unit offset `<= i`.

## Declaration

```swift
mutating func reset(roundingBackwardsFrom i: Int)
```

<a id="discussion"></a>

## Discussion

```swift
func printScalarAfterReset(_ string: borrowing String) {
    var iterator = string.utf8Span.makeUnicodeScalarIterator()
    iterator.reset(roundingBackwardsFrom: 8)  // Position 8 is mid-emoji, rounds back to 6
    if let scalar = iterator.next() {
        print(scalar)  // Prints "🌍" (emoji starts at byte 6)
    }
}
let string = "Hello 🌍"
printScalarAfterReset(string)
```

> **Complexity**

> O(1)

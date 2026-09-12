> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/hasprefix(_:)](https://developer.apple.com/documentation/swift/substring/hasprefix(_:))

# hasPrefix(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Boolean value indicating whether the string begins with the specified prefix.

## Declaration

```swift
func hasPrefix<Prefix>(_ prefix: Prefix) -> Bool where Prefix : StringProtocol
```

## Parameters

- `prefix`: A possible prefix to test against this string.

<a id="return-value"></a>

## Return Value

`true` if the string begins with `prefix`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The comparison is both case sensitive and Unicode safe. The case-sensitive comparison will only match strings whose corresponding characters have the same case.

```swift
let cafe = "Café du Monde"

// Case sensitive
print(cafe.hasPrefix("café"))
// Prints "false"
```

The Unicode-safe comparison matches Unicode extended grapheme clusters rather than the code points used to compose them. The example below uses two strings with different forms of the `"é"` character—the first uses the composed form and the second uses the decomposed form.

```swift
// Unicode safe
let composedCafe = "Café"
let decomposedCafe = "Cafe\u{0301}"

print(cafe.hasPrefix(composedCafe))
// Prints "true"
print(cafe.hasPrefix(decomposedCafe))
// Prints "true"
```

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/lowercased()](https://developer.apple.com/documentation/swift/string/lowercased())

# lowercased()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a lowercase version of the string.

## Declaration

```swift
func lowercased() -> String
```

<a id="return-value"></a>

## Return Value

A lowercase copy of the string.

<a id="discussion"></a>

## Discussion

Here’s an example of transforming a string to all lowercase letters.

```swift
let cafe = "BBQ Café 🍵"
print(cafe.lowercased())
// Prints "bbq café 🍵"
```

> **Complexity**

> O(*n*)

## See Also

### Changing Case

- [uppercased()](uppercased%28%29.md): Returns an uppercase version of the string.

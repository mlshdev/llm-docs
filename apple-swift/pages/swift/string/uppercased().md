> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/uppercased()](https://developer.apple.com/documentation/swift/string/uppercased())

# uppercased()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an uppercase version of the string.

## Declaration

```swift
func uppercased() -> String
```

<a id="return-value"></a>

## Return Value

An uppercase copy of the string.

<a id="discussion"></a>

## Discussion

The following example transforms a string to uppercase letters:

```swift
let cafe = "Café 🍵"
print(cafe.uppercased())
// Prints "CAFÉ 🍵"
```

> **Complexity**

> O(*n*)

## See Also

### Changing Case

- [lowercased()](lowercased%28%29.md): Returns a lowercase version of the string.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/index/sameposition(in:)-4yeo1](https://developer.apple.com/documentation/swift/string/index/sameposition(in:)-4yeo1)

# samePosition(in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position in the given view of Unicode scalars that corresponds exactly to this index.

## Declaration

```swift
func samePosition(in unicodeScalars: String.UnicodeScalarView) -> String.UnicodeScalarIndex?
```

## Parameters

- `unicodeScalars`: The view to use for the index conversion. This index must be a valid index of at least one view of the string shared by `unicodeScalars`.

<a id="return-value"></a>

## Return Value

The position in `unicodeScalars` that corresponds exactly to this index. If this index does not have an exact corresponding position in `unicodeScalars`, this method returns `nil`. For example, an attempt to convert the position of a UTF-16 trailing surrogate returns `nil`.

<a id="discussion"></a>

## Discussion

This index must be a valid index of `String(unicodeScalars).utf16`.

This example first finds the position of a space (UTF-16 code point `32`) in a string’s `utf16` view and then uses this method to find the same position in the string’s `unicodeScalars` view.

```swift
let cafe = "Café 🍵"
let i = cafe.utf16.firstIndex(of: 32)!
let j = i.samePosition(in: cafe.unicodeScalars)!
print(String(cafe.unicodeScalars[..<j]))
// Prints "Café"
```

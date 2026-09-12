> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/index/sameposition(in:)-3mz95](https://developer.apple.com/documentation/swift/string/index/sameposition(in:)-3mz95)

# samePosition(in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the position in the given UTF-8 view that corresponds exactly to this index.

## Declaration

```swift
func samePosition(in utf8: String.UTF8View) -> String.UTF8View.Index?
```

## Parameters

- `utf8`: The view to use for the index conversion. This index must be a valid index of at least one view of the string shared by `utf8`.

<a id="return-value"></a>

## Return Value

The position in `utf8` that corresponds exactly to this index. If this index does not have an exact corresponding position in `utf8`, this method returns `nil`. For example, an attempt to convert the position of a UTF-16 trailing surrogate returns `nil`.

<a id="discussion"></a>

## Discussion

This example first finds the position of the character `"é"`, and then uses this method find the same position in the string’s `utf8` view.

```swift
let cafe = "Café"
if let i = cafe.firstIndex(of: "é") {
    let j = i.samePosition(in: cafe.utf8)!
    print(Array(cafe.utf8[j...]))
}
// Prints "[195, 169]"
```

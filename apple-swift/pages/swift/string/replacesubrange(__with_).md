> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/replacesubrange(_:with:)](https://developer.apple.com/documentation/swift/string/replacesubrange(_:with:))

# replaceSubrange(\_:with:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Replaces the text within the specified bounds with the given characters.

## Declaration

```swift
mutating func replaceSubrange<C>(_ subrange: Range<String.Index>, with newElements: C) where C : Collection, C.Element == Character
```

## Parameters

- `subrange`: The range of text to replace. The bounds of the range must be valid indices of the string.
- `newElements`: The new characters to add to the string.

<a id="discussion"></a>

## Discussion

Calling this method invalidates any existing indices for use with this string.

> **Complexity**

> O(*m*), where *m* is the combined length of the string and `newElements`. If the call to `replaceSubrange(_:with:)` simply removes text at the end of the string, the complexity is O(*n*), where *n* is equal to `bounds.count`.

## See Also

### Replacing Substrings

- [replaceSubrange(\_:with:)](replacesubrange%28__with_%29-72947.md): Replaces the specified subrange of elements with the given collection.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/init(_:)-11jx3](https://developer.apple.com/documentation/swift/string/init(_:)-11jx3)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a String having the given content.

## Declaration

```swift
init(_ content: Substring.UnicodeScalarView)
```

<a id="discussion"></a>

## Discussion

> **Complexity**

> O(N), where N is the length of the resulting `String`’s UTF-16.

## See Also

### Working with String Views

- [unicodeScalars](unicodescalars.md): The string’s value represented as a collection of Unicode scalar values.
- [init(\_:)](init%28__%29-2t931.md): Creates a string corresponding to the given collection of Unicode scalars.
- [utf16](utf16.md): A UTF-16 encoding of `self`.
- [init(\_:)](init%28__%29-wbcx.md): Creates a string corresponding to the given sequence of UTF-16 code units.
- [init(\_:)](init%28__%29-expd.md): Creates a String having the given content.
- [utf8](utf8.md): A UTF-8 encoding of `self`.
- [init(\_:)](init%28__%29-6sprj.md): Creates a string corresponding to the given sequence of UTF-8 code units.
- [init(\_:)](init%28__%29-83bub.md): Creates a String having the given content.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/namealias](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/namealias)

# nameAlias

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The normative formal alias of the scalar.

## Declaration

```swift
var nameAlias: String? { get }
```

<a id="discussion"></a>

## Discussion

The name of a scalar is immutable and never changed in future versions of the Unicode Standard. The `nameAlias` property is provided to issue corrections if a name was issued erroneously. For example, the `name` of U+FE18 is “PRESENTATION FORM FOR VERTICAL RIGHT WHITE LENTICULAR BRAKCET” (note that “BRAKCET” is misspelled). The `nameAlias` property then contains the corrected name.

If a scalar has no alias, this property is `nil`.

This property corresponds to the “Name_Alias” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

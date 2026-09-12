> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/characters](https://developer.apple.com/documentation/foundation/attributedstring/characters)

# characters

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The characters of the attributed string, as a view into the underlying string.

## Declaration

```swift
var characters: AttributedString.CharacterView { get set }
```

<a id="Discussion"></a>

## Discussion

Use the [characters](characters.md) view when you want to look for specific string content. You can then use the resulting ranges to set attributes for specific parts of the [AttributedString](../attributedstring.md).

You can also use this property to mutate the attributed string, using [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection) methods, such as `insert(_:at:)` and [append(\_:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/append%28_:%29). Inserted characters inherit any attributes present at the insertion point.

## See Also

### Accessing Views into the Attributed String

- [AttributedString.CharacterView](characterview.md): A view into the underlying storage of the attributed string, as Unicode characters.
- [unicodeScalars](unicodescalars.md): The Unicode scalars of the attributed string, as a view into the underlying string.
- [AttributedString.UnicodeScalarView](unicodescalarview.md): A view into the underlying storage of the attributed string, as Unicode scalars.
- [runs](runs-swift.property.md): The attributed runs of the attributed string, as a view into the underlying string.
- [AttributedString.Runs](runs-swift.struct.md): An iterable view into segments of the attributed string, each of which indicates where a run of identical attributes begins or ends.

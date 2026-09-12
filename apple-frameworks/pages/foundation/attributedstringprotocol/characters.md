> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/characters](https://developer.apple.com/documentation/foundation/attributedstringprotocol/characters)

# characters

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The characters of the attributed string, as a view into the underlying string.

## Declaration

```swift
var characters: AttributedString.CharacterView { get }
```

<a id="Discussion"></a>

## Discussion

Use the [characters](characters.md) view when you want to look for specific string content. You can then use the resulting ranges to set attributes for specific parts of the [AttributedString](../attributedstring.md) or [AttributedSubstring](../attributedsubstring.md).

You can also use this property to mutate the attributed string, using [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection) methods, such as `insert(_:at:)` and [append(\_:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/append%28_:%29). Inserted characters inherit any attributes present at the insertion point.

## See Also

### Accessing Views into the Attributed String

- [unicodeScalars](unicodescalars.md): The Unicode scalars of the attributed string, as a view into the underlying string.
- [runs](runs.md): The attributed runs of the attributed string, as a view into the underlying string.

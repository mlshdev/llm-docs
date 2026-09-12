> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstringprotocol/unicodescalars](https://developer.apple.com/documentation/foundation/attributedstringprotocol/unicodescalars)

# unicodeScalars

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The Unicode scalars of the attributed string, as a view into the underlying string.

## Declaration

```swift
var unicodeScalars: AttributedString.UnicodeScalarView { get }
```

<a id="Discussion"></a>

## Discussion

Use this property when you want to split the attributed string by Unicode scalar instead of grapheme cluster. This is useful when you need to carefully control insertion points or render the content.

You can also use this property to mutate the attributed string, using [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection) methods, such as `insert(_:at:)` and [append(\_:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/append%28_:%29). Inserted characters inherit any attributes present at the insertion point.

## See Also

### Accessing Views into the Attributed String

- [characters](characters.md): The characters of the attributed string, as a view into the underlying string.
- [runs](runs.md): The attributed runs of the attributed string, as a view into the underlying string.

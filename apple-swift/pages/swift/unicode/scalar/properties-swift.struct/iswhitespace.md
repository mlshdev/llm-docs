> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/iswhitespace

# isWhitespace

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a whitespace character.

## Declaration

```swift
var isWhitespace: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property is `true` for scalars that are spaces, separator characters, and other control characters that should be treated as whitespace for the purposes of parsing text elements.

This property corresponds to the “White_Space” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isdeprecated

# isDeprecated

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is deprecated.

## Declaration

```swift
var isDeprecated: Bool { get }
```

<a id="discussion"></a>

## Discussion

Scalars are never removed from the Unicode Standard, but the usage of deprecated scalars is strongly discouraged.

This property corresponds to the “Deprecated” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

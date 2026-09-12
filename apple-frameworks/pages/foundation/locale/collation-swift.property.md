> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/collation-swift.property](https://developer.apple.com/documentation/foundation/locale/collation-swift.property)

# collation

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The string sort order of the locale.

## Declaration

```swift
var collation: Locale.Collation { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the `co` key of the Unicode BCP 47 extension.

For locale instances created with the `co` specifier (such as `en-US@co=phonetic`), or with a custom [Locale.Components](components.md), this property represents the custom collation. Otherwise, it represents the locale’s default sort order.

## See Also

### Getting ordering components

- [Locale.Collation](collation-swift.struct.md): A type that represents the string sort order used by the locale.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/collation](https://developer.apple.com/documentation/foundation/locale/components/collation)

# collation

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The string sort order of the locale.

## Declaration

```swift
var collation: Locale.Collation?
```

<a id="Discussion"></a>

## Discussion

Set this property to override the locale’s default string sort order. To request the collation used by the locale, use the [Locale](../../locale.md) property [collation](../collation-swift.property.md).

This property corresponds to the `co` key of the Unicode BCP 47 extension.

## See Also

### Specifying ordering components

- [Locale.Collation](../collation-swift.struct.md): A type that represents the string sort order used by the locale.

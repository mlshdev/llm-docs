> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/variant](https://developer.apple.com/documentation/foundation/locale/components/variant)

# variant

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An optional variant used by the locale.

## Declaration

```swift
var variant: Locale.Variant?
```

<a id="Discussion"></a>

## Discussion

Set this property to override the variant of the locale.

This property corresponds to the `va` key of the Unicode BCP 47 extension.

## See Also

### Specifying region components

- [region](region.md): The region used by the locale.
- [Locale.Region](../region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [subdivision](subdivision.md): The optional subdivision of the region used by this locale.
- [Locale.Subdivision](../subdivision-swift.struct.md): A type that represents a subdivision of a region, such as a state in the US or a province in Canada.
- [Locale.Variant](../variant-swift.struct.md): A type that represents a locale’s language variant.

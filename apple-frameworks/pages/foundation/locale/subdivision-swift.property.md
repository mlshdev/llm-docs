> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/subdivision-swift.property](https://developer.apple.com/documentation/foundation/locale/subdivision-swift.property)

# subdivision

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The optional subdivision of the region used by this locale.

## Declaration

```swift
var subdivision: Locale.Subdivision? { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the `sd` key of the Unicode BCP 47 extension.

## See Also

### Getting region components

- [region](region-swift.property.md): The region used by the locale.
- [Locale.Region](region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [Locale.Subdivision](subdivision-swift.struct.md): A type that represents a subdivision of a region, such as a state in the US or a province in Canada.
- [variant](variant-swift.property.md): An optional variant used by the locale.
- [Locale.Variant](variant-swift.struct.md): A type that represents a locale’s language variant.

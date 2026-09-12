> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/region](https://developer.apple.com/documentation/foundation/locale/components/region)

# region

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The region used by the locale.

## Declaration

```swift
var region: Locale.Region?
```

<a id="Discussion"></a>

## Discussion

Set this property to override the region for region-related preferences, such as measuring system, calendar, and first day of the week. If unset, the locale uses the region of the language component.

This property corresponds to the `rg` key of the Unicode BCP 47 extension.

## See Also

### Specifying region components

- [Locale.Region](../region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [subdivision](subdivision.md): The optional subdivision of the region used by this locale.
- [Locale.Subdivision](../subdivision-swift.struct.md): A type that represents a subdivision of a region, such as a state in the US or a province in Canada.
- [variant](variant.md): An optional variant used by the locale.
- [Locale.Variant](../variant-swift.struct.md): A type that represents a locale’s language variant.

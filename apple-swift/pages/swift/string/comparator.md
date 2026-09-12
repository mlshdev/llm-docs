> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/comparator](https://developer.apple.com/documentation/swift/string/comparator)

# String.Comparator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A `String` comparison performed using the given comparison options and locale.

## Declaration

```swift
struct Comparator
```

## Topics

### Initializers

- [init(\_:)](comparator/init%28__%29.md): Creates a `String.Comparator` that represents the same comparison as the given `String.StandardComparator`.
- [init(options:locale:order:)](comparator/init%28options_locale_order_%29.md): Creates a `String.Comparator` with the given `CompareOptions` and `Locale`.

### Instance Properties

- [locale](comparator/locale.md): The locale to use for comparison if the comparator is localized, otherwise nil.
- [options](comparator/options.md): The options to use for comparison.

## Relationships

### Conforms To

- [Decodable](../decodable.md)
- [Encodable](../encodable.md)
- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [SortComparator](https://developer.apple.com/documentation/foundation/sortcomparator)

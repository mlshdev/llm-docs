> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string/standardcomparator](https://developer.apple.com/documentation/swift/string/standardcomparator)

# String.StandardComparator

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Compares `String`s using one of a fixed set of standard comparison algorithms.

## Declaration

```swift
struct StandardComparator
```

## Topics

### Initializers

- [init(\_:order:)](standardcomparator/init%28__order_%29.md): Create a `StandardComparator` from the given `StandardComparator` with the given new `order`.

### Type Properties

- [lexical](standardcomparator/lexical.md): Compares `String`s lexically.
- [localized](standardcomparator/localized.md): Compares `String`s using a localized comparison in the current locale.
- [localizedStandard](standardcomparator/localizedstandard.md): Compares `String`s as compared by the Finder.

## Relationships

### Conforms To

- [Decodable](../decodable.md)
- [Encodable](../encodable.md)
- [Equatable](../equatable.md)
- [Hashable](../hashable.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
- [SortComparator](https://developer.apple.com/documentation/foundation/sortcomparator)

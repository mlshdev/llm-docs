> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/searchsuggestionsplacement/set](https://developer.apple.com/documentation/swiftui/searchsuggestionsplacement/set)

# SearchSuggestionsPlacement.Set

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An efficient set of search suggestion display modes.

## Declaration

```swift
struct Set
```

## Topics

### Getting placement sets

- [content](set/content.md): A set containing placements with the apps main content, excluding the menu placement.
- [menu](set/menu.md): A set containing the menu display mode.

### Creating a set

- [init(rawValue:)](set/init%28rawvalue_%29.md): Creates a set of search suggestions from an integer.
- [rawValue](set/rawvalue.md): The raw value that records the search suggestion display modes.

### Supporting types

- [SearchSuggestionsPlacement.Set.Element](set/element.md): A type for the elements of the set.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

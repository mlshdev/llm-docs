> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mapselection

# MapSelection

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A value representing a selected feature on a map.

## Declaration

```swift
struct MapSelection<SelectionValue> where SelectionValue : Hashable
```

## Topics

### Creating a map selection

- [init(\_:)](mapselection/init%28__%29.md): Creates a map selection with a tag.

### Getting the properties

- [value](mapselection/value.md): The selection of the given tag value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MapSelectable](mapselectable.md)

## See Also

### Map features

- [MapFeature](mapfeature.md): A tappable map feature.
- [MapSelectable](mapselectable.md)

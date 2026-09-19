> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mldatatable/packtype

# MLDataTable.PackType

**Framework:** Create ML  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

The storage operations for combining multiple columns into one.

## Declaration

```swift
enum PackType
```

## Topics

### Selecting a packing operation

- [MLDataTable.PackType.sequence](packtype/sequence.md): A packing type that combines the values of several columns into a sequence type.
- [MLDataTable.PackType.dictionary](packtype/dictionary.md): A packing type that combines the values of several columns into a dictionary type.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Compacting columns

- [pack(columnsNamed:to:type:filling:)](pack%28columnsnamed_to_type_filling_%29.md): Creates a new data table with an additional column that contains the combined values of the given columns.

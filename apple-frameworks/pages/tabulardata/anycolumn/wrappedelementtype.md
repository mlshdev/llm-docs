> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycolumn/wrappedelementtype](https://developer.apple.com/documentation/tabulardata/anycolumn/wrappedelementtype)

# wrappedElementType

**Framework:** TabularData  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The underlying type of the column’s elements.

## Declaration

```swift
var wrappedElementType: any Any.Type { get }
```

## See Also

### Inspecting a Type-Erased Column

- [name](name.md): The name of the column.
- [count](count.md): The number of elements in the column.
- [missingCount](missingcount.md): The number of missing elements in the column.
- [isNil(at:)](isnil%28at_%29.md): Returns a Boolean that indicates whether the element at the index is missing.

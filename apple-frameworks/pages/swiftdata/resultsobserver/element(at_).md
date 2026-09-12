> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/element(at:)](https://developer.apple.com/documentation/swiftdata/resultsobserver/element(at:))

# element(at:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the element at the given index path in the sectioned results.

## Declaration

```swift
final func element(at indexPath: IndexPath) -> Element?
```

## Parameters

- `indexPath`: An index path where `indexPath[0]` is the section index and `indexPath[1]` is the item index within that section.

<a id="return-value"></a>

## Return Value

The element at the given index path, or `nil` if [sections](sections.md) is `nil` or the index path is out of bounds.

## See Also

### Accessing observer results

- [results](results.md): The current collection of fetched models matching the fetch criteria.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the given element within the sectioned results.

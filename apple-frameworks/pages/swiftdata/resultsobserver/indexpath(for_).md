> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/indexpath(for:)](https://developer.apple.com/documentation/swiftdata/resultsobserver/indexpath(for:))

# indexPath(for:)

**Framework:** SwiftData  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the index path of the given element within the sectioned results.

## Declaration

```swift
final func indexPath(for element: Element) -> IndexPath?
```

## Parameters

- `element`: An element to locate within the sectioned results.

<a id="return-value"></a>

## Return Value

An index path where `[0]` is the section index and `[1]` is the item index, or `nil` if the object is not found or [sections](sections.md) is `nil`.

## See Also

### Accessing observer results

- [results](results.md): The current collection of fetched models matching the fetch criteria.
- [element(at:)](element%28at_%29.md): Returns the element at the given index path in the sectioned results.

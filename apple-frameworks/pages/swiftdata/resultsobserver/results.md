> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/resultsobserver/results](https://developer.apple.com/documentation/swiftdata/resultsobserver/results)

# results

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The current collection of fetched models matching the fetch criteria.

## Declaration

```swift
final var results: FetchResultsCollection<Element> { get set }
```

<a id="discussion"></a>

## Discussion

This property is updated automatically when relevant changes occur in the model context. As an `@Observable` property, SwiftUI views that read this value will automatically refresh when the results change.

## See Also

### Accessing observer results

- [element(at:)](element%28at_%29.md): Returns the element at the given index path in the sectioned results.
- [indexPath(for:)](indexpath%28for_%29.md): Returns the index path of the given element within the sectioned results.

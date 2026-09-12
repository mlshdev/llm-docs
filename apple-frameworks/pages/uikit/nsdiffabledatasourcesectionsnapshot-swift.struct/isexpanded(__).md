> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/isexpanded(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/isexpanded(_:))

# isExpanded(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Indicates whether the item with the specified identifier is in an expanded state.

## Declaration

```swift
func isExpanded(_ item: ItemIdentifierType) -> Bool
```

<a id="Discussion"></a>

## Discussion

This expansion state persists along with the section snapshot.

## See Also

### Expanding and collapsing items

- [expand(\_:)](expand%28__%29.md): Expands the specified items in the section snapshot.
- [collapse(\_:)](collapse%28__%29.md): Collapses the specified items in the section snapshot.

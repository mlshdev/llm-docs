> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/level(of:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesectionsnapshot-swift.struct/level(of:))

# level(of:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Finds the hierarchical level of the specified item in the section snapshot.

## Declaration

```swift
func level(of item: ItemIdentifierType) -> Int
```

<a id="Discussion"></a>

## Discussion

A level of `0` means the item is at the root level of the section snapshot.

## See Also

### Getting item metrics

- [index(of:)](index%28of_%29.md): Finds the index of the specified item in the section snapshot.
- [parent(of:)](parent%28of_%29.md): Finds the parent item of the specified item in the section snapshot.
- [contains(\_:)](contains%28__%29.md): Indicates whether the section snapshot contains the specified item.
- [isVisible(\_:)](isvisible%28__%29.md): Indicates whether the specified item is currently visible onscreen.

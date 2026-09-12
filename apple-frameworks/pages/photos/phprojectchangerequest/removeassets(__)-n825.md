> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phprojectchangerequest/removeassets(_:)-n825](https://developer.apple.com/documentation/photos/phprojectchangerequest/removeassets(_:)-n825)

# removeAssets(\_:)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Removes assets of a certain type from the collection.

## Declaration

```swift
func removeAssets<T>(_ assets: T) where T : Collection, T.Element == PHAsset
```

## Parameters

- `assets`: The type of assets to remove from the collection.

## See Also

### Removing Assets

- [removeAssets(\_:)](removeassets%28__%29-3ytt3.md): Removes assets based on a fetch result.

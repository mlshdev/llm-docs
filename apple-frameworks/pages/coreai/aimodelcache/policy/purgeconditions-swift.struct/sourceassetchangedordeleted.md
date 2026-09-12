> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct/sourceassetchangedordeleted](https://developer.apple.com/documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct/sourceassetchangedordeleted)

# sourceAssetChangedOrDeleted

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A condition that allows purging when the source model changes or no longer exists.

## Declaration

```swift
static let sourceAssetChangedOrDeleted: AIModelCache.Policy.PurgeConditions
```

<a id="discussion"></a>

## Discussion

This option allows the system to delete a specialized asset when the `.aimodel` the asset derives from changes or no longer exists.

## See Also

### Identifying purge conditions

- [storagePressure](storagepressure.md): A condition that allows purging under device storage pressure.

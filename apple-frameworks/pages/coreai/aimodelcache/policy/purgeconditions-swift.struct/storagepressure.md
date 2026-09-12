> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct/storagepressure](https://developer.apple.com/documentation/coreai/aimodelcache/policy/purgeconditions-swift.struct/storagepressure)

# storagePressure

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A condition that allows purging under device storage pressure.

## Declaration

```swift
static let storagePressure: AIModelCache.Policy.PurgeConditions
```

<a id="discussion"></a>

## Discussion

This option allows the system to delete a specialized asset when the device runs low on storage and needs to reclaim space.

## See Also

### Identifying purge conditions

- [sourceAssetChangedOrDeleted](sourceassetchangedordeleted.md): A condition that allows purging when the source model changes or no longer exists.

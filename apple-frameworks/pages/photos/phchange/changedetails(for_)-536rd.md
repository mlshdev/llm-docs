> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phchange/changedetails(for:)-536rd](https://developer.apple.com/documentation/photos/phchange/changedetails(for:)-536rd)

# changeDetails(for:)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS

Returns detailed change information for the specified asset or collection.

## Declaration

```swift
func changeDetails<T>(for object: T) -> PHObjectChangeDetails<T>? where T : PHObject
```

## Parameters

- `object`: A [PHAsset](../phasset.md), [PHAssetCollection](../phassetcollection.md), or [PHCollectionList](../phcollectionlist.md) object.

<a id="return-value"></a>

## Return Value

A change details object, or `nil` if there have been no changes to the specified asset or collection.

<a id="Discussion"></a>

## Discussion

When Photos calls your change observer’s [photoLibraryDidChange(\_:)](../phphotolibrarychangeobserver/photolibrarydidchange%28__%29.md) method, call this [changeDetails(for:)](changedetails%28for_%29-536rd.md) method to get detailed change information about an asset or collection you’ve previously fetched. If the asset or collection has changed since you last fetched it, the resulting [PHObjectChangeDetails](../phobjectchangedetails.md) object describes the changes. If there are no changes between the fetched object and the current state of the asset or collection it represents in the Photos library, this method returns `nil`.

For an asset collection or collection list, this method and the [PHObjectChangeDetails](../phobjectchangedetails.md) object it returns describe only changes to the collection’s properties. If you are instead interested in changes to the collection’s membership, use the [changeDetails(for:)](changedetails%28for_%29-2fne7.md) method.

## See Also

### Getting Change Details

- [changeDetails(for:)](changedetails%28for_%29-33a6n.md)
- [changeDetails(for:)](changedetails%28for_%29-2fne7.md): Returns detailed change information for a fetch result.

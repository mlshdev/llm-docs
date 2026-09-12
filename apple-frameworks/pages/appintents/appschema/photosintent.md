> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/photosintent](https://developer.apple.com/documentation/appintents/appschema/photosintent)

# AppSchema.PhotosIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Identifies intent schemas in the photos domain.

## Declaration

```swift
protocol PhotosIntent : AppSchema.Kind
```

## Topics

### Instance Properties

- [addAssetsToAlbum](photosintent/addassetstoalbum.md): An intent schema that adds the provided photos to the provided album.
- [cleanupPhoto](photosintent/cleanupphoto.md): An intent schema that removes distracting objects in a photo.
- [copyEdits](photosintent/copyedits.md): An intent schema that copies edits from the provided photo.
- [createAlbum](photosintent/createalbum.md): An intent schema that creates an album.
- [createAssets](photosintent/createassets.md): An intent schema that creates photos from the provided files.
- [crop](photosintent/crop.md): An intent schema that crops a photo.
- [deleteAlbum](photosintent/deletealbum.md): An intent schema that deletes the provided albums.
- [deleteAssets](photosintent/deleteassets.md): An intent schema that deletes the provided photos.
- [duplicateAssets](photosintent/duplicateassets.md): An intent schema that duplicates the selected photos.
- [editAsset](photosintent/editasset.md): An intent schema that opens a photo for editing.
- [openAlbum](photosintent/openalbum.md): An intent schema that opens the provided album.
- [openAsset](photosintent/openasset.md): Deprecated. An intent schema that opens the app to a photo.
- [pasteEdits](photosintent/pasteedits.md): An intent schema that pastes edits to the provided photo.
- [postToSharedAlbum](photosintent/posttosharedalbum.md): An intent schema that posts the provided photos or files and optional comment to the provided shared album.
- [removeAssetsFromAlbum](photosintent/removeassetsfromalbum.md): An intent schema that removes the provided photos from the provided album.
- [search](photosintent/search.md): Deprecated. An intent schema that navigates to search results.
- [setDepth](photosintent/setdepth.md): An intent schema that sets the depth value of a photo.
- [setExposure](photosintent/setexposure.md): An intent schema that configures the exposure for a photo.
- [setFilter](photosintent/setfilter.md): An intent schema that applies a filter to a photo.
- [setRotation](photosintent/setrotation.md): An intent schema that rotates a photo.
- [setSaturation](photosintent/setsaturation.md): An intent schema that configures the saturation for a photo.
- [setWarmth](photosintent/setwarmth.md): An intent schema that configures the warmth for a photo.
- [straighten](photosintent/straighten.md): An intent schema that straightens a photo.
- [toggleDepth](photosintent/toggledepth.md): An intent schema that toggles depth effect for a photo.
- [toggleSuggestedEdits](photosintent/togglesuggestededits.md): An intent schema that enhances a photo.
- [updateAlbum](photosintent/updatealbum.md): An intent schema that renames the provided album.
- [updateAsset](photosintent/updateasset.md): An intent schema that updates an existing photo’s properties.
- [updateRecognizedPerson](photosintent/updaterecognizedperson.md): An intent schema that updates the provided person with new properties.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Intent](intent.md)

## See Also

### Actions

- [addAssetsToAlbum](photosintent/addassetstoalbum.md): An intent schema that adds the provided photos to the provided album.
- [cleanupPhoto](photosintent/cleanupphoto.md): An intent schema that removes distracting objects in a photo.
- [copyEdits](photosintent/copyedits.md): An intent schema that copies edits from the provided photo.
- [createAlbum](photosintent/createalbum.md): An intent schema that creates an album.
- [createAssets](photosintent/createassets.md): An intent schema that creates photos from the provided files.
- [crop](photosintent/crop.md): An intent schema that crops a photo.
- [deleteAlbum](photosintent/deletealbum.md): An intent schema that deletes the provided albums.
- [deleteAssets](photosintent/deleteassets.md): An intent schema that deletes the provided photos.
- [duplicateAssets](photosintent/duplicateassets.md): An intent schema that duplicates the selected photos.
- [editAsset](photosintent/editasset.md): An intent schema that opens a photo for editing.
- [openAlbum](photosintent/openalbum.md): An intent schema that opens the provided album.
- [openAsset](photosintent/openasset.md): Deprecated. An intent schema that opens the app to a photo.
- [pasteEdits](photosintent/pasteedits.md): An intent schema that pastes edits to the provided photo.
- [postToSharedAlbum](photosintent/posttosharedalbum.md): An intent schema that posts the provided photos or files and optional comment to the provided shared album.
- [removeAssetsFromAlbum](photosintent/removeassetsfromalbum.md): An intent schema that removes the provided photos from the provided album.

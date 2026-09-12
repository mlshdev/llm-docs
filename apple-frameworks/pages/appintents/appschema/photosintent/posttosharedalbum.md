> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appschema/photosintent/posttosharedalbum](https://developer.apple.com/documentation/appintents/appschema/photosintent/posttosharedalbum)

# postToSharedAlbum

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

An intent schema that posts the provided photos or files and optional comment to the provided shared album.

## Declaration

```swift
var postToSharedAlbum: some AppSchemaIntent { get }
```

<a id="discussion"></a>

## Discussion

To make your app’s actions available to Apple Intelligence, conform your [AppIntent](../../appintent.md) to a schema that describes your action to the system. If your app’s functionality aligns with the `photos` domain and one of your app’s actions matches the `postToSharedAlbum` schema, you can generate the properties and protocol conformance the schema requires for your intent implementation with the `@AppIntent( .photos.postToSharedAlbum)` Swift macro. To make your app work with Siri, see [Apple Intelligence and Siri AI](../../apple-intelligence-and-siri-ai.md).

The following example shows an intent that conforms to the `postToSharedAlbum` schema:

```swift
@AppIntent(schema: .photos.postToSharedAlbum)
struct PostToSharedAlbumIntent {
    var sharedAlbum: <#PhotoAlbumEntity#>
    var assets: [<#PhotoEntity#>]?
    var files: [IntentFile]?
    var comment: String?

    func perform() async throws -> some IntentResult {
        <#code#>
    }
}
```

The schema supports the following system experiences:

- Siri
- Shortcuts

For more information about the App Intents framework and the experiences it supports, see [Getting started with the App Intents framework](../../getting-started-with-the-app-intents-framework.md).

## See Also

### Actions

- [addAssetsToAlbum](addassetstoalbum.md): An intent schema that adds the provided photos to the provided album.
- [cleanupPhoto](cleanupphoto.md): An intent schema that removes distracting objects in a photo.
- [copyEdits](copyedits.md): An intent schema that copies edits from the provided photo.
- [createAlbum](createalbum.md): An intent schema that creates an album.
- [createAssets](createassets.md): An intent schema that creates photos from the provided files.
- [crop](crop.md): An intent schema that crops a photo.
- [deleteAlbum](deletealbum.md): An intent schema that deletes the provided albums.
- [deleteAssets](deleteassets.md): An intent schema that deletes the provided photos.
- [duplicateAssets](duplicateassets.md): An intent schema that duplicates the selected photos.
- [editAsset](editasset.md): An intent schema that opens a photo for editing.
- [openAlbum](openalbum.md): An intent schema that opens the provided album.
- [openAsset](openasset.md): Deprecated. An intent schema that opens the app to a photo.
- [pasteEdits](pasteedits.md): An intent schema that pastes edits to the provided photo.
- [removeAssetsFromAlbum](removeassetsfromalbum.md): An intent schema that removes the provided photos from the provided album.
- [setDepth](setdepth.md): An intent schema that sets the depth value of a photo.

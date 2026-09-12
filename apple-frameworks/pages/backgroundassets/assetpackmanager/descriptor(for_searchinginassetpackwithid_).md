> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/descriptor(for:searchinginassetpackwithid:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/descriptor(for:searchinginassetpackwithid:))

# descriptor(for:searchingInAssetPackWithID:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Opens and returns a file descriptor for an asset file at the specified relative path.

## Declaration

```swift
nonisolated func descriptor(for path: FilePath, searchingInAssetPackWithID assetPackID: String? = nil) throws -> FileDescriptor
```

## Parameters

- `path`: The relative path.
- `assetPackID`: The ID of the asset pack in which to search for the file. By default, all downloaded asset packs are searched.

<a id="return-value"></a>

## Return Value

A descriptor for the opened file.

## Mentioned In

- [Downloading Apple-hosted asset packs](../downloading-apple-hosted-asset-packs.md)

<a id="discussion"></a>

## Discussion

> **Important**

> It’s your responsibility to close the file descriptor when you’re done using it.

All asset packs share the same namespace, so you can treat the overall collection of downloaded asset packs as if it were a single root directory that contains all of your subdirectories and asset files, regardless of the specific asset pack in which any particular file resides. If there’s a path collision across multiple asset packs, then it’s undefined from which asset pack the file will be read unless you explicitly limit the search to a particular asset pack by passing a non-`nil` ID to the `assetPackID` parameter.

> **Throws**

> [ManagedBackgroundAssetsError.fileNotFound(at:)](../managedbackgroundassetserror/filenotfound%28at_%29.md) when no file is found at `path`.

> **Throws**

> When the path is not relative or when some other error occurs while finding or opening the requested file.

> **Remark**

> Use this method if you need low-level access to the file descriptor. If you don’t, then use [contents(at:searchingInAssetPackWithID:options:)](contents%28at_searchinginassetpackwithid_options_%29.md) instead.

## See Also

### Accessing asset contents

- [contents(at:searchingInAssetPackWithID:options:)](contents%28at_searchinginassetpackwithid_options_%29.md): Returns the contents of an asset file at the specified relative path.
- [contents(at:asLocalizedFor:options:)](contents%28at_aslocalizedfor_options_%29.md): Returns the contents of a localized asset file at the specified relative path.
- [descriptor(for:asLocalizedFor:)](descriptor%28for_aslocalizedfor_%29.md): Opens and returns a file descriptor for a localized asset file at the specified relative path.
- [url(for:)](url%28for_%29.md): Returns a URL for the specified relative path.
- [url(for:asLocalizedFor:)](url%28for_aslocalizedfor_%29.md): Returns a URL for the specified relative path.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/contents(at:aslocalizedfor:options:)](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/contents(at:aslocalizedfor:options:))

# contents(at:asLocalizedFor:options:)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the contents of a localized asset file at the specified relative path.

## Declaration

```swift
nonisolated func contents(at path: FilePath, asLocalizedFor language: Locale.Language, options: Data.ReadingOptions = .mappedIfSafe) throws -> Data
```

## Parameters

- `path`: The relative path.
- `language`: The language that the framework uses to limit the search within localized asset packs.
- `options`: Options for how to read the file’s contents into a `Data` instance.

<a id="return-value"></a>

## Return Value

The file’s contents.

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

All asset packs share the same namespace, so you can treat the overall collection of downloaded asset packs as if it were a single root directory that contains all of your subdirectories and asset files, regardless of the specific asset pack in which any particular file resides. This method searches in only the downloaded asset packs that are localized in the specified language. If there’s a file-path collision across multiple such asset packs, then it’s undefined from which asset pack the file will be read.

This method is most useful if you intentionally induce a file-path collision across multiple differently localized asset packs. For example, you may include an English-localized version of `Videos/Introduction.m4v` in an `en` asset pack, a Hebrew-localized version of `Videos/Introduction.m4v` in a `he` asset pack, and an American Spanish–localized version of `Videos/Introduction.m4v` in an `es-US` asset pack. If you offer split-language functionality to users, then you may want to download two or more of those asset packs on the same device. In that scenario, the specific choice of file that [contents(at:searchingInAssetPackWithID:options:)](contents%28at_searchinginassetpackwithid_options_%29.md) reads would be undefined unless you determine the appropriate asset pack’s ID and pass it to that method’s `assetPackID` parameter. With this method, merely passing a `Locale.Language` instance to the `language` parameter is sufficient to resolve the ambiguity without requiring that you determine the asset pack’s ID. [contents(at:searchingInAssetPackWithID:options:)](contents%28at_searchinginassetpackwithid_options_%29.md) is more suitable in most other situations.

> **Note**

> Language matching considers implicit script and region tags per Unicode’s Common Locale Data Repository. For example, `en` is equivalent to `en-US` and `en-Latn-US` but not `en-CA`.

> **Throws**

> [ManagedBackgroundAssetsError.fileNotFound(at:)](../managedbackgroundassetserror/filenotfound%28at_%29.md) when no file is found at `path`.

> **Throws**

> When the path is not relative or when some other error occurs while finding or reading the requested file.

## See Also

### Accessing asset contents

- [contents(at:searchingInAssetPackWithID:options:)](contents%28at_searchinginassetpackwithid_options_%29.md): Returns the contents of an asset file at the specified relative path.
- [descriptor(for:searchingInAssetPackWithID:)](descriptor%28for_searchinginassetpackwithid_%29.md): Opens and returns a file descriptor for an asset file at the specified relative path.
- [descriptor(for:asLocalizedFor:)](descriptor%28for_aslocalizedfor_%29.md): Opens and returns a file descriptor for a localized asset file at the specified relative path.
- [url(for:)](url%28for_%29.md): Returns a URL for the specified relative path.
- [url(for:asLocalizedFor:)](url%28for_aslocalizedfor_%29.md): Returns a URL for the specified relative path.

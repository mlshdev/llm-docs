> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(compressedcontentsofdirectoryaturl:)](https://developer.apple.com/documentation/xctest/xctattachment/init(compressedcontentsofdirectoryaturl:))

# init(compressedContentsOfDirectoryAtURL:)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment containing a zipped archive of an existing directory on disk.

## Declaration

```swift
convenience init(compressedContentsOfDirectoryAtURL url: URL)
```

## Parameters

- `url`: A file URL for a directory whose contents should be compressed.

<a id="Discussion"></a>

## Discussion

Zips the contents of the provided directory and wraps the compressed output in an attachment with a [uniformTypeIdentifier](uniformtypeidentifier.md) of `"public.zip-archive"`. The attachment’s [name](name.md) property is set to the name of the zipped directory followed by an extension of `".zip"`.

Available on macOS only.

## See Also

### Creating Attachments from Files and Folders

- [init(contentsOfFileAtURL:)](init%28contentsoffileaturl_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk.
- [init(contentsOfFileAtURL:uniformTypeIdentifier:)](init%28contentsoffileaturl_uniformtypeidentifier_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk, with a custom UTI.

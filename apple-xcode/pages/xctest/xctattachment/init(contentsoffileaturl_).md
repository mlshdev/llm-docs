> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(contentsoffileaturl:)](https://developer.apple.com/documentation/xctest/xctattachment/init(contentsoffileaturl:))

# init(contentsOfFileAtURL:)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment from the contents of an existing file on disk.

## Declaration

```swift
convenience init(contentsOfFileAtURL url: URL)
```

## Parameters

- `url`: The file URL from which data should be read to create the new attachment.

<a id="Discussion"></a>

## Discussion

The attachment’s [name](name.md) property is the file name of the provided url. The attachment’s [uniformTypeIdentifier](uniformtypeidentifier.md) value is inferred from the file’s extension. A default UTI of `"public.data"` is used for files without an extension.

> **Note**

>  Use this initializer with files only. To create an attachment from a directory, use [init(compressedContentsOfDirectoryAtURL:)](init%28compressedcontentsofdirectoryaturl_%29.md).

## See Also

### Creating Attachments from Files and Folders

- [init(contentsOfFileAtURL:uniformTypeIdentifier:)](init%28contentsoffileaturl_uniformtypeidentifier_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk, with a custom UTI.
- [init(compressedContentsOfDirectoryAtURL:)](init%28compressedcontentsofdirectoryaturl_%29.md): Deprecated. Creates an attachment containing a zipped archive of an existing directory on disk.

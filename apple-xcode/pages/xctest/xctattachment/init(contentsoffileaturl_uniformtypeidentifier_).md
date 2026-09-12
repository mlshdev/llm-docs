> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctattachment/init(contentsoffileaturl:uniformtypeidentifier:)](https://developer.apple.com/documentation/xctest/xctattachment/init(contentsoffileaturl:uniformtypeidentifier:))

# init(contentsOfFileAtURL:uniformTypeIdentifier:)

**Framework:** XCTest  
**Kind:** Initializer

Creates an attachment from the contents of an existing file on disk, with a custom UTI.

## Declaration

```swift
convenience init(contentsOfFileAtURL url: URL, uniformTypeIdentifier identifier: String)
```

## Parameters

- `url`: The file URL from which data should be read to create the new attachment.
- `identifier`: A custom UTI to represent the file’s content type.

<a id="Discussion"></a>

## Discussion

The attachment’s [name](name.md) property is the file name of the provided url.

> **Note**

>  Use this initializer with files only. To create an attachment from a directory, use [init(compressedContentsOfDirectoryAtURL:)](init%28compressedcontentsofdirectoryaturl_%29.md).

## See Also

### Creating Attachments from Files and Folders

- [init(contentsOfFileAtURL:)](init%28contentsoffileaturl_%29.md): Deprecated. Creates an attachment from the contents of an existing file on disk.
- [init(compressedContentsOfDirectoryAtURL:)](init%28compressedcontentsofdirectoryaturl_%29.md): Deprecated. Creates an attachment containing a zipped archive of an existing directory on disk.

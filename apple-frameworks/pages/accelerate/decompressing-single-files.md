> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/decompressing-single-files](https://developer.apple.com/documentation/accelerate/decompressing-single-files)

# Decompressing single files (Swift)

**Framework:** Accelerate  
**Kind:** Article

Recreate a single file from a compressed file.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to decompress a previously compressed file, and write the decompressed data to a file.

The code below decompresses the file generated using the steps explained in [Compressing single files](compressing-single-files.md).

<a id="Create-the-file-stream-to-read-the-source-archive"></a>

### Create the file stream to read the source archive

The [ArchiveByteStream](../applearchive/archivebytestream.md) class provides static factory methods that create streams for different functions. In this case, use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create a byte stream that reads the source file:

```swift
let archiveFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf.lzfse")

guard let readFileStream = ArchiveByteStream.fileStream(
        path: archiveFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? readFileStream.close()
}
```

<a id="Create-the-file-stream-to-write-the-decompressed-file"></a>

### Create the file stream to write the decompressed file

You also use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the decompressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let destinationFilePath = FilePath(NSTemporaryDirectory() + "myFile_decompressed.pdf")

guard let writeFileStream = ArchiveByteStream.fileStream(
        path: destinationFilePath,
        mode: .writeOnly,
        options: [ .create ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? writeFileStream.close()
}
```

<a id="Create-the-decompression-stream"></a>

### Create the decompression stream

Create the decompression stream. Specify the file-reading stream as the input stream that provides the compressed data:

```swift
guard let decompressStream = ArchiveByteStream.decompressionStream(readingFrom: readFileStream) else {
    print("unable to create compress stream")
    return
}
defer {
    try? decompressStream.close()
}
```

<a id="Decompress-the-source-archive"></a>

### Decompress the source archive

Finally, call [process(readingFrom:writingTo:)](../applearchive/archivebytestream/process%28readingfrom_writingto_%29.md) to write the output of the decompression stream to the file-writing stream:

```swift
do {
    _ = try ArchiveByteStream.process(readingFrom: decompressStream,
                                      writingTo: writeFileStream)
} catch {
    print("Handle `ArchiveByteStream.process` failed.")
}
```

On return, `myFile_decompressed.pdf` exists in [NSTemporaryDirectory()](../foundation/nstemporarydirectory%28%29.md) and contains the decompressed contents of `myFile.pdf.lzfse`.

## See Also

### Directories, Files, and Data Archives

- [Compressing single files](compressing-single-files.md): Compress a single file and store the result on the file system.
- [Compressing file system directories](compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

# Decompressing single files (Objective-C)

**Framework:** Accelerate  
**Kind:** Article

Recreate a single file from a compressed file.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to decompress a previously compressed file, and write the decompressed data to a file.

The code below decompresses the file generated using the steps explained in [Compressing single files](compressing-single-files.md).

<a id="Create-the-file-stream-to-read-the-source-archive"></a>

### Create the file stream to read the source archive

The [ArchiveByteStream](../applearchive/archivebytestream.md) class provides static factory methods that create streams for different functions. In this case, use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create a byte stream that reads the source file:

```swift
let archiveFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf.lzfse")

guard let readFileStream = ArchiveByteStream.fileStream(
        path: archiveFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? readFileStream.close()
}
```

<a id="Create-the-file-stream-to-write-the-decompressed-file"></a>

### Create the file stream to write the decompressed file

You also use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the decompressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let destinationFilePath = FilePath(NSTemporaryDirectory() + "myFile_decompressed.pdf")

guard let writeFileStream = ArchiveByteStream.fileStream(
        path: destinationFilePath,
        mode: .writeOnly,
        options: [ .create ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? writeFileStream.close()
}
```

<a id="Create-the-decompression-stream"></a>

### Create the decompression stream

Create the decompression stream. Specify the file-reading stream as the input stream that provides the compressed data:

```swift
guard let decompressStream = ArchiveByteStream.decompressionStream(readingFrom: readFileStream) else {
    print("unable to create compress stream")
    return
}
defer {
    try? decompressStream.close()
}
```

<a id="Decompress-the-source-archive"></a>

### Decompress the source archive

Finally, call [process(readingFrom:writingTo:)](../applearchive/archivebytestream/process%28readingfrom_writingto_%29.md) to write the output of the decompression stream to the file-writing stream:

```swift
do {
    _ = try ArchiveByteStream.process(readingFrom: decompressStream,
                                      writingTo: writeFileStream)
} catch {
    print("Handle `ArchiveByteStream.process` failed.")
}
```

On return, `myFile_decompressed.pdf` exists in [NSTemporaryDirectory](../foundation/nstemporarydirectory%28%29.md) and contains the decompressed contents of `myFile.pdf.lzfse`.

## See Also

### Directories, Files, and Data Archives

- [Compressing single files](compressing-single-files.md): Compress a single file and store the result on the file system.
- [Compressing file system directories](compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

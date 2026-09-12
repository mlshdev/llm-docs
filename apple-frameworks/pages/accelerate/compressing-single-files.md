> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/compressing-single-files](https://developer.apple.com/documentation/accelerate/compressing-single-files)

# Compressing single files (Swift)

**Framework:** Accelerate  
**Kind:** Article

Compress a single file and store the result on the file system.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to compress a single-source file, and write the compressed data to a file.

The code below compresses a file named `myFile.pdf` using the [Algorithm.lzfse](../compression/algorithm/lzfse.md) algorithm, and stores the result in a file named `myFile.pdf.lzfse`.

<a id="Create-the-file-stream-to-read-the-source-file"></a>

### Create the file stream to read the source file

The [ArchiveByteStream](../applearchive/archivebytestream.md) class provides static factory methods that create streams for different functions. In this case, use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create a byte stream that reads the source file:

```swift
let sourceFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf")

guard let readFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? readFileStream.close()
}
```

<a id="Create-the-file-stream-to-write-the-compressed-file"></a>

### Create the file stream to write the compressed file

You also use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the compressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let archiveFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf.lzfse")

guard let writeFileStream = ArchiveByteStream.fileStream(
        path: archiveFilePath,
        mode: .writeOnly,
        options: [ .create ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? writeFileStream.close()
}
```

<a id="Create-the-compression-stream"></a>

### Create the compression stream

Create the compression stream, and specify the compression algorithm as [lzfse](../applearchive/archivecompression/lzfse.md). Specify the file-writing stream as the stream that receives the compressed data:

```swift
guard let compressStream = ArchiveByteStream.compressionStream(
        using: .lzfse,
        writingTo: writeFileStream) else {
    return
}
defer {
    try? compressStream.close()
}
```

<a id="Compress-the-source-file"></a>

### Compress the source file

Finally, call [process(readingFrom:writingTo:)](../applearchive/archivebytestream/process%28readingfrom_writingto_%29.md) to send the output of the file-reading stream to the compression stream. In turn, the compression stream sends its output to the file-writing stream:

```swift
do {
    _ = try ArchiveByteStream.process(readingFrom: readFileStream,
                                      writingTo: compressStream)
} catch {
    print("Handle `ArchiveByteStream.process` failed.")
}
```

On return, `myFile.pdf.lzfse` exists in [NSTemporaryDirectory()](../foundation/nstemporarydirectory%28%29.md) and contains the compressed contents of `myFile.pdf`.

## See Also

### Directories, Files, and Data Archives

- [Decompressing single files](decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

# Compressing single files (Objective-C)

**Framework:** Accelerate  
**Kind:** Article

Compress a single file and store the result on the file system.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to compress a single-source file, and write the compressed data to a file.

The code below compresses a file named `myFile.pdf` using the [Algorithm.lzfse](../compression/algorithm/lzfse.md) algorithm, and stores the result in a file named `myFile.pdf.lzfse`.

<a id="Create-the-file-stream-to-read-the-source-file"></a>

### Create the file stream to read the source file

The [ArchiveByteStream](../applearchive/archivebytestream.md) class provides static factory methods that create streams for different functions. In this case, use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create a byte stream that reads the source file:

```swift
let sourceFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf")

guard let readFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? readFileStream.close()
}
```

<a id="Create-the-file-stream-to-write-the-compressed-file"></a>

### Create the file stream to write the compressed file

You also use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the compressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let archiveFilePath = FilePath(NSTemporaryDirectory() + "myFile.pdf.lzfse")

guard let writeFileStream = ArchiveByteStream.fileStream(
        path: archiveFilePath,
        mode: .writeOnly,
        options: [ .create ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    return
}
defer {
    try? writeFileStream.close()
}
```

<a id="Create-the-compression-stream"></a>

### Create the compression stream

Create the compression stream, and specify the compression algorithm as [lzfse](../applearchive/archivecompression/lzfse.md). Specify the file-writing stream as the stream that receives the compressed data:

```swift
guard let compressStream = ArchiveByteStream.compressionStream(
        using: .lzfse,
        writingTo: writeFileStream) else {
    return
}
defer {
    try? compressStream.close()
}
```

<a id="Compress-the-source-file"></a>

### Compress the source file

Finally, call [process(readingFrom:writingTo:)](../applearchive/archivebytestream/process%28readingfrom_writingto_%29.md) to send the output of the file-reading stream to the compression stream. In turn, the compression stream sends its output to the file-writing stream:

```swift
do {
    _ = try ArchiveByteStream.process(readingFrom: readFileStream,
                                      writingTo: compressStream)
} catch {
    print("Handle `ArchiveByteStream.process` failed.")
}
```

On return, `myFile.pdf.lzfse` exists in [NSTemporaryDirectory](../foundation/nstemporarydirectory%28%29.md) and contains the compressed contents of `myFile.pdf`.

## See Also

### Directories, Files, and Data Archives

- [Decompressing single files](decompressing-single-files.md): Recreate a single file from a compressed file.
- [Compressing file system directories](compressing-file-system-directories.md): Compress the contents of an entire directory and store the result on the file system.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

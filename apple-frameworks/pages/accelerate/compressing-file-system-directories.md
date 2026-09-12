> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/compressing-file-system-directories](https://developer.apple.com/documentation/accelerate/compressing-file-system-directories)

# Compressing file system directories (Swift)

**Framework:** Accelerate  
**Kind:** Article

Compress the contents of an entire directory and store the result on the file system.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to compress the contents of an entire directory to a single archive file.

The code below compresses the contents of a directory name `src` using the [Algorithm.lzfse](../compression/algorithm/lzfse.md) algorithm, and stores the result in a file named `directory.aar`.

<a id="Create-the-file-stream-to-write-the-compressed-file"></a>

### Create the file stream to write the compressed file

Use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the compressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let archiveDestination = NSTemporaryDirectory() + "directory.aar"
let archiveFilePath = FilePath(archiveDestination)

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

<a id="Create-the-encoding-stream"></a>

### Create the encoding stream

Create the encoding stream. The encoding stream encodes its data as a byte stream, and sends the encoded data to the compression stream:

```swift
guard let encodeStream = ArchiveStream.encodeStream(writingTo: compressStream) else {
    return
}
defer {
    try? encodeStream.close()
}
```

<a id="Define-the-header-keys"></a>

### Define the header keys

Create a field key set that defines the fields in the archive header:

```swift
guard let keySet = ArchiveHeader.FieldKeySet("TYP,PAT,LNK,DEV,DAT,UID,GID,MOD,FLG,MTM,BTM,CTM") else {
    return
}
```

For more information about three-letter keys, see [init(\_:)](../applearchive/archiveheader/fieldkeyset/init%28__%29.md).

<a id="Compress-the-directory-contents"></a>

### Compress the directory contents

Use [writeDirectoryContents(archiveFrom:path:keySet:selectUsing:flags:threadCount:)](../applearchive/archivestream/writedirectorycontents%28archivefrom_path_keyset_selectusing_flags_threadcount_%29.md) to write the directory contents to the encode stream. In turn, the encode stream writes to the compression stream and then, the compression stream writes to the file stream. Finally, the file stream writes the archive file to the file system:

```swift
let sourcePath = NSTemporaryDirectory() + "src/"
let source = FilePath(sourcePath)

do {
    try encodeStream.writeDirectoryContents(
        archiveFrom: source,
        keySet: keySet)
} catch {
    fatalError("Write directory contents failed.")
}
```

On return, `directory.aar` exists in [NSTemporaryDirectory()](../foundation/nstemporarydirectory%28%29.md) and contains the compressed contents of `src/`.

## See Also

### Directories, Files, and Data Archives

- [Compressing single files](compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](decompressing-single-files.md): Recreate a single file from a compressed file.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

# Compressing file system directories (Objective-C)

**Framework:** Accelerate  
**Kind:** Article

Compress the contents of an entire directory and store the result on the file system.

<a id="overview"></a>

## Overview

In this article, you’ll learn how to use AppleArchive to compress the contents of an entire directory to a single archive file.

The code below compresses the contents of a directory name `src` using the [Algorithm.lzfse](../compression/algorithm/lzfse.md) algorithm, and stores the result in a file named `directory.aar`.

<a id="Create-the-file-stream-to-write-the-compressed-file"></a>

### Create the file stream to write the compressed file

Use [fileStream(path:mode:options:permissions:)](../applearchive/archivebytestream/filestream%28path_mode_options_permissions_%29.md) to create the file stream that writes the compressed file to the file system. In this case, use the [writeOnly](../system/filedescriptor/accessmode/writeonly.md) mode:

```swift
let archiveDestination = NSTemporaryDirectory() + "directory.aar"
let archiveFilePath = FilePath(archiveDestination)

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

<a id="Create-the-encoding-stream"></a>

### Create the encoding stream

Create the encoding stream. The encoding stream encodes its data as a byte stream, and sends the encoded data to the compression stream:

```swift
guard let encodeStream = ArchiveStream.encodeStream(writingTo: compressStream) else {
    return
}
defer {
    try? encodeStream.close()
}
```

<a id="Define-the-header-keys"></a>

### Define the header keys

Create a field key set that defines the fields in the archive header:

```swift
guard let keySet = ArchiveHeader.FieldKeySet("TYP,PAT,LNK,DEV,DAT,UID,GID,MOD,FLG,MTM,BTM,CTM") else {
    return
}
```

For more information about three-letter keys, see [init(\_:)](../applearchive/archiveheader/fieldkeyset/init%28__%29.md).

<a id="Compress-the-directory-contents"></a>

### Compress the directory contents

Use [writeDirectoryContents(archiveFrom:path:keySet:selectUsing:flags:threadCount:)](../applearchive/archivestream/writedirectorycontents%28archivefrom_path_keyset_selectusing_flags_threadcount_%29.md) to write the directory contents to the encode stream. In turn, the encode stream writes to the compression stream and then, the compression stream writes to the file stream. Finally, the file stream writes the archive file to the file system:

```swift
let sourcePath = NSTemporaryDirectory() + "src/"
let source = FilePath(sourcePath)

do {
    try encodeStream.writeDirectoryContents(
        archiveFrom: source,
        keySet: keySet)
} catch {
    fatalError("Write directory contents failed.")
}
```

On return, `directory.aar` exists in [NSTemporaryDirectory](../foundation/nstemporarydirectory%28%29.md) and contains the compressed contents of `src/`.

## See Also

### Directories, Files, and Data Archives

- [Compressing single files](compressing-single-files.md): Compress a single file and store the result on the file system.
- [Decompressing single files](decompressing-single-files.md): Recreate a single file from a compressed file.
- [Decompressing and extracting an archived directory](decompressing-and-extracting-an-archived-directory.md): Recreate an entire file system directory from an archive file.
- [Compressing and saving a string to the file system](compressing-and-saving-a-string-to-the-file-system.md): Compress the contents of a Unicode string and store the result on the file system.
- [Decompressing and parsing an archived string](decompressing-and-parsing-an-archived-string.md): Recreate a string from an archive file.

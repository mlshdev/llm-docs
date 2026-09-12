> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/encrypting-and-decrypting-a-single-file](https://developer.apple.com/documentation/applearchive/encrypting-and-decrypting-a-single-file)

# Encrypting and Decrypting a Single File (Swift)

**Framework:** Apple Archive  
**Kind:** Sample Code  
**Availability:** macOS 12.0+ · Xcode 13.0+

Encrypt a single file and save the result to the file system, then decrypt and recreate the original file from the archive file using Apple Encrypted Archive.

<a id="Overview"></a>

## Overview

This sample code project implements the Apple Encrypted Archive library to compress and encrypt the contents of a single file using a [`SymmetricKey`](../cryptokit/symmetrickey.md). The sample saves the encrypted file to the user’s temporary directory and then calls a second function that decrypts the contents of the archive and recreates the original file.

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

Before running the sample code project in Xcode, ensure you have a file in your temporary directory (see: [`NSTemporaryDirectory()`](../foundation/nstemporarydirectory%28%29.md)) named `file.txt`.

<a id="Define-File-Paths"></a>

### Define File Paths

The sample code project defines [`FilePath`](../system/filepath.md) structures that represent the locations of the source file, the encrypted version of the source file, and the recreated, unencrypted version of the source file.

```swift
// The sample defines a `FilePath` structure that represents the path of
// the source file. Before running the same, you must have a file in
// your temporary directory named `file.txt`.
let sourceFilePath = FilePath(NSTemporaryDirectory() + "file.txt")

// The sample writes the encrypted source file to the path defined by
// the `encryptedFilePath` file path structure.
let encryptedFilePath = FilePath(NSTemporaryDirectory() + "file.encrypted")

// The sample defines a `FilePath` structure that represents the path of
// the decrypted recreation of the original file.
let decryptedFilePath = FilePath(NSTemporaryDirectory() + "file.decrypted.txt")
```

<a id="Generate-a-Symmetric-Key"></a>

### Generate a Symmetric Key

The sample imports the [Apple CryptoKit](../cryptokit.md) framework to generate the symmetric cryptographic key.

```swift
let key = SymmetricKey(size: SymmetricKeySize.bits256)
```

The sample uses the same key for encryption and decryption.

<a id="Create-a-Context-for-Encryption"></a>

### Create a Context for Encryption

An `ArchiveEncryptionContext` object contains the parameters, keys, and other data that the Apple Encrypted Archive library requires to open an encrypted archive for encryption and decryption streams. The sample initializes the context with a profile and compression algorithm, and its symmetric key set for encryption.

```swift
let context = ArchiveEncryptionContext(profile: .hkdf_sha256_aesctr_hmac__symmetric__none,
                                       compressionAlgorithm: .lzfse)
try context.setSymmetricKey(key)
```

<a id="Open-Source-and-Destination-File-Streams"></a>

### Open Source and Destination File Streams

The sample creates a [`readOnly`](../system/filedescriptor/accessmode/readonly.md) file stream to read the source file, and a [`writeOnly`](../system/filedescriptor/accessmode/writeonly.md) file stream to write the encrypted file to the file system.

```swift
guard let sourceFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)),
      let destinationFileStream = ArchiveByteStream.fileStream(
        path: destinationFilePath,
        mode: .writeOnly,
        options: [ .create, .truncate ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Create-the-Encryption-Stream"></a>

### Create the Encryption Stream

The encryption stream uses the encryption context and the destination file stream to write the encrypted string to the file system.

```swift
guard let encryptionStream = ArchiveByteStream.encryptionStream(
        writingTo: destinationFileStream,
        encryptionContext: context) else {
    throw Error.unableToCreateEncryptionStream
}
```

<a id="Encrypt-the-File"></a>

### Encrypt the File

The [`process(readingFrom:writingTo:)`](archivebytestream/process%28readingfrom_writingto_%29.md) function sends the output of the file-reading stream to the encryption stream. In turn, the compression stream sends its output to the file-writing stream and writes the encrypted file to the file system.

```swift
_ = try ArchiveByteStream.process(readingFrom: sourceFileStream,
                                  writingTo: encryptionStream)
```

<a id="Open-the-Source-File-Stream"></a>

### Open the Source File Stream

The sample creates a source file stream to open the encrypted file.

```swift
guard let sourceFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Create-a-Context-for-Decryption"></a>

### Create a Context for Decryption

The  `ArchiveEncryptionContext` object for decryption derives its parameters, keys, and other data from the encrypted source file, and the sample sets the decryption context with the same symmetric key that was used for encryption.

```swift
guard let decryptionContext = ArchiveEncryptionContext(from: sourceFileStream) else {
    throw Error.unableToCreateDecryptionContext
}

// Set the key on the context.
try decryptionContext.setSymmetricKey(key)
```

<a id="Create-the-Decryption-Stream"></a>

### Create the Decryption Stream

The decryption stream uses the encryption context and the source file stream to read the encrypted string from the file system.

```swift
guard let decryptionStream = ArchiveByteStream.decryptionStream(
    readingFrom: sourceFileStream,
    encryptionContext: decryptionContext) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Open-the-Destination-File-Stream"></a>

### Open the Destination File Stream

The destination file stream writes the encrypted file to the file system. In this case, the file stream’s mode is [`writeOnly`](../system/filedescriptor/accessmode/writeonly.md).  The options specify that the stream creates the file if it doesn’t exist, and that if the file does exist, it should be truncated to zero bytes before the stream performs any operations.

```swift
guard let decryptedFileStream = ArchiveByteStream.fileStream(
    path: destinationFilePath,
    mode: .writeOnly,
    options: [ .create, .truncate ],
    permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Decrypt-the-Source-Archive"></a>

### Decrypt the Source Archive

The [process(readingFrom:writingTo:)](archivebytestream/process%28readingfrom_writingto_%29.md) method writes the output of the decryption stream to the file-writing stream.

```swift
_ = try ArchiveByteStream.process(readingFrom: decryptionStream,
                                  writingTo: decryptedFileStream)
```

On return, `file.decrypted.txt` exists in [`NSTemporaryDirectory()`](../foundation/nstemporarydirectory%28%29.md) and contains the decrypted contents of `file.encrypted`.

## See Also

### Apple Encrypted Archive essentials

- [Encrypting and Decrypting a String](encrypting-and-decrypting-a-string.md): Encrypt the contents of a string and save the result to the file system, then decrypt and recreate the string from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting Directories](encrypting-and-decrypting-directories.md): Compress and encrypt the contents of an entire directory or decompress and decrypt an archived directory using Apple Encrypted Archive.
- [ArchiveEncryptionContext](archiveencryptioncontext.md): An object that encapsulates all parameters, keys, and data necessary to open an encrypted archive for both encryption and decryption streams.

# Encrypting and Decrypting a Single File (Objective-C)

**Framework:** Apple Archive  
**Kind:** Sample Code  
**Availability:** macOS 12.0+ · Xcode 13.0+

Encrypt a single file and save the result to the file system, then decrypt and recreate the original file from the archive file using Apple Encrypted Archive.

<a id="Overview"></a>

## Overview

This sample code project implements the Apple Encrypted Archive library to compress and encrypt the contents of a single file using a [`SymmetricKey`](../cryptokit/symmetrickey.md). The sample saves the encrypted file to the user’s temporary directory and then calls a second function that decrypts the contents of the archive and recreates the original file.

<a id="Configure-the-Sample-Code-Project"></a>

### Configure the Sample Code Project

Before running the sample code project in Xcode, ensure you have a file in your temporary directory (see: [`NSTemporaryDirectory()`](../foundation/nstemporarydirectory%28%29.md)) named `file.txt`.

<a id="Define-File-Paths"></a>

### Define File Paths

The sample code project defines [`FilePath`](../system/filepath.md) structures that represent the locations of the source file, the encrypted version of the source file, and the recreated, unencrypted version of the source file.

```swift
// The sample defines a `FilePath` structure that represents the path of
// the source file. Before running the same, you must have a file in
// your temporary directory named `file.txt`.
let sourceFilePath = FilePath(NSTemporaryDirectory() + "file.txt")

// The sample writes the encrypted source file to the path defined by
// the `encryptedFilePath` file path structure.
let encryptedFilePath = FilePath(NSTemporaryDirectory() + "file.encrypted")

// The sample defines a `FilePath` structure that represents the path of
// the decrypted recreation of the original file.
let decryptedFilePath = FilePath(NSTemporaryDirectory() + "file.decrypted.txt")
```

<a id="Generate-a-Symmetric-Key"></a>

### Generate a Symmetric Key

The sample imports the [Apple CryptoKit](../cryptokit.md) framework to generate the symmetric cryptographic key.

```swift
let key = SymmetricKey(size: SymmetricKeySize.bits256)
```

The sample uses the same key for encryption and decryption.

<a id="Create-a-Context-for-Encryption"></a>

### Create a Context for Encryption

An `ArchiveEncryptionContext` object contains the parameters, keys, and other data that the Apple Encrypted Archive library requires to open an encrypted archive for encryption and decryption streams. The sample initializes the context with a profile and compression algorithm, and its symmetric key set for encryption.

```swift
let context = ArchiveEncryptionContext(profile: .hkdf_sha256_aesctr_hmac__symmetric__none,
                                       compressionAlgorithm: .lzfse)
try context.setSymmetricKey(key)
```

<a id="Open-Source-and-Destination-File-Streams"></a>

### Open Source and Destination File Streams

The sample creates a [`readOnly`](../system/filedescriptor/accessmode/readonly.md) file stream to read the source file, and a [`writeOnly`](../system/filedescriptor/accessmode/writeonly.md) file stream to write the encrypted file to the file system.

```swift
guard let sourceFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)),
      let destinationFileStream = ArchiveByteStream.fileStream(
        path: destinationFilePath,
        mode: .writeOnly,
        options: [ .create, .truncate ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Create-the-Encryption-Stream"></a>

### Create the Encryption Stream

The encryption stream uses the encryption context and the destination file stream to write the encrypted string to the file system.

```swift
guard let encryptionStream = ArchiveByteStream.encryptionStream(
        writingTo: destinationFileStream,
        encryptionContext: context) else {
    throw Error.unableToCreateEncryptionStream
}
```

<a id="Encrypt-the-File"></a>

### Encrypt the File

The [`process(readingFrom:writingTo:)`](archivebytestream/process%28readingfrom_writingto_%29.md) function sends the output of the file-reading stream to the encryption stream. In turn, the compression stream sends its output to the file-writing stream and writes the encrypted file to the file system.

```swift
_ = try ArchiveByteStream.process(readingFrom: sourceFileStream,
                                  writingTo: encryptionStream)
```

<a id="Open-the-Source-File-Stream"></a>

### Open the Source File Stream

The sample creates a source file stream to open the encrypted file.

```swift
guard let sourceFileStream = ArchiveByteStream.fileStream(
        path: sourceFilePath,
        mode: .readOnly,
        options: [ ],
        permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Create-a-Context-for-Decryption"></a>

### Create a Context for Decryption

The  `ArchiveEncryptionContext` object for decryption derives its parameters, keys, and other data from the encrypted source file, and the sample sets the decryption context with the same symmetric key that was used for encryption.

```swift
guard let decryptionContext = ArchiveEncryptionContext(from: sourceFileStream) else {
    throw Error.unableToCreateDecryptionContext
}

// Set the key on the context.
try decryptionContext.setSymmetricKey(key)
```

<a id="Create-the-Decryption-Stream"></a>

### Create the Decryption Stream

The decryption stream uses the encryption context and the source file stream to read the encrypted string from the file system.

```swift
guard let decryptionStream = ArchiveByteStream.decryptionStream(
    readingFrom: sourceFileStream,
    encryptionContext: decryptionContext) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Open-the-Destination-File-Stream"></a>

### Open the Destination File Stream

The destination file stream writes the encrypted file to the file system. In this case, the file stream’s mode is [`writeOnly`](../system/filedescriptor/accessmode/writeonly.md).  The options specify that the stream creates the file if it doesn’t exist, and that if the file does exist, it should be truncated to zero bytes before the stream performs any operations.

```swift
guard let decryptedFileStream = ArchiveByteStream.fileStream(
    path: destinationFilePath,
    mode: .writeOnly,
    options: [ .create, .truncate ],
    permissions: FilePermissions(rawValue: 0o644)) else {
    throw Error.unableToCreateFileStream
}
```

<a id="Decrypt-the-Source-Archive"></a>

### Decrypt the Source Archive

The [process(readingFrom:writingTo:)](archivebytestream/process%28readingfrom_writingto_%29.md) method writes the output of the decryption stream to the file-writing stream.

```swift
_ = try ArchiveByteStream.process(readingFrom: decryptionStream,
                                  writingTo: decryptedFileStream)
```

On return, `file.decrypted.txt` exists in [`NSTemporaryDirectory()`](../foundation/nstemporarydirectory%28%29.md) and contains the decrypted contents of `file.encrypted`.

## See Also

### Apple Encrypted Archive essentials

- [Encrypting and Decrypting a String](encrypting-and-decrypting-a-string.md): Encrypt the contents of a string and save the result to the file system, then decrypt and recreate the string from the archive file using Apple Encrypted Archive.
- [Encrypting and Decrypting Directories](encrypting-and-decrypting-directories.md): Compress and encrypt the contents of an entire directory or decompress and decrypt an archived directory using Apple Encrypted Archive.

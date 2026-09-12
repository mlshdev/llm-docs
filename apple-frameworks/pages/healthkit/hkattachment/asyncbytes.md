> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachment/asyncbytes](https://developer.apple.com/documentation/healthkit/hkattachment/asyncbytes)

# HKAttachment.AsyncBytes

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

An asynchronous sequence that returns the attached file as a series of bytes.

## Declaration

```swift
struct AsyncBytes
```

<a id="overview"></a>

## Overview

To access the attachment file as an asynchronous sequence of bytes, get a data reader from the attachment store, and then access its [bytes](../hkattachmentdatareader/bytes.md) using a `for-await-in` loop.

```swift
// Get a data reader for the attachment.
let dataReader = attachmentStore.dataReader(for: myAttachment)

// Asynchronously access the attachment's bytes.
var data = Data()
do {
    for try await byte in dataReader.bytes {
        data.append(byte)
    }
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while reading the attachment's data: \(error.localizedDescription) ***")
}

// Use the data here.
```

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Accessing attachment data

- [name](name.md): The name of the attached file.
- [identifier](identifier.md): The universally unique identifier for the attached file.
- [contentType](contenttype.md): The type of data stored in the attached file.
- [size](size.md): The attachment’s size (in bytes).
- [creationDate](creationdate.md): The attachment’s creation date.
- [metadata](metadata.md): Additional data associated with the attachment in the HealthKit store.

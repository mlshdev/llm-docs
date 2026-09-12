> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentdatareader](https://developer.apple.com/documentation/healthkit/hkattachmentdatareader)

# HKAttachmentDataReader

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

A reader that provides access to an attachment’s data.

## Declaration

```swift
class HKAttachmentDataReader
```

<a id="overview"></a>

## Overview

To access the attachment’s data, get a data reader from the attachment store.

```swift
let attachmentStore = HKAttachmentStore(healthStore: store)

// Get a data reader for the attachment.
let dataReader = attachmentStore.dataReader(for: myAttachment)
```

You can then asynchronously access the whole data object.

```swift
let data: Data
do {
    data = try await dataReader.data
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
}
```

Alternatively, you can access the file’s contents as an asynchronous sequence of bytes.

```swift
// Asynchronously access the attachment's bytes.
var data = Data()
do {
    for try await byte in dataReader.bytes {
        // Use the bytes here.
        data.append(byte)
    }
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while reading the attachment's data: \(error.localizedDescription) ***")
}
```

## Topics

### Reading attachment data

- [data](hkattachmentdatareader/data.md): The abstract’s data.
- [bytes](hkattachmentdatareader/bytes.md): An asynchronous sequence that provides the attachment’s data.
- [progress](hkattachmentdatareader/progress.md): An object you can use to track the progress while reading an attachment’s data.

### Accessing the attachment object

- [attachment](hkattachmentdatareader/attachment.md): An attachment object that represents the file from which the reader is reading.

## See Also

### Attachments

- [HKAttachment](hkattachment.md): A file that is attached to a sample in the HealthKit store.
- [HKAttachmentStore](hkattachmentstore.md): The access point for attachments associated with samples in the HealthKit store.

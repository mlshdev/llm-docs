> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore/datareader(for:)](https://developer.apple.com/documentation/healthkit/hkattachmentstore/datareader(for:))

# dataReader(for:)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

Returns a data reader for the attachment.

## Declaration

```swift
func dataReader(for attachment: HKAttachment) -> HKAttachmentDataReader
```

## Parameters

- `attachment`: An attachment associated with an object in the HealthKit store.

<a id="Discussion"></a>

## Discussion

Call this method to access a data reader for the attachment’s contents.

```swift
// Get a data reader for the attachment.
let dataReader = attachmentStore.dataReader(for: myAttachment)
```

You can then read the attachment’s contents from the data reader.

```swift
let data: Data
do {
    data = try await dataReader.data
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
}

// Use the data here.
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

## See Also

### Accessing attachments

- [getAttachments(for:completion:)](getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [getData(for:completion:)](getdata%28for_completion_%29.md): Returns an attachment’s data.
- [streamData(for:dataHandler:)](streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

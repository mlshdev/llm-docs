> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkattachmentdatareader/bytes

# bytes

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

An asynchronous sequence that provides the attachment’s data.

## Declaration

```swift
var bytes: HKAttachment.AsyncBytes { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the file’s contents as an asynchronous sequence of bytes.

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

### Reading attachment data

- [data](data.md): The abstract’s data.
- [progress](progress.md): An object you can use to track the progress while reading an attachment’s data.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentdatareader/data](https://developer.apple.com/documentation/healthkit/hkattachmentdatareader/data)

# data

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS · watchOS 9.0+

The abstract’s data.

## Declaration

```swift
var data: Data { get async throws }
```

<a id="Discussion"></a>

## Discussion

Use this property to asynchronously access the attachment’s data as a single data object.

```swift
let data: Data
do {
    data = try await dataReader.data
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
}
```

## See Also

### Reading attachment data

- [bytes](bytes.md): An asynchronous sequence that provides the attachment’s data.
- [progress](progress.md): An object you can use to track the progress while reading an attachment’s data.

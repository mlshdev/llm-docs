> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore/streamdata(for:datahandler:)](https://developer.apple.com/documentation/healthkit/hkattachmentstore/streamdata(for:datahandler:))

# streamData(for:dataHandler:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Asynchronously returns the attachment’s data.

## Declaration

```swift
func streamData(for attachment: HKAttachment, dataHandler: @escaping (Data?, (any Error)?, Bool) -> Void) -> Progress
```

## Parameters

- `attachment`: An attachment associated with an object in the HealthKit store.
- `dataHandler`: A closure that the system calls repeatedly to return the attachment’s contents. This closure takes the following parameters:

  - **dataChunk**: A data object that contains the next chunk of the attachment’s contents. If an error occurred, the system sets this property to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.
  - **done**: A Boolean value that indicates whether the transfer is complete. If this is the last `dataChunk`, the system sets this property to [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Call this method to incrementally read the attachment’s contents directly from the attachment store.

```swift
var data = Data()
attachmentStore.streamData(for: myAttachment) { dataChunk, error, done in
    
    if let error {
        // Handle the error here.
        fatalError("*** An error occurred while streaming the attachment's data. \(error.localizedDescription) ***")
    }
    
    guard let dataChunk else { return }
    
    data.append(dataChunk)
    
    if done {
        // Use the attachment's data here.
        print(data)
    }
}
```

## See Also

### Accessing attachments

- [getAttachments(for:completion:)](getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [dataReader(for:)](datareader%28for_%29.md): Returns a data reader for the attachment.
- [getData(for:completion:)](getdata%28for_completion_%29.md): Returns an attachment’s data.

# streamDataForAttachment:dataHandler: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Asynchronously returns the attachment’s data.

## Declaration

```objectivec
- (NSProgress *) streamDataForAttachment:(HKAttachment *) attachment dataHandler:(void (^)(NSData *dataChunk, NSError *error, BOOL done)) dataHandler;
```

## Parameters

- `attachment`: An attachment associated with an object in the HealthKit store.
- `dataHandler`: A closure that the system calls repeatedly to return the attachment’s contents. This closure takes the following parameters:

  - **dataChunk**: A data object that contains the next chunk of the attachment’s contents. If an error occurred, the system sets this property to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.
  - **done**: A Boolean value that indicates whether the transfer is complete. If this is the last `dataChunk`, the system sets this property to [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

Call this method to incrementally read the attachment’s contents directly from the attachment store.

```swift
var data = Data()
attachmentStore.streamData(for: myAttachment) { dataChunk, error, done in
    
    if let error {
        // Handle the error here.
        fatalError("*** An error occurred while streaming the attachment's data. \(error.localizedDescription) ***")
    }
    
    guard let dataChunk else { return }
    
    data.append(dataChunk)
    
    if done {
        // Use the attachment's data here.
        print(data)
    }
}
```

## See Also

### Accessing attachments

- [getAttachmentsForObject:completion:](getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [getDataForAttachment:completion:](getdata%28for_completion_%29.md): Returns an attachment’s data.

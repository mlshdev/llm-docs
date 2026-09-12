> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore/getdata(for:completion:)](https://developer.apple.com/documentation/healthkit/hkattachmentstore/getdata(for:completion:))

# getData(for:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns an attachment’s data.

## Declaration

```swift
func getData(for attachment: HKAttachment, completion: @escaping (Data?, (any Error)?) -> Void) -> Progress
```

## Parameters

- `attachment`: An attachment associated with an object in the HealthKit store.
- `completion`: A completion handler that the system calls to return the data. This handler takes the following parameters:

  - **attachmentData**: A [Data](../../foundation/data.md) object that contains the attachment’s contents. If an error occurs, the system sets this parameter to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to read the attachment’s contents directly from the attachment store.

```swift
let progress = attachmentStore.getData(for: myAttachment) { data, error in
    if let error {
        // Handle the error here.
        fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
    }
    
    // Use the data here.
}

// Monitor the progress here.
```

## See Also

### Accessing attachments

- [getAttachments(for:completion:)](getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [dataReader(for:)](datareader%28for_%29.md): Returns a data reader for the attachment.
- [streamData(for:dataHandler:)](streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

# getDataForAttachment:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns an attachment’s data.

## Declaration

```objectivec
- (NSProgress *) getDataForAttachment:(HKAttachment *) attachment completion:(void (^)(NSData *attachmentData, NSError *error)) completion;
```

## Parameters

- `attachment`: An attachment associated with an object in the HealthKit store.
- `completion`: A completion handler that the system calls to return the data. This handler takes the following parameters:

  - **attachmentData**: A [Data](../../foundation/data.md) object that contains the attachment’s contents. If an error occurs, the system sets this parameter to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to read the attachment’s contents directly from the attachment store.

```swift
let progress = attachmentStore.getData(for: myAttachment) { data, error in
    if let error {
        // Handle the error here.
        fatalError("*** An error occurred while accessing the attachment's data. \(error.localizedDescription) ***")
    }
    
    // Use the data here.
}

// Monitor the progress here.
```

## See Also

### Accessing attachments

- [getAttachmentsForObject:completion:](getattachments%28for_completion_%29.md): Returns all the attachments for the specified object.
- [streamDataForAttachment:dataHandler:](streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

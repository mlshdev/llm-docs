> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore/getattachments(for:completion:)](https://developer.apple.com/documentation/healthkit/hkattachmentstore/getattachments(for:completion:))

# getAttachments(for:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns all the attachments for the specified object.

## Declaration

```swift
func getAttachments(for object: HKObject, completion: @escaping @Sendable ([HKAttachment]?, (any Error)?) -> Void)
```

```swift
func attachments(for object: HKObject) async throws -> [HKAttachment]
```

## Parameters

- `object`: An object from the HealthKit store.
- `completion`: A completion handler that the system calls to return the attachment. This handler takes the following parameters:

  - **attachments**: An array of attachments. If an error occurs, the system sets this parameter to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to get all the attachments for the specified object.

```swift
let attachments: [HKAttachment]
do {
    attachments = try await attachmentStore.attachments(for: prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachments for a prescription: \(error.localizedDescription) ***")
}

// Use the attachments here.
```

## See Also

### Accessing attachments

- [dataReader(for:)](datareader%28for_%29.md): Returns a data reader for the attachment.
- [getData(for:completion:)](getdata%28for_completion_%29.md): Returns an attachment’s data.
- [streamData(for:dataHandler:)](streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

# getAttachmentsForObject:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Returns all the attachments for the specified object.

## Declaration

```objectivec
- (void) getAttachmentsForObject:(HKObject *) object completion:(void (^)(NSArray<HKAttachment *> *attachments, NSError *error)) completion;
```

## Parameters

- `object`: An object from the HealthKit store.
- `completion`: A completion handler that the system calls to return the attachment. This handler takes the following parameters:

  - **attachments**: An array of attachments. If an error occurs, the system sets this parameter to `nil`.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Call this method to get all the attachments for the specified object.

```swift
let attachments: [HKAttachment]
do {
    attachments = try await attachmentStore.attachments(for: prescription)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while accessing the attachments for a prescription: \(error.localizedDescription) ***")
}

// Use the attachments here.
```

## See Also

### Accessing attachments

- [getDataForAttachment:completion:](getdata%28for_completion_%29.md): Returns an attachment’s data.
- [streamDataForAttachment:dataHandler:](streamdata%28for_datahandler_%29.md): Asynchronously returns the attachment’s data.

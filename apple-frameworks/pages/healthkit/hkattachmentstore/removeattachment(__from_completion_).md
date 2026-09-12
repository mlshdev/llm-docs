> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkattachmentstore/removeattachment(_:from:completion:)](https://developer.apple.com/documentation/healthkit/hkattachmentstore/removeattachment(_:from:completion:))

# removeAttachment(\_:from:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Removes the specified attachment.

## Declaration

```swift
func removeAttachment(_ attachment: HKAttachment, from object: HKObject, completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func removeAttachment(_ attachment: HKAttachment, from object: HKObject) async throws
```

## Parameters

- `attachment`: An attachment associated with the specified object.
- `object`: An object from the HealthKit store.
- `completion`: A completion handler that the system calls after removing the attachment. This handler takes the following parameters:

  - **success**: A Boolean value that indicates whether the system successfully removed the attachment.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove an attachment from an object saved in the HealthKit store.

```swift
// Remove the attachment from the specified object.
do {
    try await attachmentStore.removeAttachment(myAttachment, from: myObject)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while removing an attachment: \(error.localizedDescription) ***")
}
```

# removeAttachment:fromObject:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Removes the specified attachment.

## Declaration

```objectivec
- (void) removeAttachment:(HKAttachment *) attachment fromObject:(HKObject *) object completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `attachment`: An attachment associated with the specified object.
- `object`: An object from the HealthKit store.
- `completion`: A completion handler that the system calls after removing the attachment. This handler takes the following parameters:

  - **success**: A Boolean value that indicates whether the system successfully removed the attachment.
  - **error**: If an error occurred, this parameter contains information about the error. Otherwise, it’s `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove an attachment from an object saved in the HealthKit store.

```swift
// Remove the attachment from the specified object.
do {
    try await attachmentStore.removeAttachment(myAttachment, from: myObject)
} catch {
    // Handle the error here.
    fatalError("*** An error occurred while removing an attachment: \(error.localizedDescription) ***")
}
```

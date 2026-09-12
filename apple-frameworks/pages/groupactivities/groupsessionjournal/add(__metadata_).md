> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsessionjournal/add(_:metadata:)](https://developer.apple.com/documentation/groupactivities/groupsessionjournal/add(_:metadata:))

# add(\_:metadata:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Adds the specified item and metadata to the journal and begins transferring the data to the other participants’ devices so they can access it.

## Declaration

```swift
final func add<ItemType, MetadataType>(_ item: ItemType, metadata: MetadataType) async throws -> GroupSessionJournal.Attachment where ItemType : Transferable, MetadataType : Decodable, MetadataType : Encodable
```

## Parameters

- `item`: The item to send to other session participants. The type you specify must conform to the [Transferable](../../coretransferable/transferable.md) protocol. For more information about creating transferable types, see [Core Transferable](../../coretransferable.md).
- `metadata`: Custom metadata to include with the item. Specify a [Codable](https://developer.apple.com/documentation/swift/codable) type that contains information to help your app interpret or process the item on other devices. For example, you might include app-specific details that aren’t part of the item’s intrinsic data format.

<a id="return-value"></a>

## Return Value

An attachment object you can remove by passing it to the [remove(attachment:)](remove%28attachment_%29.md) function.

<a id="discussion"></a>

## Discussion

Call this method when you want to send a file or codable data type to the other participants of an activity. The method runs asynchronously and can return before the upload operation finishes.

## See Also

### Uploading content to the session

- [add(\_:)](add%28__%29.md): Adds the specified item to the journal and begins transferring the item’s data to the other participants’ devices so they can access it.

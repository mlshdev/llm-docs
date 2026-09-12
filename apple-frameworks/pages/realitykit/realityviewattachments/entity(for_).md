> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewattachments/entity(for:)](https://developer.apple.com/documentation/realitykit/realityviewattachments/entity(for:))

# entity(for:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Gets the identified attachment view as an entity, if the view with that identifier exists.

## Declaration

```swift
func entity(for id: some Hashable) -> ViewAttachmentEntity?
```

## Parameters

- `id`: The value that you used to tag the view when you define it in the `attachments` parameter of the [RealityView](../realityview.md) initializer [init(make:update:attachments:)](../realityview/init%28make_update_attachments_%29.md).

<a id="return-value"></a>

## Return Value

The resolved attachment entity, or `nil` if [RealityView](../realityview.md) can’t find an attachment view with the given `id`.

<a id="discussion"></a>

## Discussion

Attachment entities are not automatically added to your [RealityView](../realityview.md)’s content. To display an attachment, add it to your [RealityView](../realityview.md)’s content using a function like `RealityViewContent/add(_:)`.

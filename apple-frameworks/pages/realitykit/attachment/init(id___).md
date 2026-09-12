> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachment/init(id:_:)](https://developer.apple.com/documentation/realitykit/attachment/init(id:_:))

# init(id:\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates an new attachment from an identifier and a closure.

## Declaration

```swift
nonisolated init(id: AnyHashable, @ViewBuilder _ content: @escaping () -> Content)
```

## Parameters

- `id`: An `AnyHashable` instance that identifies the attachment and a [ViewAttachmentEntity](../viewattachmententity.md).
- `content`: A `ViewBuilder` instance that contains the views for the attachment.

<a id="discussion"></a>

## Discussion

You can access details of an attachment entity, such as its bounds, by calling the methods of a [ViewAttachmentEntity](../viewattachmententity.md) instance. For example, you can add an attachment that contains the text `"hello"`.

```swift
Attachment(id: "example") {
    Text("hello")
}
```

> **Note**

> The initializer doesn’t automatically add the views to a [RealityView](../realityview.md) instance. You need to explicitly add each entity to your app’s scene hierarchy by directly placing an entity attachment to the view or as a child of another entity that’s already in the view.

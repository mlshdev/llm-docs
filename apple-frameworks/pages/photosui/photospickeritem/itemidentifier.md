> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/photospickeritem/itemidentifier](https://developer.apple.com/documentation/photosui/photospickeritem/itemidentifier)

# itemIdentifier

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS

The local identifier of the item.

## Declaration

```swift
var itemIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` if you create a Photos picker without a photo library.

## See Also

### Inspecting a picker item

- [supportedContentTypes](supportedcontenttypes.md): The content types the item supports in order of the most preferred to the least.

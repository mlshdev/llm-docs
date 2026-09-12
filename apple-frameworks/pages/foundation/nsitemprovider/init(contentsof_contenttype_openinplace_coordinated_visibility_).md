> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/init(contentsof:contenttype:openinplace:coordinated:visibility:)](https://developer.apple.com/documentation/foundation/nsitemprovider/init(contentsof:contenttype:openinplace:coordinated:visibility:))

# init(contentsOf:contentType:openInPlace:coordinated:visibility:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides data-backed content from an existing file with the specified parameters.

## Declaration

```swift
convenience init(contentsOf fileURL: URL, contentType: UTType?, openInPlace: Bool = false, coordinated: Bool = false, visibility: NSItemProviderRepresentationVisibility = .all)
```

## Parameters

- `fileURL`: The URL of the file to use for the item provider’s data.
- `contentType`: The content type of the specified file.
- `openInPlace`: `true` if the system opens the file in place.
- `coordinated`: `true` if the returned file must be accessed using [NSFileCoordinator](../nsfilecoordinator.md).
- `visibility`: The [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md) setting the system uses to identify which processes can see this content.

<a id="Discussion"></a>

## Discussion

If [openInPlace](../nsitemproviderfileoptions/openinplace.md) is set to `false`, the system copies the file provided before the load handler returns.

## See Also

### Creating an item provider

- [init(contentsOf:)](init%28contentsof_%29.md): Provides data-backed content from an existing file.
- [init(item:typeIdentifier:)](init%28item_typeidentifier_%29.md): Deprecated. Creates an item provider with an object, according to the item provider type coercion policy.
- [init()](init%28%29.md): Creates an empty item provider to which you can later register a data or file representation.
- [init(object:)](init%28object_%29.md): Creates a new item provider, employing a specified object’s type identifiers to specify the data representations eligible for the provider to load.

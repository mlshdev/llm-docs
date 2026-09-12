> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerfilerepresentation(for:visibility:openinplace:loadhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerfilerepresentation(for:visibility:openinplace:loadhandler:))

# registerFileRepresentation(for:visibility:openInPlace:loadHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

## Declaration

```swift
func registerFileRepresentation(for contentType: UTType, visibility: NSItemProviderRepresentationVisibility = .all, openInPlace: Bool = false, loadHandler: @escaping @Sendable (@escaping (URL?, Bool, (any Error)?) -> Void) -> Progress?)
```

<a id="Discussion"></a>

## Discussion

If a destination app must access the represented file using a file coordinator, set the `coordinated` parameter in the load handler block to [true](https://developer.apple.com/documentation/swift/true).

To offer a representation backed by a file provider, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. The file provider extension is then invoked to retrieve the file when requested.

To offer a representation backed by a file to open in place, set the fileOptions parameter to a value of [openInPlace](../nsitemproviderfileoptions/openinplace.md); in addition, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. Open-in-place support requires that the file provider is visible in the Files app.

## See Also

### Registering files

- [registerFileRepresentation(forTypeIdentifier:fileOptions:visibility:loadHandler:)](registerfilerepresentation%28fortypeidentifier_fileoptions_visibility_loadhandler_%29.md): Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerfilerepresentation(fortypeidentifier:fileoptions:visibility:loadhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerfilerepresentation(fortypeidentifier:fileoptions:visibility:loadhandler:))

# registerFileRepresentation(forTypeIdentifier:fileOptions:visibility:loadHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.

## Declaration

```swift
func registerFileRepresentation(forTypeIdentifier typeIdentifier: String, fileOptions: NSItemProviderFileOptions = [], visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping @Sendable (@escaping @Sendable (URL?, Bool, (any Error)?) -> Void) -> Progress?)
```

<a id="Discussion"></a>

## Discussion

If a destination app must access the represented file using a file coordinator, set the `coordinated` parameter in the load handler block to [true](https://developer.apple.com/documentation/swift/true).

To offer a representation backed by a file provider, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. The file provider extension is then invoked to retrieve the file when requested.

To offer a representation backed by a file to open in place, set the fileOptions parameter to a value of [openInPlace](../nsitemproviderfileoptions/openinplace.md); in addition, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. Open-in-place support requires that the file provider is visible in the Files app.

## See Also

### Registering files

- [registerFileRepresentation(for:visibility:openInPlace:loadHandler:)](registerfilerepresentation%28for_visibility_openinplace_loadhandler_%29.md): Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

# registerFileRepresentationForTypeIdentifier:fileOptions:visibility:loadHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Registers a file-backed representation for an item, specifying file options, item visibility, and a load handler.

## Declaration

```objectivec
- (void) registerFileRepresentationForTypeIdentifier:(NSString *) typeIdentifier fileOptions:(NSItemProviderFileOptions) fileOptions visibility:(NSItemProviderRepresentationVisibility) visibility loadHandler:(NSProgress * (^)(void (^completionHandler)(NSURL *url, BOOL coordinated, NSError *error))) loadHandler;
```

<a id="Discussion"></a>

## Discussion

If a destination app must access the represented file using a file coordinator, set the `coordinated` parameter in the load handler block to [true](https://developer.apple.com/documentation/swift/true).

To offer a representation backed by a file provider, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. The file provider extension is then invoked to retrieve the file when requested.

To offer a representation backed by a file to open in place, set the fileOptions parameter to a value of [NSItemProviderFileOptionOpenInPlace](../nsitemproviderfileoptions/openinplace.md); in addition, return an [NSURL](../nsurl.md) object that points to your app’s file provider’s container. Open-in-place support requires that the file provider is visible in the Files app.

## See Also

### Registering files

- [registerFileRepresentationForContentType:visibility:openInPlace:loadHandler:](registerfilerepresentationforcontenttype_visibility_openinplace_loadhandler_.md): Registers a file-backed representation for an item with item visibility, an open-in-place option, and a load handler.

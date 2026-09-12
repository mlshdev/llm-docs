> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/loadinplacefilerepresentation(fortypeidentifier:completionhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/loadinplacefilerepresentation(fortypeidentifier:completionhandler:))

# loadInPlaceFileRepresentation(forTypeIdentifier:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asynchronously opens a file in place, if possible, returning a progress object.

## Declaration

```swift
func loadInPlaceFileRepresentation(forTypeIdentifier typeIdentifier: String, completionHandler: @escaping @Sendable (URL?, Bool, (any Error)?) -> Void) -> Progress
```

<a id="Discussion"></a>

## Discussion

The system sets the `isInPlace` parameter to [true](https://developer.apple.com/documentation/swift/true) if the system successfully opened the file in place, or [false](https://developer.apple.com/documentation/swift/false) if it made a local copy. In either case, you must access the returned [URL](../url.md) using an [NSFileCoordinator](../nsfilecoordinator.md) object.

If the system created a local copy of a file, it will be automatically deleted after your file coordinator relinquishes its read access to the file.

## See Also

### Loading the provider’s contents

- [loadItem(forTypeIdentifier:options:completionHandler:)](loaditem%28fortypeidentifier_options_completionhandler_%29.md): Deprecated. Loads the item’s data and coerces it to the specified type.
- [loadDataRepresentation(forTypeIdentifier:completionHandler:)](loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentation(for:completionHandler:)](loaddatarepresentation%28for_completionhandler_%29.md): Asynchronously copies the universal type data into a generic data object, returning a progress object.
- [loadFileRepresentation(forTypeIdentifier:completionHandler:)](loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentation(for:openInPlace:completionHandler:)](loadfilerepresentation%28for_openinplace_completionhandler_%29.md): Asynchronously writes a copy of the universal type data to a temporary file, returning a progress object.
- [loadObject(ofClass:completionHandler:)](loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadObject(ofClass:completionHandler:)](loadobject%28ofclass_completionhandler_%29-6pysm.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadTransferable(type:completionHandler:)](loadtransferable%28type_completionhandler_%29.md): Asynchronously loads an object of a specified transferable type to an item provider, returning a progress object.

# loadInPlaceFileRepresentationForTypeIdentifier:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asynchronously opens a file in place, if possible, returning a progress object.

## Declaration

```objectivec
- (NSProgress *) loadInPlaceFileRepresentationForTypeIdentifier:(NSString *) typeIdentifier completionHandler:(void (^)(NSURL *url, BOOL isInPlace, NSError *error)) completionHandler;
```

<a id="Discussion"></a>

## Discussion

The system sets the `isInPlace` parameter to [true](https://developer.apple.com/documentation/swift/true) if the system successfully opened the file in place, or [false](https://developer.apple.com/documentation/swift/false) if it made a local copy. In either case, you must access the returned [URL](../url.md) using an [NSFileCoordinator](../nsfilecoordinator.md) object.

If the system created a local copy of a file, it will be automatically deleted after your file coordinator relinquishes its read access to the file.

## See Also

### Loading the provider’s contents

- [loadItemForTypeIdentifier:options:completionHandler:](loaditem%28fortypeidentifier_options_completionhandler_%29.md): Deprecated. Loads the item’s data and coerces it to the specified type.
- [loadDataRepresentationForTypeIdentifier:completionHandler:](loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentationForContentType:completionHandler:](loaddatarepresentationforcontenttype_completionhandler_.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadFileRepresentationForTypeIdentifier:completionHandler:](loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentationForContentType:openInPlace:completionHandler:](loadfilerepresentationforcontenttype_openinplace_completionhandler_.md): Asynchronously copies the content type data into a generic data object with the specified parameters.
- [loadObjectOfClass:completionHandler:](loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.

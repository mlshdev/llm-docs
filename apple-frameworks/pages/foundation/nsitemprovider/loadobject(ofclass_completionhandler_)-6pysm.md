> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/loadobject(ofclass:completionhandler:)-6pysm](https://developer.apple.com/documentation/foundation/nsitemprovider/loadobject(ofclass:completionhandler:)-6pysm)

# loadObject(ofClass:completionHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Asynchronously loads an object of a specified class to an item provider, returning a progress object.

## Declaration

```swift
@preconcurrency func loadObject<T>(ofClass: T.Type, completionHandler: @escaping @Sendable (T?, (any Error)?) -> Void) -> Progress where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderReading
```

## See Also

### Loading the provider’s contents

- [loadItem(forTypeIdentifier:options:completionHandler:)](loaditem%28fortypeidentifier_options_completionhandler_%29.md): Deprecated. Loads the item’s data and coerces it to the specified type.
- [loadDataRepresentation(forTypeIdentifier:completionHandler:)](loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentation(for:completionHandler:)](loaddatarepresentation%28for_completionhandler_%29.md): Asynchronously copies the universal type data into a generic data object, returning a progress object.
- [loadFileRepresentation(forTypeIdentifier:completionHandler:)](loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentation(for:openInPlace:completionHandler:)](loadfilerepresentation%28for_openinplace_completionhandler_%29.md): Asynchronously writes a copy of the universal type data to a temporary file, returning a progress object.
- [loadInPlaceFileRepresentation(forTypeIdentifier:completionHandler:)](loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously opens a file in place, if possible, returning a progress object.
- [loadObject(ofClass:completionHandler:)](loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadTransferable(type:completionHandler:)](loadtransferable%28type_completionhandler_%29.md): Asynchronously loads an object of a specified transferable type to an item provider, returning a progress object.

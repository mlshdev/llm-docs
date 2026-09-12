> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/loaditem(fortypeidentifier:options:completionhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/loaditem(fortypeidentifier:options:completionhandler:))

# loadItem(forTypeIdentifier:options:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Loads the item’s data and coerces it to the specified type.

> Use loadObjectOfClass:completionHandler: instead.

## Declaration

```swift
func loadItem(forTypeIdentifier typeIdentifier: String, options: [AnyHashable : Any]? = nil, completionHandler: NSItemProvider.CompletionHandler? = nil)
```

```swift
func loadItem(forTypeIdentifier typeIdentifier: String, options: [AnyHashable : Any]? = nil) async throws -> any NSSecureCoding
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.
- `options`: A dictionary of keys and values that provide information about the item, such as the size of an image. (See [NSItemProviderPreferredImageSizeKey](../nsitemproviderpreferredimagesizekey.md) for a key you can use.)
- `completionHandler`: A completion handler block to execute with the results. For information about the format of this block, see [NSItemProvider.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

Call this method when you want to retrieve the item provider’s data. If the item provider object is able to provide data in the requested type, it does so and asynchronously executes your `completionHandler` block with the results. The block may be executed on a background thread.

The type information for the first parameter of your `completionHandler` block should be set to the class of the expected type. For example, when requesting text data, you might set the type of the first parameter to [NSString](../nsstring.md) or [NSAttributedString](../nsattributedstring.md). An item provider can perform simple type conversions of the data to the class you specify, such as from [NSURL](../nsurl.md) to [NSData](../nsdata.md) or [FileWrapper](../filewrapper.md), or from [NSData](../nsdata.md) to [UIImage](../../uikit/uiimage.md) (in iOS) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS). If the data could not be retrieved or coerced to the specified class, an error is passed to the completion block’s.

## See Also

### Loading the provider’s contents

- [loadDataRepresentation(forTypeIdentifier:completionHandler:)](loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentation(for:completionHandler:)](loaddatarepresentation%28for_completionhandler_%29.md): Asynchronously copies the universal type data into a generic data object, returning a progress object.
- [loadFileRepresentation(forTypeIdentifier:completionHandler:)](loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentation(for:openInPlace:completionHandler:)](loadfilerepresentation%28for_openinplace_completionhandler_%29.md): Asynchronously writes a copy of the universal type data to a temporary file, returning a progress object.
- [loadInPlaceFileRepresentation(forTypeIdentifier:completionHandler:)](loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously opens a file in place, if possible, returning a progress object.
- [loadObject(ofClass:completionHandler:)](loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadObject(ofClass:completionHandler:)](loadobject%28ofclass_completionhandler_%29-6pysm.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.
- [loadTransferable(type:completionHandler:)](loadtransferable%28type_completionhandler_%29.md): Asynchronously loads an object of a specified transferable type to an item provider, returning a progress object.

# loadItemForTypeIdentifier:options:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Loads the item’s data and coerces it to the specified type.

> Use loadObjectOfClass:completionHandler: instead.

## Declaration

```objectivec
- (void) loadItemForTypeIdentifier:(NSString *) typeIdentifier options:(NSDictionary *) options completionHandler:(NSItemProviderCompletionHandler) completionHandler;
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.
- `options`: A dictionary of keys and values that provide information about the item, such as the size of an image. (See [NSItemProviderPreferredImageSizeKey](../nsitemproviderpreferredimagesizekey.md) for a key you can use.)
- `completionHandler`: A completion handler block to execute with the results. For information about the format of this block, see [NSItemProviderCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

Call this method when you want to retrieve the item provider’s data. If the item provider object is able to provide data in the requested type, it does so and asynchronously executes your `completionHandler` block with the results. The block may be executed on a background thread.

The type information for the first parameter of your `completionHandler` block should be set to the class of the expected type. For example, when requesting text data, you might set the type of the first parameter to [NSString](../nsstring.md) or [NSAttributedString](../nsattributedstring.md). An item provider can perform simple type conversions of the data to the class you specify, such as from [NSURL](../nsurl.md) to [NSData](../nsdata.md) or [NSFileWrapper](../filewrapper.md), or from [NSData](../nsdata.md) to [UIImage](../../uikit/uiimage.md) (in iOS) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS). If the data could not be retrieved or coerced to the specified class, an error is passed to the completion block’s.

## See Also

### Loading the provider’s contents

- [loadDataRepresentationForTypeIdentifier:completionHandler:](loaddatarepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadDataRepresentationForContentType:completionHandler:](loaddatarepresentationforcontenttype_completionhandler_.md): Asynchronously copies the provided, typed data into a generic data object, returning a progress object.
- [loadFileRepresentationForTypeIdentifier:completionHandler:](loadfilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously writes a copy of the provided, typed data to a temporary file, returning a progress object.
- [loadFileRepresentationForContentType:openInPlace:completionHandler:](loadfilerepresentationforcontenttype_openinplace_completionhandler_.md): Asynchronously copies the content type data into a generic data object with the specified parameters.
- [loadInPlaceFileRepresentationForTypeIdentifier:completionHandler:](loadinplacefilerepresentation%28fortypeidentifier_completionhandler_%29.md): Asynchronously opens a file in place, if possible, returning a progress object.
- [loadObjectOfClass:completionHandler:](loadobject%28ofclass_completionhandler_%29-8ak5d.md): Asynchronously loads an object of a specified class to an item provider, returning a progress object.

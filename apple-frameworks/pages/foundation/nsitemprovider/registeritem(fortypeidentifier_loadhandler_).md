> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registeritem(fortypeidentifier:loadhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registeritem(fortypeidentifier:loadhandler:))

# registerItem(forTypeIdentifier:loadHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Lazily registers an item, according to the item provider type coercion policy.

> Use registerObjectOfClass:visibility:loadHandler: instead.

## Declaration

```swift
func registerItem(forTypeIdentifier typeIdentifier: String, loadHandler: @escaping NSItemProvider.LoadHandler)
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.
- `loadHandler`: A block capable of returning the data item as the specified type. For information about implementing this block, see [NSItemProvider.LoadHandler](loadhandler.md).

<a id="Discussion"></a>

## Discussion

Use this method to register blocks that can take the item provider’s file or data object and convert it to a specific data format. Your `loadHandler` block is executed when a client passes the same `typeIdentifier` string to the [loadItem(forTypeIdentifier:options:completionHandler:)](loaditem%28fortypeidentifier_options_completionhandler_%29.md) method. In the implementation of your block, coerce the data to the specified type and call the provided completion handler. You must call the completion handler, either with the requested data or with an error.

Item providers know how to coerce known types of objects, such as images or strings. Use this method to register blocks to coerce your custom data types.

## See Also

### Registering data

- [registerDataRepresentation(forTypeIdentifier:visibility:loadHandler:)](registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerDataRepresentation(for:visibility:loadHandler:)](registerdatarepresentation%28for_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.

# registerItemForTypeIdentifier:loadHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Lazily registers an item, according to the item provider type coercion policy.

> Use registerObjectOfClass:visibility:loadHandler: instead.

## Declaration

```objectivec
- (void) registerItemForTypeIdentifier:(NSString *) typeIdentifier loadHandler:(NSItemProviderLoadHandler) loadHandler;
```

## Parameters

- `typeIdentifier`: A string that represents the desired UTI.
- `loadHandler`: A block capable of returning the data item as the specified type. For information about implementing this block, see [NSItemProviderLoadHandler](loadhandler.md).

<a id="Discussion"></a>

## Discussion

Use this method to register blocks that can take the item provider’s file or data object and convert it to a specific data format. Your `loadHandler` block is executed when a client passes the same `typeIdentifier` string to the [loadItemForTypeIdentifier:options:completionHandler:](loaditem%28fortypeidentifier_options_completionhandler_%29.md) method. In the implementation of your block, coerce the data to the specified type and call the provided completion handler. You must call the completion handler, either with the requested data or with an error.

Item providers know how to coerce known types of objects, such as images or strings. Use this method to register blocks to coerce your custom data types.

## See Also

### Registering data

- [registerDataRepresentationForTypeIdentifier:visibility:loadHandler:](registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerDataRepresentationForContentType:visibility:loadHandler:](registerdatarepresentationforcontenttype_visibility_loadhandler_.md): Lazily registers an item, according to the item provider type coercion policy.

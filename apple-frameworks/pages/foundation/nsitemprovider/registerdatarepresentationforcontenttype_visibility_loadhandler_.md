> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerdatarepresentationforcontenttype:visibility:loadhandler:](https://developer.apple.com/documentation/foundation/nsitemprovider/registerdatarepresentationforcontenttype:visibility:loadhandler:)

# registerDataRepresentationForContentType:visibility:loadHandler:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Lazily registers an item, according to the item provider type coercion policy.

## Declaration

```objectivec
- (void) registerDataRepresentationForContentType:(UTType *) contentType visibility:(NSItemProviderRepresentationVisibility) visibility loadHandler:(NSProgress * (^)(void (^completionHandler)(NSData *data, NSError *error))) loadHandler;
```

## Parameters

- `contentType`: A string that represents the desired UTI.
- `visibility`: The [NSItemProviderRepresentationVisibility](../nsitemproviderrepresentationvisibility.md) setting.
- `loadHandler`: A block capable of returning the data item as the specified type. For information about implementing this block, see [NSItemProviderLoadHandler](loadhandler.md).

## See Also

### Registering data

- [registerDataRepresentationForTypeIdentifier:visibility:loadHandler:](registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerItemForTypeIdentifier:loadHandler:](registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.

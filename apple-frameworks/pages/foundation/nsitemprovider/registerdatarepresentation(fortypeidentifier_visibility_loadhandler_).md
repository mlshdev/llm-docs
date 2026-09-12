> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerdatarepresentation(fortypeidentifier:visibility:loadhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerdatarepresentation(fortypeidentifier:visibility:loadhandler:))

# registerDataRepresentation(forTypeIdentifier:visibility:loadHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Registers a data-backed representation for an item, specifiying item visibility and a load handler.

## Declaration

```swift
func registerDataRepresentation(forTypeIdentifier typeIdentifier: String, visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping @Sendable (@escaping @Sendable (Data?, (any Error)?) -> Void) -> Progress?)
```

## See Also

### Registering data

- [registerDataRepresentation(for:visibility:loadHandler:)](registerdatarepresentation%28for_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerItem(forTypeIdentifier:loadHandler:)](registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.

# registerDataRepresentationForTypeIdentifier:visibility:loadHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Registers a data-backed representation for an item, specifiying item visibility and a load handler.

## Declaration

```objectivec
- (void) registerDataRepresentationForTypeIdentifier:(NSString *) typeIdentifier visibility:(NSItemProviderRepresentationVisibility) visibility loadHandler:(NSProgress * (^)(void (^completionHandler)(NSData *data, NSError *error))) loadHandler;
```

## See Also

### Registering data

- [registerItemForTypeIdentifier:loadHandler:](registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.
- [registerDataRepresentationForContentType:visibility:loadHandler:](registerdatarepresentationforcontenttype_visibility_loadhandler_.md): Lazily registers an item, according to the item provider type coercion policy.

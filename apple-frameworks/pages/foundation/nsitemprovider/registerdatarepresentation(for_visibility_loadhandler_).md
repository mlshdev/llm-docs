> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerdatarepresentation(for:visibility:loadhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registerdatarepresentation(for:visibility:loadhandler:))

# registerDataRepresentation(for:visibility:loadHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Registers a data-backed representation for an item, specifiying item visibility and a load handler.

## Declaration

```swift
func registerDataRepresentation(for contentType: UTType, visibility: NSItemProviderRepresentationVisibility = .all, loadHandler: @escaping @Sendable (@escaping (Data?, (any Error)?) -> Void) -> Progress?)
```

## See Also

### Registering data

- [registerDataRepresentation(forTypeIdentifier:visibility:loadHandler:)](registerdatarepresentation%28fortypeidentifier_visibility_loadhandler_%29.md): Registers a data-backed representation for an item, specifiying item visibility and a load handler.
- [registerItem(forTypeIdentifier:loadHandler:)](registeritem%28fortypeidentifier_loadhandler_%29.md): Deprecated. Lazily registers an item, according to the item provider type coercion policy.

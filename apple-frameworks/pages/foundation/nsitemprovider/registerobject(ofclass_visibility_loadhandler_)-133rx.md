> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registerobject(ofclass:visibility:loadhandler:)-133rx](https://developer.apple.com/documentation/foundation/nsitemprovider/registerobject(ofclass:visibility:loadhandler:)-133rx)

# registerObject(ofClass:visibility:loadHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Lazily adds representations of a specified object type to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.

## Declaration

```swift
@preconcurrency func registerObject<T>(ofClass: T.Type, visibility: NSItemProviderRepresentationVisibility, loadHandler: @escaping @Sendable (@Sendable (T?, (any Error)?) -> Void) -> Progress?) where T : _ObjectiveCBridgeable, T._ObjectiveCType : NSItemProviderWriting
```

## See Also

### Registering objects

- [registerObject(\_:visibility:)](registerobject%28__visibility_%29.md): Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [register(\_:)](register%28__%29.md): Adds representations of a specified transferable type to an item provider.

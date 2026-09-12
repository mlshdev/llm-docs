> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/register(_:)](https://developer.apple.com/documentation/foundation/nsitemprovider/register(_:))

# register(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds representations of a specified transferable type to an item provider.

## Declaration

```swift
func register<T>(_ transferable: @autoclosure @escaping @Sendable () -> T) where T : Transferable
```

## See Also

### Registering objects

- [registerObject(\_:visibility:)](registerobject%28__visibility_%29.md): Adds representations of a specified object to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](registerobject%28ofclass_visibility_loadhandler_%29-9sndn.md): Lazily adds representations of a specified object class to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.
- [registerObject(ofClass:visibility:loadHandler:)](registerobject%28ofclass_visibility_loadhandler_%29-133rx.md): Lazily adds representations of a specified object type to an item provider, based on the object’s implementation of the item provider writing protocol, and adhering to a visibility specification.

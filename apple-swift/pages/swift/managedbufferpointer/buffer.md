> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/buffer](https://developer.apple.com/documentation/swift/managedbufferpointer/buffer)

# buffer

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the object instance being used for storage.

## Declaration

```swift
var buffer: AnyObject { get }
```

## See Also

### Inspecting a Buffer

- [capacity](capacity.md): The actual number of elements that can be stored in this object.
- [header](header.md): The stored `Header` instance.
- [isUniqueReference()](isuniquereference%28%29.md): Returns `true` if `self` holds the only strong reference to its buffer; otherwise, returns `false`.

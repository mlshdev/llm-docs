> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/managedbufferpointer/header

# header

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The stored `Header` instance.

## Declaration

```swift
var header: Header { get set }
```

## See Also

### Inspecting a Buffer

- [capacity](capacity.md): The actual number of elements that can be stored in this object.
- [buffer](buffer.md): Returns the object instance being used for storage.
- [isUniqueReference()](isuniquereference%28%29.md): Returns `true` if `self` holds the only strong reference to its buffer; otherwise, returns `false`.

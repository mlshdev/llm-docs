> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/capacity](https://developer.apple.com/documentation/swift/managedbufferpointer/capacity)

# capacity

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The actual number of elements that can be stored in this object.

## Declaration

```swift
var capacity: Int { get }
```

<a id="discussion"></a>

## Discussion

This value may be nontrivial to compute; it is usually a good idea to store this information in the “header” area when an instance is created.

## See Also

### Inspecting a Buffer

- [header](header.md): The stored `Header` instance.
- [buffer](buffer.md): Returns the object instance being used for storage.
- [isUniqueReference()](isuniquereference%28%29.md): Returns `true` if `self` holds the only strong reference to its buffer; otherwise, returns `false`.

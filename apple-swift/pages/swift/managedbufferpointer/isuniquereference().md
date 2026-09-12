> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/isuniquereference()](https://developer.apple.com/documentation/swift/managedbufferpointer/isuniquereference())

# isUniqueReference()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns `true` if `self` holds the only strong reference to its buffer; otherwise, returns `false`.

## Declaration

```swift
mutating func isUniqueReference() -> Bool
```

<a id="discussion"></a>

## Discussion

See `isKnownUniquelyReferenced` for details.

## See Also

### Inspecting a Buffer

- [capacity](capacity.md): The actual number of elements that can be stored in this object.
- [header](header.md): The stored `Header` instance.
- [buffer](buffer.md): Returns the object instance being used for storage.

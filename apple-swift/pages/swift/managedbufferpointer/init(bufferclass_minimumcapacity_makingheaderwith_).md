> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/init(bufferclass:minimumcapacity:makingheaderwith:)](https://developer.apple.com/documentation/swift/managedbufferpointer/init(bufferclass:minimumcapacity:makingheaderwith:))

# init(bufferClass:minimumCapacity:makingHeaderWith:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Create with new storage containing an initial `Header` and space for at least `minimumCapacity` `element`s.

## Declaration

```swift
init(bufferClass: AnyClass, minimumCapacity: Int, makingHeaderWith factory: (AnyObject, (AnyObject) -> Int) throws -> Header) rethrows
```

## Parameters

- `bufferClass`: The class of the object used for storage.
- `minimumCapacity`: The minimum number of `Element`s that must be able to be stored in the new buffer.
- `factory`: A function that produces the initial `Header` instance stored in the buffer, given the `buffer` object and a function that can be called on it to get the actual number of allocated elements.

<a id="discussion"></a>

## Discussion

> **Precondition**

> `minimumCapacity >= 0`, and the type indicated by `bufferClass` is a non-`@objc` class with no declared stored properties.  The `deinit` of `bufferClass` must destroy its stored `Header` and any constructed `Element`s.

## See Also

### Creating a Buffer

- [init(unsafeBufferObject:)](init%28unsafebufferobject_%29.md): Manage the given `buffer`.

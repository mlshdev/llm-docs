> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/managedbufferpointer/init(unsafebufferobject:)](https://developer.apple.com/documentation/swift/managedbufferpointer/init(unsafebufferobject:))

# init(unsafeBufferObject:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Manage the given `buffer`.

## Declaration

```swift
init(unsafeBufferObject buffer: AnyObject)
```

<a id="discussion"></a>

## Discussion

> **Precondition**

> `buffer` is an instance of a non-`@objc` class whose `deinit` destroys its stored `Header` and any constructed `Element`s.

## See Also

### Creating a Buffer

- [init(bufferClass:minimumCapacity:makingHeaderWith:)](init%28bufferclass_minimumcapacity_makingheaderwith_%29.md): Create with new storage containing an initial `Header` and space for at least `minimumCapacity` `element`s.

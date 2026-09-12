> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/memorylayout/size](https://developer.apple.com/documentation/swift/memorylayout/size)

# size

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The contiguous memory footprint of `T`, in bytes.

## Declaration

```swift
static var size: Int { get }
```

<a id="discussion"></a>

## Discussion

A type’s size does not include any dynamically allocated or out of line storage. In particular, `MemoryLayout<T>.size`, when `T` is a class type, is the same regardless of how many stored properties `T` has.

When allocating memory for multiple instances of `T` using an unsafe pointer, use a multiple of the type’s stride instead of its size.

## See Also

### Accessing the Layout of a Type

- [alignment](alignment.md): The default memory alignment of `T`, in bytes.
- [stride](stride.md): The number of bytes from the start of one instance of `T` to the start of the next when stored in contiguous memory or in an `Array<T>`.

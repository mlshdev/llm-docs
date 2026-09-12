> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/memorylayout/stride](https://developer.apple.com/documentation/swift/memorylayout/stride)

# stride

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The number of bytes from the start of one instance of `T` to the start of the next when stored in contiguous memory or in an `Array<T>`.

## Declaration

```swift
static var stride: Int { get }
```

<a id="discussion"></a>

## Discussion

This is the same as the number of bytes moved when an `UnsafePointer<T>` instance is incremented. `T` may have a lower minimal alignment that trades runtime performance for space efficiency. This value is always positive.

## See Also

### Accessing the Layout of a Type

- [size](size.md): The contiguous memory footprint of `T`, in bytes.
- [alignment](alignment.md): The default memory alignment of `T`, in bytes.

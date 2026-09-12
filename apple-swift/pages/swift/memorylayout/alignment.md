> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/memorylayout/alignment](https://developer.apple.com/documentation/swift/memorylayout/alignment)

# alignment

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default memory alignment of `T`, in bytes.

## Declaration

```swift
static var alignment: Int { get }
```

<a id="discussion"></a>

## Discussion

Use the `alignment` property for a type when allocating memory using an unsafe pointer. This value is always positive.

## See Also

### Accessing the Layout of a Type

- [size](size.md): The contiguous memory footprint of `T`, in bytes.
- [stride](stride.md): The number of bytes from the start of one instance of `T` to the start of the next when stored in contiguous memory or in an `Array<T>`.

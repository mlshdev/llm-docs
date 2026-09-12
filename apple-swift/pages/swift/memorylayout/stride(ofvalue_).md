> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/memorylayout/stride(ofvalue:)](https://developer.apple.com/documentation/swift/memorylayout/stride(ofvalue:))

# stride(ofValue:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the number of bytes from the start of one instance of `T` to the start of the next when stored in contiguous memory or in an `Array<T>`.

## Declaration

```swift
static func stride(ofValue value: borrowing T) -> Int
```

## Parameters

- `value`: A value representative of the type to describe.

<a id="return-value"></a>

## Return Value

The stride, in bytes, of the given value’s type.

<a id="discussion"></a>

## Discussion

This is the same as the number of bytes moved when an `UnsafePointer<T>` instance is incremented. `T` may have a lower minimal alignment that trades runtime performance for space efficiency. The result is always positive.

When you have a type instead of an instance, use the `MemoryLayout<T>.stride` static property instead.

```swift
let x: Int = 100

// Finding the stride of a value's type
let s = MemoryLayout.stride(ofValue: x)
// s == 8

// Finding the stride of a type directly
let t = MemoryLayout<Int>.stride
// t == 8
```

## See Also

### Accessing the Layout of a Value

- [size(ofValue:)](size%28ofvalue_%29.md): Returns the contiguous memory footprint of the given instance.
- [alignment(ofValue:)](alignment%28ofvalue_%29.md): Returns the default memory alignment of `T`.

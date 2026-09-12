> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/memorylayout/alignment(ofvalue:)](https://developer.apple.com/documentation/swift/memorylayout/alignment(ofvalue:))

# alignment(ofValue:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the default memory alignment of `T`.

## Declaration

```swift
static func alignment(ofValue value: borrowing T) -> Int
```

## Parameters

- `value`: A value representative of the type to describe.

<a id="return-value"></a>

## Return Value

The default memory alignment, in bytes, of the given value’s type. This value is always positive.

<a id="discussion"></a>

## Discussion

Use a type’s alignment when allocating memory using an unsafe pointer.

When you have a type instead of an instance, use the `MemoryLayout<T>.stride` static property instead.

```swift
let x: Int = 100

// Finding the alignment of a value's type
let s = MemoryLayout.alignment(ofValue: x)
// s == 8

// Finding the alignment of a type directly
let t = MemoryLayout<Int>.alignment
// t == 8
```

## See Also

### Accessing the Layout of a Value

- [stride(ofValue:)](stride%28ofvalue_%29.md): Returns the number of bytes from the start of one instance of `T` to the start of the next when stored in contiguous memory or in an `Array<T>`.
- [size(ofValue:)](size%28ofvalue_%29.md): Returns the contiguous memory footprint of the given instance.

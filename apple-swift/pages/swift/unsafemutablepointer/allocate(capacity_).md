> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/allocate(capacity:)](https://developer.apple.com/documentation/swift/unsafemutablepointer/allocate(capacity:))

# allocate(capacity:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allocates uninitialized memory for the specified number of instances of type `Pointee`.

## Declaration

```swift
static func allocate(capacity count: Int) -> UnsafeMutablePointer<Pointee>
```

## Parameters

- `count`: The amount of memory to allocate, counted in instances of `Pointee`.

<a id="discussion"></a>

## Discussion

The resulting pointer references a region of memory that is bound to `Pointee` and is `count * MemoryLayout<Pointee>.stride` bytes in size.

The following example allocates enough new memory to store four `Int` instances and then initializes that memory with the elements of a range.

```swift
let intPointer = UnsafeMutablePointer<Int>.allocate(capacity: 4)
for i in 0..<4 {
    (intPointer + i).initialize(to: i)
}
print(intPointer.pointee)
// Prints "0"
```

When you allocate memory, always remember to deallocate once you’re finished.

```swift
intPointer.deallocate()
```

You must only use `deallocate()` to end the lifetime of memory created with `allocate()`; it is a programming error to use `free` or another deallocation API, and may result in undefined behavior.

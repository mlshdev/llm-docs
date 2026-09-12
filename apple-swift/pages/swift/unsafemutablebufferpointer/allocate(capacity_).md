> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/allocate(capacity:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/allocate(capacity:))

# allocate(capacity:)

**Framework:** Swift  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Allocates uninitialized memory for the specified number of instances of type `Element`.

## Declaration

```swift
static func allocate(capacity count: Int) -> UnsafeMutableBufferPointer<Element>
```

## Parameters

- `count`: The amount of memory to allocate, counted in instances of `Element`.

<a id="discussion"></a>

## Discussion

The resulting buffer references a region of memory that is bound to `Element` and is `count * MemoryLayout<Element>.stride` bytes in size.

The following example allocates a buffer that can store four `Int` instances and then initializes that memory with the elements of a range:

```swift
let buffer = UnsafeMutableBufferPointer<Int>.allocate(capacity: 4)
_ = buffer.initialize(from: 1...4)
print(buffer[2])
// Prints "3"
```

When you allocate memory, always remember to deallocate once you’re finished.

```swift
buffer.deallocate()
```

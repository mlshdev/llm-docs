> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/contiguousarray/init(unsafeuninitializedcapacity:initializingwith:)](https://developer.apple.com/documentation/swift/contiguousarray/init(unsafeuninitializedcapacity:initializingwith:))

# init(unsafeUninitializedCapacity:initializingWith:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an array with the specified capacity, and then calls the given closure with a buffer covering the array’s uninitialized memory.

## Declaration

```swift
init<E>(unsafeUninitializedCapacity: Int, initializingWith initializer: (inout UnsafeMutableBufferPointer<Element>, inout Int) throws(E) -> Void) throws(E) where E : Error
```

## Parameters

- `unsafeUninitializedCapacity`: The number of elements to allocate space for in the new array.
- `initializer`: A closure that initializes elements and sets the count of the new array.

  - Parameters:

    - buffer: A buffer covering uninitialized memory with room for the specified number of elements.
    - initializedCount: The count of initialized elements in the array, which begins as zero. Set `initializedCount` to the number of elements you initialize.

<a id="discussion"></a>

## Discussion

Inside the closure, set the `initializedCount` parameter to the number of elements that are initialized by the closure. The memory in the range `buffer[0..<initializedCount]` must be initialized at the end of the closure’s execution, and the memory in the range `buffer[initializedCount...]` must be uninitialized. This postcondition must hold even if the `initializer` closure throws an error.

> **Note**

> While the resulting array may have a capacity larger than the requested amount, the buffer passed to the closure will cover exactly the requested number of elements.

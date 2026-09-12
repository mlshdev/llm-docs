> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/move()](https://developer.apple.com/documentation/swift/unsafemutablepointer/move())

# move()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves and returns the referenced instance, returning the pointer’s memory to an uninitialized state.

## Declaration

```swift
func move() -> Pointee
```

<a id="return-value"></a>

## Return Value

The instance referenced by this pointer.

<a id="discussion"></a>

## Discussion

Calling the `move()` method on a pointer `p` that references memory of type `T` is equivalent to the following code, aside from any cost and incidental side effects of copying and destroying the value:

```swift
let value: T = {
    defer { p.deinitialize(count: 1) }
    return p.pointee
}()
```

The memory referenced by this pointer must be initialized. After calling `move()`, the memory is uninitialized.

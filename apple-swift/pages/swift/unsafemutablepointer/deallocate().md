> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/deallocate()](https://developer.apple.com/documentation/swift/unsafemutablepointer/deallocate())

# deallocate()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deallocates the memory block previously allocated at this pointer.

## Declaration

```swift
func deallocate()
```

<a id="discussion"></a>

## Discussion

This pointer must be a pointer to the start of a previously allocated memory block. The memory must not be initialized or `Pointee` must be a trivial type.

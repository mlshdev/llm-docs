> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawpointer/deallocate()](https://developer.apple.com/documentation/swift/unsaferawpointer/deallocate())

# deallocate()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deallocates the previously allocated memory block referenced by this pointer.

## Declaration

```swift
func deallocate()
```

<a id="discussion"></a>

## Discussion

The memory to be deallocated must be uninitialized or initialized to a trivial type.

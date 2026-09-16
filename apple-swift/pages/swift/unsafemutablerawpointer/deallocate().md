> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unsafemutablerawpointer/deallocate()

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

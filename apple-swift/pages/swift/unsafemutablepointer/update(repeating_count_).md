> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablepointer/update(repeating:count:)](https://developer.apple.com/documentation/swift/unsafemutablepointer/update(repeating:count:))

# update(repeating:count:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Update this pointer’s initialized memory with the specified number of consecutive copies of the given value.

## Declaration

```swift
func update(repeating repeatedValue: Pointee, count: Int)
```

## Parameters

- `repeatedValue`: The value used when updating this pointer’s memory.
- `count`: The number of consecutive elements to update. `count` must not be negative.

<a id="discussion"></a>

## Discussion

The region of memory starting at this pointer and covering `count` instances of the pointer’s `Pointee` type must be initialized or `Pointee` must be a trivial type. After calling `update(repeating:count:)`, the region is initialized.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/init(bitpattern:)-2i0qy](https://developer.apple.com/documentation/swift/int/init(bitpattern:)-2i0qy)

# init(bitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new value with the bit pattern of the given pointer.

## Declaration

```swift
init<P>(bitPattern pointer: P?) where P : _Pointer
```

## Parameters

- `pointer`: The pointer to use as the source for the new integer.

<a id="discussion"></a>

## Discussion

The new value represents the address of the pointer passed as `pointer`. If `pointer` is `nil`, the result is `0`.

## See Also

### Working with Memory Addresses

- [init(bitPattern:)](init%28bitpattern_%29-2o9co.md): Creates an integer that captures the full value of the given object identifier.
- [init(bitPattern:)](init%28bitpattern_%29-5qm7a.md): Creates a new value with the bit pattern of the given pointer.
